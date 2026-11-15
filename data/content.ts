export const profile = {
  name: "Varshinie A. R.",
  firstName: "Varshinie",
  roles: ["Brand Stylist", "Brand Strategist", "Fashion Stylist"],
  tagline:
    "M.Des candidate at NIFT Kangra combining fashion styling, visual storytelling and user-centred research to shape brand perception.",
  location: "Salem, Tamil Nadu, India",
  openTo: "Open to relocation",
  phone: "+91 9342510028",
  email: "varshinie.anitha@nift.ac.in",
  linkedin: "https://linkedin.com/in/varshinie-anitha-raja-7528b8390",
  linkedinLabel: "linkedin.com/in/varshinie-anitha-raja-7528b8390",
  behance: "https://behance.net/varshiniear2",
  behanceLabel: "behance.net/varshiniear2",
  photo: "/varshinie.jpg",
  summary:
    "M.Des candidate at NIFT Kangra combining fashion styling, visual storytelling and user-centred research to shape brand perception. Experienced in styling, garment development, fashion illustration and digital prototyping.",
  stats: [
    { value: "04", label: "Internships & roles" },
    { value: "05+", label: "Projects shipped" },
    { value: "'25", label: "Evanza Fashion Show — 2nd" },
  ],
  marquee: [
    "Brand Styling",
    "Editorial Styling",
    "Visual Storytelling",
    "Fashion Illustration",
    "Garment Development",
    "Figma Prototyping",
    "Design Research",
    "Content Creation",
  ],
};

export const experience = [
  {
    role: "Production Merchandising Intern",
    company: "Uni Fab Crafts, Bengaluru",
    period: "Jun 2026 – Jul 2026",
    points: [
      "Gained hands-on exposure to production merchandising during a two-month internship.",
    ],
  },
  {
    role: "Textile & Garment Intern",
    company: "Everyouth Apparel, Coimbatore",
    period: "Dec 2022 – Jan 2023",
    points: [
      "Assisted in garment construction and sampling across Coimbatore internships.",
      "Gained hands-on exposure to dyeing, weaving and knitting processes.",
      "Supported fabric handling and quality checks.",
    ],
  },
  {
    role: "Textile & Garment Intern",
    company: "Hanuman Knit Fashions, Coimbatore",
    period: "Dec 2023 – Jan 2024",
    points: [
      "Assisted in garment construction and sampling across Coimbatore internships.",
      "Gained hands-on exposure to dyeing, weaving and knitting processes.",
      "Supported fabric handling and quality checks.",
    ],
  },
];

export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  description: string;
  points: string[];
  image?: string;
  prototypeUrl?: string;
  featured: boolean;
  role?: string;
  tools?: string[];
  duration?: string;
  challenge?: string;
  approach?: string;
  outcomes?: string[];
  sections?: ProjectSection[];
  nextId?: string;
};

export const projects: Project[] = [
  {
    id: "quoin",
    title: "QUOIN",
    subtitle: "Temporary Space Rental Concept",
    tags: ["Concept", "Branding", "Figma prototype"],
    year: "2026",
    description:
      "A temporary-space rental concept for businesses and individuals, including branding and visual identity.",
    points: [
      "Developed a temporary-space rental concept for businesses and individuals, including branding and visual identity.",
      "Prototyped the space-owner and renter booking journeys in Figma.",
      "Explored brand touchpoints such as Space Passport, Space Match, a brochure and digital communication.",
      "Designed three 500 sq. ft. pop-up layouts: Classic Retail, Event & Workshop, and Creative Studio.",
    ],
    image: "/quoin-layouts.png",
    prototypeUrl:
      "https://www.figma.com/proto/mV53FFDkgwZ0MJFHRbT9sf/Untitled?node-id=35-1036&p=f&viewport=-83%2C442%2C0.09&t=jngx11qSAzpLiUeS-1&scaling=contain&content-scaling=fixed&page-id=0%3A1",
    featured: true,
    role: "Concept lead · Brand identity · UX prototyping",
    tools: ["Figma", "Canva", "Inkscape", "Visual research"],
    duration: "Semester concept project",
    challenge:
      "Empty commercial units sit idle between long leases, while creators and small brands need short, flexible spaces without the friction of traditional rental agreements.",
    approach:
      "Mapped space-owner and renter journeys, defined a dual-sided brand system, and prototyped booking flows plus physical and digital touchpoints that make temporary occupation feel trusted and premium.",
    outcomes: [
      "End-to-end Figma prototype covering owner and renter booking journeys.",
      "Brand touchpoint kit: Space Passport, Space Match, brochure, digital comms.",
      "Three ready-to-present 500 sq. ft. layout concepts for different use cases.",
    ],
    sections: [
      {
        heading: "Context",
        body: "Retail, events and creative studios often need space by the day or week. QUOIN reframes vacancy as a curated short-stay product for both landlords and renters.",
      },
      {
        heading: "Brand system",
        body: "Identity, tone and collateral were designed to feel architectural yet warm — a bridge between real-estate reliability and lifestyle-brand aspiration.",
      },
      {
        heading: "Experience design",
        body: "Booking journeys were structured around clarity: availability, trust signals (Space Passport), match quality (Space Match), and confirmation artefacts renters can keep.",
      },
    ],
    nextId: "styling",
  },
  {
    id: "styling",
    title: "Fashion Styling & Photoshoots",
    subtitle: "Editorial · Traditional · Streetwear",
    tags: ["Styling", "Photoshoots", "Reels"],
    year: "2024 – 2026",
    description:
      "Styled bridal, traditional, Indo-Western, streetwear and contemporary looks with editorial concepts.",
    points: [
      "Styled bridal, traditional and cultural, Indo-Western, streetwear and contemporary looks.",
      "Developed editorial styling and photoshoot concepts.",
      "Created fashion and styling reels for a public Instagram page; three reached thousands of views.",
    ],
    image: "/project-styling.png",
    featured: true,
    role: "Stylist · Creative direction · Content",
    tools: ["On-set styling", "Moodboards", "Reels editing", "Instagram content"],
    duration: "Ongoing practice",
    challenge:
      "Each brief needs a distinct visual language — bridal opulence, street edge, cultural authenticity — without losing a coherent personal signature across a public feed.",
    approach:
      "Built concept boards first (reference, silhouette, palette, location), then executed looks for stills and motion, and edited reels paced for fashion-forward social audiences.",
    outcomes: [
      "Portfolio spanning bridal, traditional, Indo-Western, streetwear and contemporary.",
      "Editorial photoshoot concepts with full styling narratives.",
      "Three reels that reached thousands of views on a public Instagram page.",
    ],
    sections: [
      {
        heading: "Styling across codes",
        body: "From bridal and cultural wear to Indo-Western and street, each look is researched for context, then styled for camera — silhouette, texture and accessory balance.",
      },
      {
        heading: "Editorial thinking",
        body: "Shoots start as stories: mood, location and movement choices are locked before wardrobe so images feel intentional, not catalog-like.",
      },
      {
        heading: "Motion for social",
        body: "Reels cut for rhythm and detail — fabric movement, styling transitions — designed to hold attention on a public fashion page.",
      },
    ],
    nextId: "graduation",
  },
  {
    id: "graduation",
    title: "Beyond the Product Photograph",
    subtitle: "Styling-Led Digital Presentation Framework",
    tags: ["M.Des", "Research", "Ongoing"],
    year: "2026 – 2027",
    description:
      "Graduation project exploring how styling-led digital content helps shoppers understand fit, drape and movement beyond standard product photographs.",
    points: [
      "Working title: Beyond the Product Photograph: communicating garment fit, drape and movement in online fashion retail.",
      "Research question: how can styling-led digital content help shoppers understand fit, drape and movement beyond standard product photographs?",
      "Host company and garment category to be finalised; seeking a four-month internship placement.",
    ],
    image: "/project-graduation.png",
    featured: true,
    role: "Researcher · Design lead (M.Des)",
    tools: ["User-centred research", "Design thinking", "Figma", "Visual research"],
    duration: "M.Des thesis · ongoing",
    challenge:
      "Online fashion still relies on static product photos. Shoppers struggle to judge fit, drape and movement — driving returns and distrust.",
    approach:
      "Frame styling as a communication tool: define how editorial and styled digital content can encode garment behaviour beyond flat photography, then prototype presentation patterns for retail contexts.",
    outcomes: [
      "Clear research question and working title for the graduation project.",
      "Framework direction linking styling practice to digital retail UX.",
      "Seeking a four-month internship with a host company and garment category.",
    ],
    sections: [
      {
        heading: "Working title",
        body: "Beyond the Product Photograph: Communicating Garment Fit, Drape and Movement in Online Fashion Retail.",
      },
      {
        heading: "Research question",
        body: "How can styling-led digital content help shoppers understand fit, drape and movement beyond standard product photographs?",
      },
      {
        heading: "Next steps",
        body: "Host company and garment category to be finalised. Open to internship partnerships that want stronger product storytelling online.",
      },
    ],
    nextId: "thanjavur",
  },
  {
    id: "thanjavur",
    title: "Thanjavur-Inspired Collection",
    subtitle: "Research · Illustration · Garment",
    tags: ["Research", "Illustration", "Collection"],
    year: "2025",
    description:
      "Translated Thanjavur cultural references into a fashion collection with illustrations and developed garments.",
    points: [
      "Researched Thanjavur cultural references and translated them into fashion concepts.",
      "Produced fashion illustrations and developed garments for the collection.",
      "Presented the final collection.",
    ],
    image: "/project-thanjavur.png",
    featured: false,
    role: "Researcher · Illustrator · Garment development",
    tools: ["Visual research", "Fashion illustration", "Garment development", "Presentation"],
    duration: "Academic collection project",
    challenge:
      "Carry rich Thanjavur cultural references into contemporary fashion without reducing them to costume or surface print.",
    approach:
      "Researched motifs, craft and silhouette language; abstracted them into fashion concepts; illustrated looks; then developed and presented garments.",
    outcomes: [
      "Research-backed concept direction rooted in Thanjavur references.",
      "Fashion illustration set for the collection.",
      "Developed garments and a final collection presentation.",
    ],
    sections: [
      {
        heading: "Cultural research",
        body: "Visual and material references from Thanjavur were gathered and edited into a focused design brief.",
      },
      {
        heading: "From reference to garment",
        body: "Illustrations translated research into silhouettes and details, then moved into garment development for the final showing.",
      },
    ],
    nextId: "quoin",
  },
];

export const skills = [
  {
    category: "Brand & Visual Communication",
    items: [
      "Brand storytelling",
      "Visual direction",
      "Fashion styling",
      "Campaign & editorial styling",
      "Content creation",
    ],
  },
  {
    category: "Fashion & Design",
    items: [
      "Fashion illustration",
      "Hand sketches",
      "Digital flats",
      "Garment development",
      "Photoshoot concepts",
    ],
  },
  {
    category: "Digital Tools",
    items: [
      "Figma (working prototype knowledge)",
      "Canva",
      "Inkscape",
      "TUKAcad",
      "TUKAdesign",
      "Video editing (intermediate)",
    ],
  },
  {
    category: "Research & Strategy",
    items: [
      "Design thinking",
      "User-centred research",
      "Visual research",
      "Concept development",
      "Creative problem-solving",
    ],
  },
];

export const achievements = [
  "Second Prize, Evanza Fashion Show, PSGR Krishnammal College, 2025.",
  "Participated in intercollegiate fashion shows as a designer and model.",
  "Earned ₹7,000 through independent fashion design work and show participation.",
];

export const education = [
  {
    degree: "Master of Design (M.Des)",
    school: "NIFT Kangra",
    period: "2025 – 2027",
  },
  {
    degree: "B.Sc. Costume Design & Fashion",
    school: "PSGR Krishnammal College, Coimbatore",
    period: "2022 – 2025",
  },
  {
    degree: "Diploma in Beauty Therapy",
    school: "PSGR Krishnammal College for Women, Coimbatore",
    period: "2022 – 2023",
  },
];
