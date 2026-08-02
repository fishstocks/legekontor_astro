export interface PatientFormLink {
  title: string;
  description: string;
  href: string;
  icon?:
    | 'mood'
    | 'anxiety'
    | 'focus'
    | 'history'
    | 'profile'
    | 'droplet'
    | 'back'
    | 'function'
    | 'sleep'
    | 'wellbeing';
}

export interface PatientFormCategory {
  title: string;
  description: string;
  tone: 'sage' | 'sea' | 'sand';
  forms: PatientFormLink[];
}

export const patientFormCategories: PatientFormCategory[] = [
  {
    title: 'Psykisk helse',
    description:
      'Standardiserte vurderingsskjemaer som hjelper legen å forstå dine psykiske helseutfordringer og følge opp behandlingen.',
    tone: 'sage',
    forms: [
      {
        title: 'PHQ-9',
        description:
          'Kartlegger depresjonssymptomer og deres påvirkning på hverdagen din. Brukes for å vurdere alvorlighetsgrad og følge behandlingseffekt.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=141',
        icon: 'mood',
      },
      {
        title: 'GAD-7',
        description:
          'Vurderer angstsymptomer og deres innvirkning på dagliglivet. Hjelper legen å forstå hvordan angsten påvirker deg.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=140',
        icon: 'anxiety',
      },
      {
        title: 'ADHD Del A',
        description:
          'Første del av ADHD-kartlegging for voksne. Undersøker konsentrasjon, aktivitetsnivå og impulsivitet i hverdagen.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=164',
        icon: 'focus',
      },
      {
        title: 'ADHD Del B',
        description:
          'Andre del av ADHD-kartleggingen. Gir et mer detaljert bilde av hvordan ADHD-symptomer påvirker livet ditt.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=165',
        icon: 'focus',
      },
      {
        title: 'WURS-25',
        description:
          'Kartlegger ADHD-symptomer fra barndommen. Brukes for å vurdere en langvarig historie med ADHD-symptomer.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=167',
        icon: 'history',
      },
      {
        title: 'MADRS',
        description:
          'Grundig vurdering av depresjonssymptomer. Brukes for å følge behandlingseffekt og justere tiltak ved behov.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=170',
        icon: 'mood',
      },
      {
        title: 'IPDS',
        description:
          'Kartlegger personlighetsmønstre og hvordan de påvirker relasjoner og dagligliv.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=173',
        icon: 'profile',
      },
    ],
  },
  {
    title: 'Fysisk helse',
    description:
      'Vurderingsskjemaer som hjelper legen å forstå dine fysiske plager og hvordan de påvirker hverdagen din.',
    tone: 'sea',
    forms: [
      {
        title: 'IPSS',
        description:
          'Vurderer vannlatingsplager hos menn. Hjelper legen å forstå prostatasymptomer og deres påvirkning på livskvalitet.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=50',
        icon: 'droplet',
      },
      {
        title: 'Rygg funksjonsvurdering',
        description:
          'Kartlegger hvordan ryggplager påvirker daglige aktiviteter. Hjelper å måle behandlingseffekt og planlegge tiltak.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=154',
        icon: 'back',
      },
      {
        title: 'Norsk funksjonsskjema',
        description:
          'Omfattende vurdering av hvordan helseplager påvirker arbeidsevne og daglig funksjon.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=188',
        icon: 'function',
      },
    ],
  },
  {
    title: 'Livsstil og generell helse',
    description:
      'Kartleggingsverktøy for livsstilsfaktorer som kan påvirke helsen din.',
    tone: 'sand',
    forms: [
      {
        title: 'Epworth søvnighetsskala',
        description:
          'Vurderer grad av dagtretthet i ulike situasjoner. Hjelper å avdekke søvnproblemer som kan trenge behandling.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=156',
        icon: 'sleep',
      },
      {
        title: 'AUDIT',
        description:
          'Kartlegger alkoholvaner og deres påvirkning på helse og livskvalitet. Hjelper å identifisere behov for støtte eller endring.',
        href: 'https://fastlegen.com/spors/mediQuest.html?nr=171',
        icon: 'wellbeing',
      },
    ],
  },
];

export const eConsultationForms: PatientFormLink[] = [
  {
    title: 'Urinveisinfeksjon – kvinne',
    description: 'For kvinner med symptomer på urinveisinfeksjon.',
    href: 'https://fastlegen.com/spors/mediQuest.html?nr=139',
  },
  {
    title: 'Luftveissymptomer',
    description: 'Ved hoste, tetthet eller andre luftveisplager.',
    href: 'https://fastlegen.com/spors/mediQuest.html?nr=149',
  },
  {
    title: 'Depresjon – forløp',
    description: 'For oppfølging av depresjonsbehandling over tid.',
    href: 'https://fastlegen.com/spors/mediQuest.html?nr=151',
  },
  {
    title: 'Diaré eller oppkast',
    description: 'Ved mage- og tarmplager som diaré eller oppkast.',
    href: 'https://fastlegen.com/spors/mediQuest.html?nr=169',
  },
  {
    title: 'Kviser',
    description: 'For vurdering av kviser og hudproblemer.',
    href: 'https://fastlegen.com/spors/mediQuest.html?nr=174',
  },
  {
    title: 'Øyekatarr eller øyeinfeksjon',
    description: 'Ved røde, rennende eller irriterte øyne.',
    href: 'https://fastlegen.com/spors/mediQuest.html?nr=177',
  },
  {
    title: 'Vondt i halsen',
    description: 'Ved sår hals eller svelgplager.',
    href: 'https://fastlegen.com/spors/mediQuest.html?nr=52',
  },
  {
    title: 'Ryggsmerter',
    description: 'Ved akutte eller langvarige ryggsmerter.',
    href: 'https://fastlegen.com/spors/mediQuest.html?nr=48',
  },
];

export const resultTimes = [
  ['Blodprøver', 'Inntil tre uker'],
  ['Celleprøver', 'Inntil åtte uker'],
  ['Vevsprøver og biopsi', 'Inntil åtte uker'],
  ['Røntgen og MR', 'Inntil fire uker'],
] as const;

export const vaccineSteps = [
  {
    title: 'Sjekk behovet',
    description:
      'Se anbefalingene hos FHI eller Helsenorge, særlig dersom du skal reise.',
  },
  {
    title: 'Kontakt legekontoret',
    description:
      'Bestill time eller send en melding dersom du er usikker på hva du trenger.',
  },
  {
    title: 'Avtal tidspunkt',
    description:
      'Noen vaksiner må bestilles inn eller settes med riktig intervall.',
  },
];

export const vaccineTopics = [
  {
    title: 'Influensavaksine',
    subtitle: 'Sesongvaksine',
    description:
      'Anbefales særlig til personer i risikogrupper og andre som ønsker beskyttelse i influensasesongen.',
  },
  {
    title: 'Reisevaksiner',
    subtitle: 'Planlegg i god tid',
    description:
      'Behovet avhenger av reisemål, varighet, tidligere vaksiner og helsetilstand.',
  },
  {
    title: 'Vaksineoversikt',
    subtitle: 'Mine vaksiner',
    description:
      'Registrerte vaksiner finner du på Helsenorge. Ta kontakt dersom noe mangler.',
  },
  {
    title: 'Barne- og voksenvaksiner',
    subtitle: 'Etter avtale',
    description:
      'Kontakt legekontoret ved spørsmål om oppfriskningsdoser eller vaksiner utenfor barnevaksinasjonsprogrammet.',
  },
];

export const vaccineLinks = [
  {
    title: 'Influensavaksine',
    source: 'fhi.no',
    href: 'https://www.fhi.no/sv/influensa/sesonginfluensa/influensavaksine/',
  },
  {
    title: 'Mine vaksiner',
    source: 'helsenorge.no',
    href: 'https://www.helsenorge.no/vaksinasjon/mine-vaksiner/',
  },
  {
    title: 'Reisevaksiner og reiseråd',
    source: 'fhi.no',
    href: 'https://www.fhi.no/sm/smittevernrad-ved-reiser/reisevaksiner/',
  },
];
