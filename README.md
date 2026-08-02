# Vågsbygd legesenter

Et statisk, pasientorientert nettsted bygget med Astro 7 og TypeScript.

## Kom i gang

```bash
npm install
npm run dev
```

Andre nyttige kommandoer:

```bash
npm run check
npm run build
npm run preview
npm run build:release
```

`npm run build` lager en lokal forhåndsvisning med et synlig utkastbanner.
`npm run build:release` er publiseringsbygget og stopper dersom kritiske
opplysninger fortsatt er merket `needs-review`.

## Innhold som må bekreftes

Alt redigerbart klinikkinnhold ligger i
[`src/data/clinic.ts`](./src/data/clinic.ts). Før publisering må legekontoret
bekrefte:

- åpningstider og telefontid
- direkte lenker til legekontorets tjenester på Helsenorge
- ansatte og tilknytning
- tjenester, lokale priser og behandlingstid
- parkering og kollektivtransport

Sett `status: 'verified'` først når opplysningen er kontrollert. Når alle
kritiske felt er bekreftet, skal `npm run build:release` fullføres uten feil.

## Sider

- `/` – forside og pasienthandlinger
- `/legekontoret/` – informasjon om legekontoret og hvordan det arbeider
- `/ansatte/` – offentlig oppført fastlegeteam
- `/tjenester-og-priser/` – foreløpig tjeneste- og prisinformasjon
- `/praktisk-informasjon/` – resepter, prøvesvar, henvisninger og personvern
- `/kontakt/` – adresse, telefon, åpningstider og adkomst
- `/404.html` – feilside

Nettstedet samler ikke inn helseopplysninger, bruker ikke analyseverktøy og
setter ingen informasjonskapsler.
