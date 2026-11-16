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

export type GalleryImage = {
  src: string;
  caption?: string;
  span?: "wide" | "tall";
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
  gallery?: GalleryImage[];
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
    gallery: [
      { src: "/projects/styling-cover.jpg", caption: "Styling portfolio cover" },
      { src: "/projects/styling-bridal.jpg", caption: "Bridal styling" },
      { src: "/projects/styling-tradition.jpg", caption: "Traditional & cultural wear" },
      { src: "/projects/styling-indowestern.jpg", caption: "Indo-Western looks" },
      { src: "/projects/styling-street.jpg", caption: "Streetwear story" },
      { src: "/projects/styling-power.jpg", caption: "Power dressing" },
      { src: "/projects/styling-mono.jpg", caption: "Monochrome statement" },
      { src: "/projects/styling-rachel.jpg", caption: "Rachel Green homage" },
      { src: "/projects/styling-rachel-golden.jpg", caption: "Golden-hour editorial" },
      { src: "/projects/styling-shoot.jpg", caption: "On-set photoshoot direction" },
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
    gallery: [
      { src: "/projects/research-ucd.jpg", caption: "User-centred research framing" },
      { src: "/projects/research-pie.jpg", caption: "Research synthesis" },
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
    gallery: [
      { src: "/projects/thanjavur-cover.jpg", caption: "Collection cover" },
      { src: "/projects/thanjavur-history.jpg", caption: "Cultural research" },
      { src: "/projects/thanjavur-queens.jpg", caption: "Motif & figure references" },
      { src: "/projects/thanjavur-sketches.jpg", caption: "Design sketches" },
      { src: "/projects/thanjavur-garment.jpg", caption: "Garment development" },
      { src: "/projects/thanjavur-show.jpg", caption: "Final showing" },
      { src: "/projects/thanjavur-final.jpg", caption: "Collection presentation" },
      { src: "/projects/thanjavur-repeat.jpg", caption: "Surface & repeat studies" },
    ],
    nextId: "kidswear",
  },
  {
    id: "kidswear",
    title: "Kidsfest Kidswear",
    subtitle: "Festive Kidswear Capsule",
    tags: ["Kidswear", "Illustration", "Collection"],
    year: "2024",
    description:
      "A festive kidswear capsule translating Krishna-themed and minimal festive references into playful, wearable children's looks.",
    points: [
      "Researched festive and cultural references for a children's wear capsule.",
      "Developed Krishna-inspired and minimal festive looks with illustration support.",
      "Presented the capsule as a cohesive kidswear collection.",
    ],
    image: "/projects/kidswear-krishna.jpg",
    featured: false,
    role: "Designer · Illustrator",
    tools: ["Visual research", "Fashion illustration", "Garment development"],
    duration: "Academic capsule project",
    challenge:
      "Design festive kidswear that feels joyful and culturally rooted while staying comfortable, practical and commercially wearable for children.",
    approach:
      "Edited festive references into a tight capsule — Krishna-themed hero looks, a minimal festive line and a cohesive palette — then illustrated and developed pieces for presentation.",
    outcomes: [
      "Kidswear capsule spanning festive, Krishna-inspired and minimal looks.",
      "Illustration set supporting the design narrative.",
      "Presented as a cohesive collection.",
    ],
    sections: [
      {
        heading: "Festive, not costume",
        body: "Cultural references were softened into wearable children's silhouettes — colour, motif and comfort balanced for real kids, not mannequins.",
      },
      {
        heading: "Capsule coherence",
        body: "A hero festive story, a minimal line and shared palette kept the capsule feeling like one collection across looks.",
      },
    ],
    gallery: [
      { src: "/projects/kidswear-krishna.jpg", caption: "Krishna-inspired hero looks" },
      { src: "/projects/kidswear-festive.jpg", caption: "Festive capsule" },
      { src: "/projects/kidswear-minimal.jpg", caption: "Minimal festive line" },
    ],
    nextId: "glow",
  },
  {
    id: "glow",
    title: "Glow in the Dark Sea",
    subtitle: "Concept Collection · Mood & Theme",
    tags: ["Concept", "Moodboard", "Illustration"],
    year: "2024",
    description:
      "A concept collection built around bioluminescent ocean references — mood, theme and material stories translated into fashion direction.",
    points: [
      "Built the concept from ocean bioluminescence references and material stories.",
      "Developed moodboard, theme and colour narratives for the collection.",
      "Carried the direction into illustration and garment concepts.",
    ],
    image: "/projects/glow-cover.jpg",
    featured: false,
    role: "Concept lead · Visual direction",
    tools: ["Moodboards", "Visual research", "Fashion illustration"],
    duration: "Concept collection project",
    challenge:
      "Turn an atmospheric natural phenomenon into a fashion concept with a clear point of view — not just 'blue and sparkly'.",
    approach:
      "Layered research into inspo, mood and theme boards, locking palette, texture and light behaviour before translating the direction into looks.",
    outcomes: [
      "Full concept board set: inspo, mood, theme and cover.",
      "Defined palette and texture language for the collection.",
      "Direction carried into garment concepts.",
    ],
    sections: [
      {
        heading: "Building the world",
        body: "Inspiration, mood and theme boards were edited in sequence so the collection had a narrative before it had garments.",
      },
      {
        heading: "Light as material",
        body: "Bioluminescence informed surface, sheen and layering choices — glow used as a design behaviour rather than a novelty print.",
      },
    ],
    gallery: [
      { src: "/projects/glow-cover.jpg", caption: "Concept cover" },
      { src: "/projects/glow-inspo.jpg", caption: "Inspiration board" },
      { src: "/projects/glow-mood.jpg", caption: "Mood board" },
      { src: "/projects/glow-theme.jpg", caption: "Theme & palette" },
    ],
    nextId: "editorial",
  },
  {
    id: "editorial",
    title: "Editorial & Illustration Studies",
    subtitle: "Spatial stories · Trends · Hand & digital work",
    tags: ["Editorial", "Illustration", "Research"],
    year: "2023 – 2025",
    description:
      "A body of editorial spread design, spatial storytelling and fashion illustration studies spanning hand sketching and digital work.",
    points: [
      "Designed editorial spreads covering spatial storytelling, trends and special stories.",
      "Produced fashion illustration studies in both hand and digital mediums.",
      "Documented ideation and behind-the-scenes process work.",
    ],
    image: "/projects/editorial-spatial.jpg",
    featured: false,
    role: "Editorial designer · Illustrator",
    tools: ["Layout & editorial design", "Hand sketching", "Digital illustration"],
    duration: "Ongoing studies",
    challenge:
      "Build a repeatable visual language across page design and illustration so spreads and sketches feel like one authored body of work.",
    approach:
      "Worked from ideation boards to finished spreads, pairing trend and spatial research with consistent illustration styling across mediums.",
    outcomes: [
      "Editorial spreads: architecture/spatial, trends and special stories.",
      "Illustration portfolio across hand and digital mediums.",
      "Documented ideation and process work.",
    ],
    sections: [
      {
        heading: "Editorial spreads",
        body: "Layouts treat the page as a scene — spatial stories, trend round-ups and special features each get their own pacing and image rhythm.",
      },
      {
        heading: "Illustration range",
        body: "Hand sketches and digital flats sit side by side, showing the same design thinking in two mediums.",
      },
    ],
    gallery: [
      { src: "/projects/editorial-spatial.jpg", caption: "Spatial storytelling spread" },
      { src: "/projects/editorial-architecture.jpg", caption: "Architecture editorial" },
      { src: "/projects/editorial-trends.jpg", caption: "Trend round-up" },
      { src: "/projects/editorial-special.jpg", caption: "Special story" },
      { src: "/projects/editorial-behind.jpg", caption: "Behind the scenes" },
      { src: "/projects/editorial-ideation.jpg", caption: "Ideation boards" },
      { src: "/projects/illust-hand.jpg", caption: "Hand illustration studies" },
      { src: "/projects/illust-digital.jpg", caption: "Digital illustration" },
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
