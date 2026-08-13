export type Experience = {
  number: string;
  slug: string;
  title: string;
  statement: string;
  intro: string;
  detail: string;
  formats: string[];
  capabilities: string[];
  image: string;
};

export const experiences: Experience[] = [
  {
    number: "01",
    slug: "corporate-government",
    title: "Corporate & Government",
    statement: "Formal environments. Clear responsibility. Dependable delivery.",
    intro: "Paris Passion supports formal programmes, corporate engagements and institutional environments where preparation, protocol and disciplined execution matter.",
    detail: "We can coordinate the requirement from initial brief and venue planning through stakeholder communication, production, guest movement and on-ground closure. Every workstream is aligned around the programme objective, with appropriate attention to approvals, discretion, sequencing and operational readiness.",
    formats: ["Corporate programmes", "Leadership meetings", "Official gatherings", "Institutional events", "Employee engagements", "Formal ceremonies"],
    capabilities: ["Brief & programme planning", "Venue coordination", "Stakeholder management", "Protocol support", "Stage & technical production", "Branding & communication", "Guest coordination", "Security & access planning", "Hospitality", "On-ground execution"],
    image: "/images/corporate.webp",
  },
  {
    number: "02",
    slug: "conferences-mice",
    title: "Conferences & MICE",
    statement: "Every delegate journey, considered from invitation to departure.",
    intro: "Meetings, conferences, conventions, seminars, workshops and exhibitions require many connected systems to work without friction.",
    detail: "Paris Passion can bring together venue, delegate communication, technical production, accommodation, travel, hospitality, branding, media and show-day management. The result is one coordinated experience for organisers, speakers, exhibitors and delegates—supported by one accountable partner.",
    formats: ["Meetings", "Conferences", "Conventions", "Seminars", "Workshops", "Exhibitions", "Delegate programmes"],
    capabilities: ["Venue coordination", "Delegate management", "Stage & production", "Branding", "Travel coordination", "Accommodation", "Hospitality", "Technical production", "Media coordination", "Logistics", "On-site management"],
    image: "/images/mice.webp",
  },
  {
    number: "03",
    slug: "activations-roadshows",
    title: "Brand Activations & Roadshows",
    statement: "Ideas made tangible, visible and operational in the field.",
    intro: "Paris Passion supports brands that need to move beyond communication and create meaningful participation across markets, venues and public environments.",
    detail: "From an activation concept and branded environment to permissions, fabrication, staffing, route coordination, audience engagement and daily reporting, we can coordinate the complete field ecosystem. Roadshows and campaigns are planned for consistency while adapting responsibly to each location.",
    formats: ["Brand activations", "Product launches", "Roadshows", "Field marketing", "Sampling programmes", "Consumer engagement", "Public outreach"],
    capabilities: ["Concept development", "Activation planning", "Branding & fabrication", "Venue & permissions", "Promoters & manpower", "Route logistics", "PR & media support", "Audience engagement", "Production", "Field execution"],
    image: "/images/activation.webp",
  },
  {
    number: "04",
    slug: "public-large-scale",
    title: "Public & Large-Scale Experiences",
    statement: "Scale without losing control of the details that matter.",
    intro: "Public programmes and large gatherings demand a broad operational view: audience flow, production, stakeholders, permissions, vendors, safety, hospitality and timing must all work together.",
    detail: "Paris Passion can support cultural programmes, entertainment formats and special experiences with structured planning and coordinated execution. We organise moving parts across suppliers, production teams, guest areas, public interfaces and backstage operations so the experience remains coherent at scale.",
    formats: ["Public programmes", "Cultural events", "Large gatherings", "Entertainment programmes", "Special experiences", "Community engagement"],
    capabilities: ["Programme planning", "Venue zoning", "Production coordination", "Vendor management", "Audience movement", "Manpower planning", "Branding & signage", "Hospitality", "Backstage operations", "Logistics & closure"],
    image: "/images/public.webp",
  },
  {
    number: "05",
    slug: "institutional-educational",
    title: "Institutional & Educational",
    statement: "Purposeful programmes, professionally coordinated.",
    intro: "Educational and institutional programmes need clear objectives, sensitive coordination and an experience designed around participants—not spectacle for its own sake.",
    detail: "Paris Passion can plan and deliver campus activations, workshops, competitions and engagement programmes while coordinating institutions, faculty, participants, venues, production and support teams. We focus on clarity, participation, safety and dependable administration.",
    formats: ["Educational events", "Campus activations", "Workshops", "Competitions", "Student engagement", "Institutional programmes"],
    capabilities: ["Programme design", "Institution coordination", "Registration", "Participant communication", "Venue setup", "Technical support", "Branding", "Hospitality", "Manpower", "On-ground administration"],
    image: "/images/institutional.webp",
  },
];

export const coreCapabilities = [
  ["Events & Production", "Complete event planning, stage, technical production, vendor coordination and responsible on-ground delivery."],
  ["Conferences & MICE", "Venue, delegates, speakers, travel, accommodation, hospitality, exhibitions and show-day management."],
  ["Brand Activations & Roadshows", "Concept-led launches, field programmes, public outreach and multi-location brand engagement."],
  ["Branding & Creative", "Event identity, communication, branded environments, production artwork, fabrication and audience touchpoints."],
  ["PR & Media", "Communication support, media coordination, content requirements and visibility around the experience."],
  ["Project Coordination", "One accountable coordination layer across stakeholders, schedules, suppliers, administration and closure."],
  ["Travel & Hospitality", "Guest movement, accommodation, transport, arrival experience, helpdesks and considered hospitality."],
] as const;
