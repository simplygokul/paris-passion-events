export type Experience = {
  number: string;
  slug: string;
  title: string;
  description: string;
  services: string[];
  image: string;
  imageAlt: string;
};

export const experiences: Experience[] = [
  {
    number: "01",
    slug: "corporate-government",
    title: "Corporate & Government Events",
    description: "We support corporate organisations, government departments and institutions in planning and managing professional events. Our team coordinates the venue, production, branding, guests, logistics and other requirements needed for smooth execution.",
    services: ["Corporate Events", "Government Programmes", "Opening Ceremonies", "Award Functions", "Official Meetings", "Institutional Events", "Guest Management", "Event Production", "Branding", "Logistics"],
    image: "/images/corporate-government-india.png",
    imageAlt: "Representative Indian corporate and government event",
  },
  {
    number: "02",
    slug: "conferences-mice",
    title: "Conferences & MICE",
    description: "Paris Passion provides complete support for meetings, conferences, conventions, seminars and exhibitions. We coordinate delegates, venue arrangements, production, hospitality, travel and on-site operations.",
    services: ["Meetings", "Conferences", "Conventions", "Seminars", "Workshops", "Exhibitions", "Delegate Management", "Stage & Production", "Travel Coordination", "Accommodation", "Hospitality", "Technical Support", "On-site Management"],
    image: "/images/mice-india.png",
    imageAlt: "Representative Indian conference registration and delegate support",
  },
  {
    number: "03",
    slug: "activations-roadshows",
    title: "Brand Activations & Roadshows",
    description: "We help brands reach people directly through on-ground activations, roadshows, product launches and promotional campaigns. Our team handles planning, branding, manpower, public engagement and local coordination.",
    services: ["BTL Campaigns", "Roadshows", "Product Launches", "Field Marketing", "Product Sampling", "Retail Activations", "Promotional Campaigns", "Consumer Engagement", "Public Outreach"],
    image: "/images/activation-india.png",
    imageAlt: "Representative Indian outdoor brand activation",
  },
  {
    number: "04",
    slug: "public-large-scale",
    title: "Public & Large-Scale Events",
    description: "Paris Passion has experience in managing public programmes, cultural events, large gatherings and special events. We coordinate production, audience movement, branding, vendors and on-ground operations.",
    services: ["Public Events", "Cultural Programmes", "Carnivals", "Large Gatherings", "Entertainment Events", "Special Events", "Production", "Audience Management", "Logistics", "On-ground Coordination"],
    image: "/images/public-event-india.png",
    imageAlt: "Representative large Indian public cultural programme",
  },
  {
    number: "05",
    slug: "institutional-educational",
    title: "Institutional & Educational Events",
    description: "We support educational institutions and organisations in conducting workshops, student programmes, campus activities and institutional events with proper planning and coordination.",
    services: ["Educational Events", "Campus Activations", "Workshops", "Competitions", "Student Engagement", "Institutional Programmes", "Awareness Programmes", "Event Coordination"],
    image: "/images/institutional-india.png",
    imageAlt: "Representative Indian college seminar and institutional workshop",
  },
];

export const coreCapabilities = [
  ["CREATE", "Event Concepts • Branding • Experience Planning"],
  ["CONNECT", "PR • Media • Brand Activations • Audience Engagement"],
  ["COORDINATE", "Vendors • Manpower • Administration • Stakeholders"],
  ["HOST", "Guests • Travel • Accommodation • Hospitality"],
  ["DELIVER", "Production • Logistics • On-ground Execution • Event Closure"],
] as const;

export const supportTerms = [
  "Event Planning", "Venue Coordination", "Stage & Production", "Branding", "PR & Media", "Guest Management", "Travel", "Accommodation", "Hospitality", "Logistics", "Vendor Coordination", "On-ground Execution",
];
