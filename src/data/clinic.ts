export type ContentStatus = 'verified' | 'needs-review';

export interface ReviewedValue<T> {
  value: T;
  status: ContentStatus;
  source?: string;
}

export interface OpeningHours {
  label: string;
  hours: string;
  status: ContentStatus;
}

export interface DailyOpeningWindow {
  opens: string;
  closes: string;
}

export interface OpeningHoursException {
  date: string;
  closed?: boolean;
  opens?: string;
  closes?: string;
}

export interface OfficeSchedule {
  timeZone: string;
  weekly: Partial<Record<1 | 2 | 3 | 4 | 5 | 6 | 7, DailyOpeningWindow>>;
  exceptions: OpeningHoursException[];
}

export interface PatientAction {
  label: string;
  description: string;
  href: string;
  preview?: {
    title: string;
    body: string;
    items: string[];
    important: string;
    guideHref: string;
  };
  icon: 'calendar' | 'prescription' | 'message' | 'phone';
  external?: boolean;
  status: ContentStatus;
}

export interface StaffMember {
  name: string;
  role: string;
  initials: string;
  editorialImage: string;
  editorialImageKind?: 'photo' | 'art';
  editorialImageFit?: 'cover' | 'contain';
  editorialImagePosition?: string;
  imageLabel?: string;
  isPlaceholderMember?: boolean;
  description?: string;
  status: ContentStatus;
}

export interface Service {
  title: string;
  description: string;
  note?: string;
  status: ContentStatus;
}

export interface ServiceHighlight {
  title: string;
  description: string;
  icon:
    | 'urgent'
    | 'followup'
    | 'prevention'
    | 'cervical'
    | 'surgery'
    | 'diagnostics'
    | 'tests'
    | 'documents'
    | 'vaccines';
  status: ContentStatus;
}

export interface PriceItem {
  label: string;
  amount: string;
  amountContext?: string;
}

export interface PriceGroup {
  title: string;
  description: string;
  tone: 'sage' | 'sand';
  items: PriceItem[];
}

export interface PriceList {
  validFrom: string;
  validThrough: string;
  checkedOn: string;
  sourceLabel: string;
  sourceUrl: string;
  groups: PriceGroup[];
  status: ContentStatus;
}

export interface Notice {
  title: string;
  message: string;
  dateLabel?: string;
  active: boolean;
  status: ContentStatus;
}

export interface PatientInfoItem {
  title: string;
  details: string[];
  status: ContentStatus;
}

export interface ClinicSwitchInfo {
  title: string;
  description: string;
  journalNote: string;
  href: string;
  status: ContentStatus;
}

export interface ExternalResource {
  name: string;
  description: string;
  href: string;
  logo: string;
  logoAlt: string;
  logoStyle?: 'icon' | 'wide';
  status: ContentStatus;
}

export interface FhiNewsItem {
  title: string;
  summary: string;
  date: string;
  category: 'Nyhet' | 'Forskningsfunn';
  href: string;
  status: ContentStatus;
}

export interface ClinicConfig {
  name: ReviewedValue<string>;
  phone: ReviewedValue<string>;
  phoneDisplay: ReviewedValue<string>;
  address: ReviewedValue<string>;
  postalAddress: ReviewedValue<string>;
  directionsUrl: ReviewedValue<string>;
  email?: ReviewedValue<string>;
  openingHours: OpeningHours[];
  officeSchedule: OfficeSchedule;
  phoneHours: ReviewedValue<string>;
  parking: ReviewedValue<string>;
  publicTransport: ReviewedValue<string>;
  patientActions: PatientAction[];
  urgent: {
    emergencyNumber: ReviewedValue<string>;
    outOfHoursNumber: ReviewedValue<string>;
  };
}

const publicDirectorySource =
  'Offentlig klinikkoppføring, kontrollert 26. juli 2026';

export const clinic: ClinicConfig = {
  name: {
    value: 'Vågsbygd legesenter',
    status: 'verified',
    source: publicDirectorySource,
  },
  phone: {
    value: '+4738000550',
    status: 'verified',
    source: publicDirectorySource,
  },
  phoneDisplay: {
    value: '38 00 05 50',
    status: 'verified',
    source: publicDirectorySource,
  },
  address: {
    value: 'Andøyveien 23',
    status: 'verified',
    source: 'Brukerbekreftet og kontrollert mot offentlig bedriftsoppføring 26. juli 2026',
  },
  postalAddress: {
    value: '4623 Kristiansand S',
    status: 'verified',
    source: 'Brukerbekreftet og kontrollert mot offentlig bedriftsoppføring 26. juli 2026',
  },
  directionsUrl: {
    value:
      'https://www.google.com/maps/search/?api=1&query=And%C3%B8yveien+23%2C+4623+Kristiansand+S',
    status: 'verified',
  },
  openingHours: [
    {
      label: 'Legekontor',
      hours: 'Man–fre 08:00–15:00',
      status: 'verified',
    },
    {
      label: 'Telefon',
      hours: 'Man–fre 08:30–14:30',
      status: 'verified',
    },
    {
      label: 'Laboratorium',
      hours: 'Man–fre 08:15–14:00',
      status: 'verified',
    },
    { label: 'Helg', hours: 'Stengt', status: 'verified' },
  ],
  officeSchedule: {
    timeZone: 'Europe/Oslo',
    weekly: {
      1: { opens: '08:00', closes: '15:00' },
      2: { opens: '08:00', closes: '15:00' },
      3: { opens: '08:00', closes: '15:00' },
      4: { opens: '08:00', closes: '15:00' },
      5: { opens: '08:00', closes: '15:00' },
    },
    // Add confirmed holidays and temporary closures here as YYYY-MM-DD entries.
    exceptions: [],
  },
  phoneHours: {
    value: 'Mandag–fredag kl. 08:30–14:30',
    status: 'verified',
  },
  parking: {
    value: 'Informasjon om parkering oppdateres før publisering.',
    status: 'needs-review',
  },
  publicTransport: {
    value: 'Informasjon om kollektivtransport oppdateres før publisering.',
    status: 'needs-review',
  },
  patientActions: [
    {
      label: 'Bestill time',
      description: 'Se ledige timer og velg et tidspunkt som passer.',
      href: 'https://minhelse.helsenorge.no/',
      preview: {
        title: 'Før du bestiller',
        body: 'På Helsenorge ser du tilgjengelige timer og velger tidspunktet som passer.',
        items: [
          'Logg inn med BankID eller annen sikker pålogging.',
          'Skriv kort hvorfor du ønsker time.',
          'Du får beskjed når timen er bekreftet.',
        ],
        important: 'Kan du ikke møte, må du avbestille så snart som mulig.',
        guideHref: '/praktisk-informasjon/#bestille-time',
      },
      icon: 'calendar',
      external: true,
      status: 'needs-review',
    },
    {
      label: 'Forny resept',
      description: 'Be om ny resept på medisiner du bruker fast.',
      href: 'https://minhelse.helsenorge.no/',
      preview: {
        title: 'Dette kan fornyes',
        body: 'Reseptfornying gjelder medisiner du bruker fast og har fått tidligere.',
        items: [
          'Velg medisinen fra reseptoversikten.',
          'Skriv eventuell tilleggsinformasjon.',
          'Du får beskjed når resepten er behandlet.',
        ],
        important: 'Nye medisiner eller endret dosering krever vanligvis time.',
        guideHref: '/praktisk-informasjon/#fornye-resept',
      },
      icon: 'prescription',
      external: true,
      status: 'needs-review',
    },
    {
      label: 'Start e-konsultasjon',
      description: 'Send medisinske spørsmål som ikke haster.',
      href: 'https://minhelse.helsenorge.no/',
      preview: {
        title: 'Når det passer',
        body: 'Bruk e-konsultasjon for medisinske spørsmål som ikke haster og ikke krever fysisk undersøkelse.',
        items: [
          'Oppfølging av kjent sykdom eller behandling.',
          'Spørsmål om medisiner eller prøvesvar.',
          'Mindre alvorlige helseplager.',
        ],
        important: 'Skal ikke brukes ved akutte tilstander.',
        guideHref: '/praktisk-informasjon/#e-konsultasjon',
      },
      icon: 'message',
      external: true,
      status: 'needs-review',
    },
    {
      label: 'Ring legekontoret',
      description: `Telefon ${'38 00 05 50'}. Ikke send helseopplysninger på e-post.`,
      href: 'tel:+4738000550',
      preview: {
        title: 'Når du bør ringe',
        body: 'Ring når du trenger hjelp som ikke kan vente, eller er usikker på riktig kontaktvei.',
        items: [
          'Akuttime eller rask vurdering samme dag.',
          'Hjelp dersom du ikke kan bruke Helsenorge.',
          'Spørsmål som må avklares med resepsjonen.',
        ],
        important: 'Ved fare for liv, ring 113. Utenom åpningstid, ring legevakt 116 117.',
        guideHref: '/#kontakt',
      },
      icon: 'phone',
      status: 'verified',
    },
  ],
  urgent: {
    emergencyNumber: {
      value: '113',
      status: 'verified',
      source: 'Helsenorge – akutt hjelp',
    },
    outOfHoursNumber: {
      value: '116 117',
      status: 'verified',
      source: 'Helsenorge – legevakt',
    },
  },
};

export const staff: StaffMember[] = [
  {
    name: 'Anna Sverd Rekdal',
    role: 'Lege – spesialist i allmennmedisin',
    initials: 'AR',
    editorialImage: '/images/staff/art/anna-sverd-rekdal.webp',
    editorialImageKind: 'art',
    editorialImagePosition: 'center',
    description:
      'Spesialist i allmennmedisin. Deler listen til Sondre Sverd Rekdal. Glad i hudsykdommer og kvinnehelse. Har også kompetanse på reisemedisin og vaksinering.',
    status: 'needs-review',
  },
  {
    name: 'Sondre Sverd Rekdal',
    role: 'Lege – spesialist i allmennmedisin',
    initials: 'SR',
    editorialImage: '/images/staff/sondre-sverd-rekdal.png',
    editorialImageKind: 'photo',
    editorialImageFit: 'contain',
    editorialImagePosition: 'center',
    description:
      'Spesialist i allmennmedisin. Møter pasienter med både nye helseplager og behov for oppfølging over tid.',
    status: 'needs-review',
  },
  {
    name: 'Tom Andre Aas',
    role: 'Lege – spesialist i allmennmedisin',
    initials: 'TA',
    editorialImage: '/images/staff/art/tom-andre-aas.webp',
    editorialImageKind: 'art',
    editorialImagePosition: 'center',
    description:
      'Spesialist i allmennmedisin. Arbeider med medisinske vurderinger, behandling og oppfølging i allmennpraksis.',
    status: 'needs-review',
  },
  {
    name: 'Therese Holskog',
    role: 'Sykepleier og daglig leder',
    initials: 'TH',
    editorialImage: '/images/staff/art/therese-holskog.webp',
    editorialImageKind: 'art',
    editorialImagePosition: 'center 45%',
    description:
      'Har ansvar for den daglige driften og bidrar til at pasientene møter et koordinert og oversiktlig tilbud ved legesenteret.',
    status: 'needs-review',
  },
  {
    name: 'Ivy Sui Dar Khuah',
    role: 'Helsesekretær',
    initials: 'IK',
    editorialImage: '/images/staff/art/ivy-sui-dar-khuah.webp',
    editorialImageKind: 'art',
    editorialImagePosition: 'center 48%',
    description:
      'Møter pasienter i resepsjonen og hjelper med praktisk veiledning, timeavtaler og oppfølging rundt besøket.',
    status: 'needs-review',
  },
];

export const staffPreview: StaffMember[] = staff;

export const services: Service[] = [
  {
    title: 'Fastlegetime',
    description:
      'Bestill ordinær time når du trenger undersøkelse, medisinsk vurdering eller oppfølging.',
    note: 'Tilbud og bestillingsmåte må bekreftes.',
    status: 'needs-review',
  },
  {
    title: 'E-konsultasjon',
    description:
      'For medisinske spørsmål som ikke haster og som ikke krever fysisk undersøkelse.',
    note: 'Tilgjengelighet må bekreftes.',
    status: 'needs-review',
  },
  {
    title: 'Reseptfornyelse',
    description:
      'Be om fornyelse av medisiner du bruker fast. Bestill i god tid før du går tom.',
    note: 'Rutine og behandlingstid må bekreftes.',
    status: 'needs-review',
  },
  {
    title: 'Prøver',
    description:
      'Prøvetaking gjøres etter avtale eller når legen har bedt deg komme.',
    note: 'Tidspunkt og drop-in-rutine må bekreftes.',
    status: 'needs-review',
  },
  {
    title: 'Attester og skjemaer',
    description:
      'Ta kontakt i god tid dersom du trenger legeattest, helseerklæring eller utfylling av skjema.',
    note: 'Pris og nødvendig dokumentasjon må bekreftes.',
    status: 'needs-review',
  },
  {
    title: 'Vaksiner',
    description:
      'Kontakt legekontoret for å avklare hvilke vaksiner som tilbys og om du trenger resept.',
    note: 'Tilbud og pris må bekreftes.',
    status: 'needs-review',
  },
];

export const serviceHighlights: ServiceHighlight[] = [
  {
    title: 'Akutt legehjelp',
    description:
      'Trenger du rask medisinsk hjelp samme dag? Ring legekontoret for vurdering.',
    icon: 'urgent',
    status: 'needs-review',
  },
  {
    title: 'Celleprøve',
    description:
      'Vi tar celleprøver etter nasjonale anbefalinger og følger deg opp ved behov.',
    icon: 'cervical',
    status: 'needs-review',
  },
  {
    title: 'Småkirurgi',
    description:
      'Vi behandler mindre sårskader og fjerner blant annet føflekker, lipomer og vorter.',
    icon: 'surgery',
    status: 'needs-review',
  },
  {
    title: 'EKG, spirometri og 24-timers blodtrykk',
    description:
      'Vi undersøker hjerterytme, lungefunksjon og blodtrykk når det er medisinsk grunnlag.',
    icon: 'diagnostics',
    status: 'needs-review',
  },
  {
    title: 'Laboratorietjenester',
    description:
      'Vi tilbyr hurtigprøver, urin- og INR-prøver samt ordinær blodprøvetaking.',
    icon: 'tests',
    status: 'needs-review',
  },
  {
    title: 'Vaksiner',
    description:
      'Kontakt oss for å avklare vaksinetilbud og behov for resept.',
    icon: 'vaccines',
    status: 'needs-review',
  },
];

export const priceList: PriceList = {
  validFrom: '1. juli 2026',
  validThrough: '30. juni 2027',
  checkedOn: '27. juli 2026',
  sourceLabel: 'Den norske legeforenings takstplakat',
  sourceUrl:
    'https://storage.googleapis.com/prod_normaltariffen_bucket/normaltariffen/pdfs/takstplakat_2026_2027_fastlege.pdf',
  status: 'verified',
  groups: [
    {
      title: 'Egenandeler som inngår i frikortgrunnlaget',
      description:
        'Egenandelene teller med når du opptjener rett til frikort.',
      tone: 'sage',
      items: [
        {
          label:
            'Konsultasjon hos allmennpraktiserende lege på dagtid eller kveld/legevakt',
          amount: '179 / 301 kr',
          amountContext: 'dag / kveld',
        },
        {
          label: 'Sykebesøk på dagtid eller kveld',
          amount: '240 / 384 kr',
          amountContext: 'dag / kveld',
        },
        {
          label:
            'Tillegg hos spesialist i allmennmedisin ved konsultasjon eller sykebesøk',
          amount: '56 / 41 kr',
          amountContext: 'dag / kveld',
        },
        {
          label:
            'Enkel pasientkontakt ved fremmøte eller bud, inkludert rådgivning, sykmelding, rekvisisjon eller henvisning',
          amount: '64 kr',
        },
        {
          label: 'Tillegg for taking av blodprøver og andre prøver',
          amount: '64 kr',
        },
        {
          label:
            'Taking og undersøkelse av hemoglobin, blodsenkning, hvite blodlegemer og mikroskopering av urinsediment',
          amount: '64 kr',
        },
      ],
    },
    {
      title: 'Betaling som ikke inngår i frikortgrunnlaget',
      description:
        'Disse beløpene dekkes ikke av frikort og må betales av pasienten.',
      tone: 'sand',
      items: [
        {
          label:
            'Tillegg for konsultasjon eller sykebesøk for pasient utenfor fastlegeordningen',
          amount: '131 kr',
        },
        {
          label:
            'Materiell ved gynekologisk undersøkelse, enkle elastiske bind m.m.',
          amount: '81 kr',
        },
        {
          label:
            'Materiell ved spirometri, EKG, rektoskopi, enkelt sårskift m.m.',
          amount: '121 kr',
        },
        {
          label:
            'Materiell ved kateterisering, mindre kirurgiske inngrep, lim m.m.',
          amount: '173 kr',
        },
        {
          label:
            'Materiell ved større kirurgiske inngrep, større sårskift m.m.',
          amount: '235 kr',
        },
        {
          label:
            'Spesielt materiell, medisiner, spiral, kateter, gips, vaksiner og ortoser',
          amount: 'Etter kostnad',
        },
        {
          label:
            'Enkelttime avbestilt senere enn 24 timer før, eller time som ikke benyttes',
          amount: '194 / 314 kr',
          amountContext: 'allmennlege / spesialist',
        },
        {
          label:
            'Kontorets kostnader ved innkreving av ubetalt honorar',
          amount: 'Etter kostnad',
        },
      ],
    },
  ],
};

export const notices: Notice[] = [
  {
    title: 'Endring i legesituasjonen',
    message:
      'Annbjørg Trydal Jansen har dessverre sluttet. En ny lege vil tiltre i tiden fremover. I mellomtiden minner vi om at det er ledig plass på listen til Sondre Sverd Rekdal.',
    dateLabel: '17. mars 2026',
    active: true,
    status: 'needs-review',
  },
];

export const beforeVisitInfo: PatientInfoItem[] = [
  {
    title: 'Akutt time',
    details: ['Ring 38 00 05 50 fra kl. 08:00.'],
    status: 'needs-review',
  },
  {
    title: 'Behov for tolk',
    details: [
      'Dersom du trenger tolk, må du ringe legekontoret for å bestille time.',
    ],
    status: 'needs-review',
  },
  {
    title: 'Blodprøver',
    details: ['Må avtales med lege eller resepsjon.'],
    status: 'needs-review',
  },
  {
    title: 'Legeerklæring',
    details: [
      'Ring samme dag som fraværet starter, og oppgi datoene du er syk.',
      'Kontakt oss for å avtale tid for å hente erklæringen når du er frisk. Sluttdato settes ved utlevering.',
    ],
    status: 'needs-review',
  },
  {
    title: 'Prøvesvar',
    details: ['Følg avtalen du har gjort med legen.'],
    status: 'needs-review',
  },
  {
    title: 'Avbestilling',
    details: ['Avbestill senest 24 timer før timen.'],
    status: 'needs-review',
  },
];

export const clinicSwitchInfo: ClinicSwitchInfo = {
  title: 'Vil du bytte til oss?',
  description:
    'Du kan bytte fastlege via Helsenorge. Søk opp Vågsbygd Torv Legesenter AS og følg stegene der.',
  journalNote:
    'Gi beskjed til legekontoret du bytter fra om at journalen skal sendes til den nye fastlegen. Det skjer ikke automatisk.',
  href: 'https://tjenester.helsenorge.no/bytte-fastlege?searchquery=V%C3%A5gsbygd%20Torv%20Legesenter%20AS&searchquerytype=legekontor',
  status: 'needs-review',
};

export const bloodTestResource: ExternalResource = {
  name: 'Dine blodprøver',
  description:
    'Har du fått tatt blodprøver som er sendt til Fürst laboratorium, kan du logge inn for å se resultatene dine.',
  href: 'https://www.furstpasient.no/',
  logo: '/images/resources/furst.ico',
  logoAlt: 'Fürst',
  logoStyle: 'icon',
  status: 'needs-review',
};

export const publicHealthResources: ExternalResource[] = [
  {
    name: 'Pasientreiser',
    description: 'Søk om dekning av reiseutgifter til og fra behandling.',
    href: 'https://www.helsenorge.no/rettigheter/pasientreiser/',
    logo: '/images/resources/pasientreiser.svg',
    logoAlt: 'Pasientreiser',
    logoStyle: 'icon',
    status: 'verified',
  },
  {
    name: 'NAV',
    description: 'Sykepenger, egenmelding og ytelser · 55 55 33 33.',
    href: 'https://www.nav.no/',
    logo: '/images/resources/nav.svg',
    logoAlt: 'NAV',
    logoStyle: 'icon',
    status: 'verified',
  },
  {
    name: 'Helfo',
    description: 'Frikort, egenandeler og refusjon av helseutgifter.',
    href: 'https://www.helfo.no/',
    logo: '/images/resources/helfo.svg',
    logoAlt: 'Helfo',
    logoStyle: 'wide',
    status: 'verified',
  },
  {
    name: 'Helsedirektoratet',
    description: 'Nasjonale helseråd, anbefalinger og pasientinformasjon.',
    href: 'https://www.helsedirektoratet.no/',
    logo: '/images/resources/helsedirektoratet.svg',
    logoAlt: 'Helsedirektoratet',
    logoStyle: 'wide',
    status: 'verified',
  },
  {
    name: 'Folkehelseinstituttet',
    description: 'Vaksiner, smittevern, sykdomsutbrudd og reiseråd.',
    href: 'https://www.fhi.no/',
    logo: '/images/resources/fhi.svg',
    logoAlt: 'Folkehelseinstituttet',
    logoStyle: 'icon',
    status: 'verified',
  },
  {
    name: 'Helsenorge',
    description: 'Fastlege, resepter, prøvesvar og digitale helsetjenester.',
    href: 'https://www.helsenorge.no/',
    logo: '/images/resources/helsenorge.svg',
    logoAlt: 'Helsenorge',
    logoStyle: 'icon',
    status: 'verified',
  },
  {
    name: 'Helsebiblioteket',
    description: 'Kvalitetssikret informasjon om sykdom og behandling.',
    href: 'https://www.helsebiblioteket.no/',
    logo: '/images/resources/helsebiblioteket.svg',
    logoAlt: 'Helsebiblioteket',
    logoStyle: 'wide',
    status: 'verified',
  },
];

export const fhiNews: FhiNewsItem[] = [
  {
    title: 'Flere unge oppsøker fastlegen om psykiske plager',
    summary:
      'Andelen unge som oppsøker fastlegen for psykiske plager har økt, særlig blant unge voksne mellom 21 og 30 år.',
    date: '1. juli 2026',
    category: 'Forskningsfunn',
    href: 'https://www.fhi.no/nyheter/2026/flere-unge-oppsoker-fastlegen-om-psykiske-plager/',
    status: 'verified',
  },
  {
    title: 'Målet om redusert alkoholbruk nås neppe uten sterkere virkemidler',
    summary:
      'FHIs midtveisevaluering viser at målet om redusert alkoholbruk trolig krever sterkere virkemidler.',
    date: '29. juni 2026',
    category: 'Forskningsfunn',
    href: 'https://www.fhi.no/nyheter/2026/malet-om-redusert-alkoholbruk-nas-neppe-uten-sterkere-virkemidler/',
    status: 'verified',
  },
  {
    title: 'Norske ungdommer sover for lite',
    summary:
      'Mange ungdommer sover for lite på skoledager, og jenter rapporterer oftere søvnproblemer enn gutter.',
    date: '26. juni 2026',
    category: 'Nyhet',
    href: 'https://www.fhi.no/nyheter/2026/norske-ungdommer-sover-for-lite/',
    status: 'verified',
  },
];

export const practicalTopics = [
  {
    title: 'Resepter',
    body: 'Bruk reseptfornyelse når du trenger mer av en medisin du allerede bruker fast. Nye medisiner og endringer krever vanligvis en legetime.',
  },
  {
    title: 'Prøvesvar',
    body: 'Legen vurderer prøvesvarene dine og avtaler hvordan du får beskjed. Ta kontakt dersom du ikke har fått svar innen tiden dere avtalte.',
  },
  {
    title: 'Henvisninger',
    body: 'Henvisning til spesialist bygger på en medisinsk vurdering. Bestill time dersom legen ikke allerede kjenner problemstillingen.',
  },
  {
    title: 'Sykmelding',
    body: 'Fra 1. juli 2026 skal gradert sykmelding som hovedregel brukes når det er medisinsk forsvarlig. Legen vurderer sykmeldingsgraden ut fra helsen din og muligheten for tilrettelegging.',
  },
  {
    title: 'Attester',
    body: 'Oppgi hva attesten skal brukes til når du bestiller. Da kan legekontoret si hvilke opplysninger og undersøkelser som kreves.',
  },
  {
    title: 'Behov for tolk',
    body: 'Trenger du tolk? Ring oss når du bestiller timen, så avtaler vi dette.',
  },
  {
    title: 'Legeerklæring',
    body: 'Ta kontakt den dagen fraværet starter, og oppgi hvilke datoer erklæringen gjelder. Vi avtaler når erklæringen kan hentes.',
  },
  {
    title: 'Varighet på legetimen',
    body: 'En vanlig legetime varer 15–20 minutter og gjelder som regel én problemstilling. Har du flere ting du ønsker å ta opp, kan du trenge en ny time. Fastlegen vurderer behovet for dobbeltime.',
  },
  {
    title: 'Personvern',
    body: 'Ikke send helseopplysninger på vanlig e-post. Bruk sikre tjenester på Helsenorge eller ring legekontoret.',
  },
];

export const criticalReviewItems = () => {
  const items: string[] = [];

  if (clinic.phone.status === 'needs-review') items.push('telefon');
  if (clinic.address.status === 'needs-review') items.push('adresse');
  if (clinic.openingHours.some((item) => item.status === 'needs-review')) {
    items.push('åpningstider');
  }
  if (clinic.patientActions.some((item) => item.status === 'needs-review')) {
    items.push('pasientlenker');
  }
  if (
    clinic.urgent.emergencyNumber.status === 'needs-review' ||
    clinic.urgent.outOfHoursNumber.status === 'needs-review'
  ) {
    items.push('akuttinformasjon');
  }

  return items;
};
