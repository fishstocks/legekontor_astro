import type { FhiNewsItem } from '../data/clinic';

const FHI_RSS_URL = 'https://www.fhi.no/rss/nyheter/';
const FALLBACK_UPDATED_LABEL = '26. juli 2026';
const NEWS_LIMIT = 3;
const SUMMARY_LIMIT = 190;

export interface FhiNewsFeed {
  items: FhiNewsItem[];
  updatedLabel: string;
  source: 'rss' | 'fallback';
}

const norwegianDate = new Intl.DateTimeFormat('nb-NO', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Oslo',
});

function decodeXml(value: string): string {
  const namedEntities: Record<string, string> = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    nbsp: ' ',
    quot: '"',
  };

  return value.replace(
    /&(?:#(x[\da-f]+|\d+)|([a-z]+));/gi,
    (entity, numeric: string | undefined, named: string | undefined) => {
      if (numeric) {
        const isHex = numeric.toLowerCase().startsWith('x');
        const codePoint = Number.parseInt(isHex ? numeric.slice(1) : numeric, isHex ? 16 : 10);
        return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : entity;
      }

      return named ? (namedEntities[named.toLowerCase()] ?? entity) : entity;
    },
  );
}

function getTagValue(block: string, tag: string): string {
  const match = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  if (!match) return '';

  return match[1]
    .replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/i, '$1')
    .trim();
}

function cleanText(value: string): string {
  return decodeXml(decodeXml(value).replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateAtWord(value: string, limit: number): string {
  if (value.length <= limit) return value;

  const candidate = value.slice(0, limit + 1);
  const lastSpace = candidate.lastIndexOf(' ');
  const cutoff = lastSpace > limit * 0.7 ? lastSpace : limit;
  return `${candidate.slice(0, cutoff).trimEnd()}…`;
}

function isFhiNewsUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return (
      url.protocol === 'https:' &&
      (url.hostname === 'fhi.no' || url.hostname.endsWith('.fhi.no')) &&
      url.pathname.includes('/nyheter/')
    );
  } catch {
    return false;
  }
}

export function parseFhiNewsRss(xml: string): {
  items: FhiNewsItem[];
  updatedLabel?: string;
} {
  const items: FhiNewsItem[] = [];
  const itemPattern = /<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi;

  for (const match of xml.matchAll(itemPattern)) {
    const block = match[1];
    const title = cleanText(getTagValue(block, 'title'));
    const summary = truncateAtWord(cleanText(getTagValue(block, 'description')), SUMMARY_LIMIT);
    const href = cleanText(getTagValue(block, 'link') || getTagValue(block, 'guid'));
    const publishedAt = new Date(cleanText(getTagValue(block, 'pubDate')));

    if (!title || !summary || !isFhiNewsUrl(href) || Number.isNaN(publishedAt.getTime())) {
      continue;
    }

    items.push({
      title,
      summary,
      date: norwegianDate.format(publishedAt),
      category: 'Nyhet',
      href,
      status: 'verified',
    });

    if (items.length === NEWS_LIMIT) break;
  }

  const lastBuildDate = new Date(cleanText(getTagValue(xml, 'lastBuildDate')));

  return {
    items,
    updatedLabel: Number.isNaN(lastBuildDate.getTime())
      ? undefined
      : norwegianDate.format(lastBuildDate),
  };
}

export async function getFhiNewsFeed(fallbackItems: FhiNewsItem[]): Promise<FhiNewsFeed> {
  try {
    const response = await fetch(FHI_RSS_URL, {
      headers: {
        Accept: 'application/rss+xml, application/xml;q=0.9, text/xml;q=0.8',
        'User-Agent': 'Vagsbygd-Legesenter-News/1.0 (+https://vagsbygdlegesenter.no)',
      },
      signal: AbortSignal.timeout(5_000),
    });

    if (!response.ok) {
      throw new Error(`FHI RSS returned ${response.status}`);
    }

    const parsed = parseFhiNewsRss(await response.text());
    if (parsed.items.length < NEWS_LIMIT) {
      throw new Error('FHI RSS did not contain enough valid news items');
    }

    return {
      items: parsed.items,
      updatedLabel: parsed.updatedLabel ?? norwegianDate.format(new Date()),
      source: 'rss',
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'unknown error';
    console.warn(`[FHI RSS] Using verified fallback stories: ${reason}`);

    return {
      items: fallbackItems.slice(0, NEWS_LIMIT),
      updatedLabel: FALLBACK_UPDATED_LABEL,
      source: 'fallback',
    };
  }
}
