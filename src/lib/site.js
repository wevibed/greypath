export const BUSINESS = {
  name: 'GreyPath Glass & Aluminium Works',
  shortName: 'GreyPath',
  tagline: 'Glass & Aluminium Works',
  region: 'Zimbabwe',
};

export const PHONES = [
  { display: '071 365 6979', tel: '+263713656979', whatsapp: '263713656979' },
  { display: '077 230 7770', tel: '+263772307770', whatsapp: '263772307770' },
  { display: '078 908 5887', tel: '+263789085887', whatsapp: '263789085887' },
];

export const PRIMARY_WHATSAPP = PHONES[0].whatsapp;

export const NAV = [
  { label: 'Home', path: '/', index: '01' },
  { label: 'Services', path: '/services', index: '02' },
  { label: 'Residential', path: '/residential', index: '03' },
  { label: 'Commercial', path: '/commercial', index: '04' },
  { label: 'Projects', path: '/projects', index: '05' },
  { label: 'About', path: '/about', index: '06' },
  { label: 'Contact', path: '/contact', index: '07' },
];

export const SERVICE_GROUP_ORDER = [
  'Aluminium Doors & Windows',
  'Architectural Glass Installations',
  'Bathroom & Interior Glass',
  'Commercial Glazing & Shop Fronts',
  'Specialist Applications',
  'Maintenance & Repairs',
];

export const SERVICES = [
  {
    slug: 'aluminium-windows',
    name: 'Aluminium Windows',
    group: 'Aluminium Doors & Windows',
    image: 'svcWindows',
    blurb:
      'Aluminium window systems for homes and commercial buildings, sized to the opening and finished in a profile to suit the facade.',
  },
  {
    slug: 'aluminium-doors',
    name: 'Aluminium Doors',
    group: 'Aluminium Doors & Windows',
    image: 'svcDoors',
    blurb:
      'Entrance, patio and internal aluminium doors with glass panels, for residential and commercial access points.',
  },
  {
    slug: 'sliding-folding-doors',
    name: 'Sliding & Folding Doors',
    group: 'Aluminium Doors & Windows',
    image: 'svcSliding',
    blurb:
      'Wide sliding and folding door systems that open living and working spaces onto terraces, gardens and courtyards.',
  },
  {
    slug: 'glass-balustrades',
    name: 'Glass Balustrades',
    group: 'Architectural Glass Installations',
    image: 'svcBalustrades',
    blurb:
      'Balustrade solutions for staircases, balconies and terraces, with framed and frameless glass options.',
  },
  {
    slug: 'glass-partitioning',
    name: 'Glass Partitioning',
    group: 'Architectural Glass Installations',
    image: 'svcPartitions',
    blurb:
      'Internal glass partitions for offices and commercial interiors, dividing space while keeping daylight and sightlines.',
  },
  {
    slug: 'reglazing',
    name: 'Reglazing',
    group: 'Architectural Glass Installations',
    image: 'svcReglazing',
    blurb:
      'Replacement of damaged or outdated glazing, subject to the condition and type of the existing frame.',
  },
  {
    slug: 'frameless-showers',
    name: 'Frameless Showers',
    group: 'Bathroom & Interior Glass',
    image: 'svcShowers',
    blurb:
      'Frameless glass shower enclosures and screens in toughened glass, designed around the bathroom layout.',
  },
  {
    slug: 'mirrors-splashbacks',
    name: 'Mirrors & Splashbacks',
    group: 'Bathroom & Interior Glass',
    image: 'svcMirrors',
    blurb:
      'Mirrors and glass splashbacks for bathrooms, kitchens, salons and commercial interiors.',
  },
  {
    slug: 'glass-shop-fronts',
    name: 'Glass Shop Fronts',
    group: 'Commercial Glazing & Shop Fronts',
    image: 'svcShopfronts',
    blurb:
      'Shop fronts and commercial glazing for retail spaces and business premises, framed or frameless.',
  },
  {
    slug: 'automatic-doors',
    name: 'Automatic Doors',
    group: 'Commercial Glazing & Shop Fronts',
    image: 'svcAutomatic',
    blurb:
      'Automatic door solutions for suitable commercial entrances, subject to the building and the traffic it handles.',
  },
  {
    slug: 'vinyl-applications',
    name: 'Vinyl Applications',
    group: 'Specialist Applications',
    image: 'svcVinyl',
    blurb:
      'Vinyl applied to glass and other suitable surfaces for privacy, signage and decorative effect.',
  },
  {
    slug: 'uv-bonding',
    name: 'UV Bonding',
    group: 'Specialist Applications',
    image: 'svcUvbonding',
    blurb:
      'Specialist UV-curing bonding of glass, for joins and fixings that require a near-invisible connection.',
  },
  {
    slug: 'maintenance-repairs',
    name: 'Maintenance & Repairs',
    group: 'Maintenance & Repairs',
    image: 'svcMaintenance',
    blurb:
      'Maintenance and repair enquiries for glass and aluminium — hardware, seals, alignment and replacement panes.',
  },
];

export const SERVICE_NAMES = SERVICES.map((s) => s.name);

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Describe your project',
    body: 'Tell GreyPath what glass or aluminium solution you need and where it is going.',
  },
  {
    step: '02',
    title: 'Discuss the requirements',
    body: 'Share dimensions, photographs or other project details where you have them available.',
  },
  {
    step: '03',
    title: 'Request a quotation',
    body: 'Contact the business to discuss pricing, materials and the scope of the work.',
  },
  {
    step: '04',
    title: 'Arrange the next steps',
    body: 'Confirm project details, installation arrangements and timing directly with the business.',
  },
];

export const WHY_CHOOSE = [
  {
    title: 'A broad range of applications',
    body: 'Aluminium windows and doors, balustrades, shower enclosures, shop fronts, partitions and specialist glass work — enquired about through one business.',
  },
  {
    title: 'Residential and commercial',
    body: 'Options for homeowners, renovators, landlords, retailers, offices, contractors and developers.',
  },
  {
    title: 'Contemporary design possibilities',
    body: 'Slim aluminium profiles and clear glazing that suit modern architectural design and open up natural light.',
  },
  {
    title: 'Glass, aluminium and specialist work together',
    body: 'One point of contact for the glazing, the framing and the specialist applications around them.',
  },
  {
    title: 'Direct communication',
    body: 'Discuss requirements, materials and quotations directly by WhatsApp or telephone.',
  },
];

export const GALLERY = [
  {
    id: 'aluminium',
    title: 'Aluminium Windows & Doors',
    image: 'galleryWindows',
    note: 'Aluminium framing · glazed panels',
    caption: 'Slim-framed window and door systems for residential and commercial facades.',
  },
  {
    id: 'balustrades',
    title: 'Glass Balustrades',
    image: 'galleryBalustrades',
    note: 'Toughened glass · metal base fixing',
    caption: 'Glass balustrades for staircases, balconies and roof terraces.',
  },
  {
    id: 'showers',
    title: 'Frameless Showers',
    image: 'galleryShowers',
    note: 'Frameless glass · minimal fixings',
    caption: 'Frameless shower enclosures and screens for modern bathrooms.',
  },
  {
    id: 'shopfronts',
    title: 'Shop Fronts',
    image: 'galleryShopfronts',
    note: 'Commercial glazing · shop front',
    caption: 'Retail and business frontage glazing, framed or frameless.',
  },
  {
    id: 'partitions',
    title: 'Glass Partitions',
    image: 'galleryPartitions',
    note: 'Internal glazing · aluminium framing',
    caption: 'Office and commercial partitioning that keeps the space light.',
  },
  {
    id: 'mirrors',
    title: 'Mirrors & Splashbacks',
    image: 'galleryMirrors',
    note: 'Mirror glass · wall fixing',
    caption: 'Mirrors and glass splashbacks for interiors and commercial spaces.',
  },
  {
    id: 'sliding',
    title: 'Sliding & Folding Doors',
    image: 'gallerySliding',
    note: 'Sliding system · aluminium track',
    caption: 'Wide sliding and folding door systems opening onto outdoor space.',
  },
];

export const RESIDENTIAL_FEATURES = [
  {
    title: 'Aluminium Windows & Doors',
    body: 'Slim aluminium frames with clear glazing to bring more daylight into living areas and give the frontage a contemporary finish.',
  },
  {
    title: 'Frameless Shower Enclosures',
    body: 'Toughened glass shower screens that make a bathroom feel larger and easier to keep clean.',
  },
  {
    title: 'Glass Balustrades',
    body: 'Balcony, terrace and staircase balustrades that protect without cutting out light or a view.',
  },
  {
    title: 'Sliding & Folding Doors',
    body: 'Wide openings that connect a lounge, kitchen or entertainment area to a garden or patio.',
  },
  {
    title: 'Mirrors & Splashbacks',
    body: 'Bathroom mirrors and kitchen glass splashbacks, made to the wall or counter dimension.',
  },
  {
    title: 'Decorative Glass Applications',
    body: 'Vinyl application and other glass treatments for privacy and finish on doors, screens and windows.',
  },
];

export const COMMERCIAL_FEATURES = [
  {
    title: 'Glass Shop Fronts',
    body: 'Frontage glazing that makes a premises visible from the street and lets daylight into the trading floor.',
  },
  {
    title: 'Office Glass Partitioning',
    body: 'Glazed offices and meeting rooms that keep an interior open, quieter and better lit.',
  },
  {
    title: 'Automatic Doors',
    body: 'Automatic entrance solutions for suitable commercial buildings and customer traffic.',
  },
  {
    title: 'Commercial Aluminium Windows & Doors',
    body: 'Aluminium framing and doors for offices, workshops, retail and other business premises.',
  },
  {
    title: 'Glass Balustrades',
    body: 'Balustrades for commercial staircases, mezzanines and balcony edges.',
  },
  {
    title: 'Reglazing, Maintenance & Repairs',
    body: 'Replacement glazing and ongoing maintenance enquiries for existing commercial installations.',
  },
];

export const WHATSAPP_NOTE = 'WhatsApp availability may vary per line.';

export function whatsappLink(message, number = PRIMARY_WHATSAPP) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function serviceEnquiry(serviceName) {
  return `Hello GreyPath Glass & Aluminium Works, I would like a quotation for ${serviceName}. Please let me know what information you need from me.`;
}

export const GENERAL_ENQUIRY =
  'Hello GreyPath Glass & Aluminium Works, I would like a quotation for a glass or aluminium project.';