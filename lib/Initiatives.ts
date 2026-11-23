export type PillarIconName =
  | "globe"
  | "grad-cap"
  | "book-open"
  | "rocket"
  | "community";

export interface PillarLink {
  label: string;
  url: string;
}

export interface PillarContact {
  name: string;
  email?: string;
  url?: string;
}

export interface GalleryItem {
  src: string;
  caption?: string;
}

export interface PillarDetails {
  overview: string;
  goal?: string;
  highlights?: string[];
  internship?: {
    title: string;
    description: string;
    applyUrl: string;
  };
  mentors?: string[];
  volunteers?: string[];
  mentor?: string;
  programLead?: string;
  contact?: PillarContact;
  contacts?: PillarContact[];
  resources?: PillarLink[];
  fieldReport?: {
    author: string;
    role: string;
    highlights: {
      location: string;
      summary: string;
    }[];
  };
  targetAudience?: string;
  participantFormat?: string[];
  speakers?: string[];
  scheduleImages?: string[];
  videoEmbedUrl?: string;
  upcomingEvents?: {
    title: string;
    url: string;
  }[];
  coreBeliefs?: string[];
  process?: {
    step: string;
    description: string;
  }[];
  caseStudy?: {
    title: string;
    summary: string;
  };
  waysToContribute?: {
    title: string;
    description: string;
  }[];
  gallery?: GalleryItem[];
}

export interface Pillar {
  id: string;
  number: string;
  badge: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  icon: PillarIconName;
  bullets: string[];
  details: PillarDetails;
}

export const pillars: Pillar[] = [
  {
    id: "digital",
    number: "01",
    badge: "Digital Platform & Internships",
    title: "The Boston Pledge Digital",
    tagline: "Leveraging Connectivity to Spark Global Opportunity",
    desc: "TBP Digital harnesses smartphones, internet access, and online communities to connect underprivileged youth with mentorship, workshops, competitions, and developmental resources.",
    image:
      "https://thebostonpledge.org/wp-content/uploads/2020/08/digital-photo-3-750x330-1.jpg",
    icon: "globe",
    bullets: [
      "Online community for youth to exchange ideas, access mentorship, and build solutions",
      "Virtual workshops and competitions in leadership, entrepreneurship, academics, and arts",
      "Software development & project management internships for high school and college students",
    ],
    details: {
      overview:
        "Given vast global challenges and limited resources, TBP introduced the Digital Initiative to create opportunity through entrepreneurship, innovation, and mentorship—leveraging smartphones and internet availability to channel developmental resources where they matter most.",
      goal: "Connect with the underprivileged by developing a strong digital presence through the TBP Digital website, app, social media platforms, and other online channels.",
      highlights: [
        "Build an online community where young people express themselves, get mentorship, and create self-sufficient solutions.",
        "Conduct online workshops and competitions across leadership, entrepreneurship, academic, literary, and artistic skills.",
        "Use platform reach and collected insights to direct developmental resources and priorities effectively.",
      ],
      internship: {
        title: "Internship Opportunity for TBP Digital",
        description:
          "High school and college students interested in software development work alongside industry experts to build and enhance the full-featured TBP Digital platform while gaining software engineering and project management skills. Programming familiarity is helpful but not required.",
        applyUrl: "https://thebostonpledge.org/ways-to-volunteer",
      },
      mentors: ["Raj Pratha", "Hari Narayanan", "Jaya Jalwapuram"],
      volunteers: [
        "Ishani Sengupta (Program Lead)",
        "Shreeja Harishrikanth",
        "Gayathri Pratha",
        "Vaishnavi Pratha",
        "Komla Jalwapuram",
      ],
      contact: {
        name: "Ishani Sengupta",
        url: "https://thebostonpledge.org/ways-to-volunteer",
      },
      resources: [
        {
          label: "View our 2018 Annual Conference Recording",
          url: "https://drive.google.com/open?id=1nAD4EMSobUENEwEgoLzWbfMTalvigpq3",
        },
        {
          label: "View the 2018 Annual Conference Presentation",
          url: "https://drive.google.com/open?id=1_HnB1DUbOoqcL3BFX7hwOolS3KNmNjdx",
        },
      ],
      gallery: [
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2024/08/DSC_0235_1-440x550-1.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2024/08/DSC_0311_2-440x550-1.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2024/08/DSC_0240_2-440x550-1.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2024/08/DSC_0313_3-440x550-1.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2024/08/SUNR5274-min-1-2-1024x657.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2024/08/SUNR5275-min-1024x839.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5278-min-1024x846.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5311-min-1024x961.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2024/08/SUNR5380-min-400x300-1.jpg",
          caption: "Boston Pledge Consultation",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5378-min-1024x683.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5395-min-1024x683.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5374-min-1024x604.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5387-min-1024x621.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5385-min-1024x683.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5377-min-1024x580.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5368-min-1024x631.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5363-min-1024x835.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5344-min-1024x817.jpg",
        },
      ],
    },
  },
  {
    id: "youth",
    number: "02",
    badge: "Youth Entrepreneurship",
    title: "TBP Youth",
    tagline: "Nurturing Self-Sufficient Young Entrepreneurs Worldwide",
    desc: "TBP Youth partners with colleges and chambers of commerce to equip underprivileged students with hands-on entrepreneurship training, international crafts skills, and practical business exposure.",
    image:
      "https://thebostonpledge.org/wp-content/uploads/2020/08/tbp-youth-1-750x330-1.jpg",
    icon: "grad-cap",
    bullets: [
      "Grassroots entrepreneurship workshops in rural Bengal (Dasghara) and Kolkata (MCCI)",
      "Women's empowerment sessions turning local ideas into viable micro-ventures",
      "International arts and crafts manufacturing & sales training led by Chairman Mr. Partha Ghosh",
    ],
    details: {
      overview:
        "One of TBP's core missions is developing underprivileged youth around the world toward self-sufficiency. In Summer 2019, TBP Youth Leader Ishani Sengupta led entrepreneurship workshops at Prithwish Chandra Biswas Kanya Mahavidyalaya (PCBKMV) in rural Bengal and at MCCI in Kolkata, followed by Chairman Mr. Partha Ghosh's international arts and crafts training and certificate distribution (prepared by volunteers Jaya and Komla Jalwapuram).",
      fieldReport: {
        author: "Ishani Sengupta",
        role: "Program Lead",
        highlights: [
          {
            location:
              "Prithwish Chandra Biswas Kanya Mahavidyalaya (Dasghara, West Bengal)",
            summary:
              "First TBP Youth workshop dedicated to women's empowerment. Conducted primarily in Bengali with Principal Ms. Sudarshana and staff, students rapidly developed practical business concepts ranging from a dance academy to designing and marketing paper ornaments.",
          },
          {
            location: "MCCI (Kolkata)",
            summary:
              "Hosted in collaboration with TBP colleagues Ms. Mukherjee and Mr. Sanyal, engaging budding entrepreneurs and senior MCCI representatives in a formal conference setting.",
          },
        ],
      },
      mentor: "Mr. Partha Ghosh",
      programLead: "Ishani Sengupta",
      gallery: [
        { src: "https://thebostonpledge.org/wp-content/uploads/2020/08/1-7.jpg" },
        { src: "https://thebostonpledge.org/wp-content/uploads/2020/08/2-3.jpg" },
        { src: "https://thebostonpledge.org/wp-content/uploads/2020/08/3-3.jpg" },
        { src: "https://thebostonpledge.org/wp-content/uploads/2020/08/4-3.jpg" },
        { src: "https://thebostonpledge.org/wp-content/uploads/2020/08/1-8.jpg" },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/1-9-1.jpg",
        },
        { src: "https://thebostonpledge.org/wp-content/uploads/2020/08/4-4.jpg" },
        { src: "https://thebostonpledge.org/wp-content/uploads/2020/08/2-6.jpg" },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/1-10.jpg",
        },
        { src: "https://thebostonpledge.org/wp-content/uploads/2020/08/3-4.jpg" },
        { src: "https://thebostonpledge.org/wp-content/uploads/2020/08/2-5.jpg" },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/SUNR5383-min-1024x683.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/67087248-min.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/67183166-min.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/67482860-min.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/67620014-min.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2020/08/DSC_0068-min-1024x683.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2024/08/initiatives-1024x440.jpg",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2024/08/mission_vision-1024x440.jpg",
        },
      ],
    },
  },
  {
    id: "edsp",
    number: "03",
    badge: "Global Educator Network",
    title: "Educator's Springboard Program (EdSP)",
    tagline: "Connecting Educators Across 3 Continents & 5 Countries",
    desc: "EdSP is a series of free 90-minute online sessions uniting school educators from towns, cities, and villages with premier institutions to shape primary, secondary, and high school education.",
    image:
      "https://thebostonpledge.org/wp-content/uploads/2020/08/EdSP-Photo-1-750x330-1.jpg",
    icon: "book-open",
    bullets: [
      "Free 90-minute interactive sessions for educators teaching middle school and above",
      "Three 5–7 minute educator speaking slots per session (reserved in advance, first-come basis)",
      "Cross-disciplinary speakers: academicians, scientists, psychologists, writers, and entrepreneurs",
    ],
    details: {
      overview:
        "Educator's Springboard Program (EdSP) brings together educators across 3 continents and 5 countries to share wisdom, values, skills, and motivation—empowering teachers as the 'Architects of Our Society' to nurture confident problem solvers with a global conscience.",
      targetAudience: "Educators (teaching middle school and above)",
      participantFormat: [
        "Listen and exchange ideas with global peers",
        "Ask live questions to guest speakers",
        "Speak for 5–7 minutes (3 educator slots per session, requested in advance on a first-come, first-served basis)",
      ],
      speakers: [
        "Academicians",
        "Writers",
        "Technocrats",
        "Scientists",
        "Psychologists",
        "Researchers",
        "Explorers",
        "Administrators",
        "Sports Personalities",
        "Entrepreneurs",
        "Social Workers & Achievers",
      ],
      scheduleImages: [
        "https://thebostonpledge.org/wp-content/uploads/2020/08/wef.png",
        "https://thebostonpledge.org/wp-content/uploads/2020/08/wef-1.png",
      ],
      videoEmbedUrl: "https://www.youtube.com/embed/D2umJUoup90?feature=oembed",
      upcomingEvents: [
        {
          title: "Aug 22 EdSP Session",
          url: "https://thebostonpledge.org/event/tbp-20th-anniversary-10-10-10/",
        },
      ],
    },
  },
  {
    id: "esp",
    number: "04",
    badge: "Grassroots Venture Incubation",
    title: "Entrepreneurship Springboard Platform (ESP)",
    tagline: "Locating, Educating & Cultivating Grassroots Entrepreneurs",
    desc: "Piloted in West Bengal, ESP counters unemployment through mass entrepreneurship—combining 'MBA-in-a-box' business clinics with an MIT 50K-inspired business plan competition.",
    image: "https://thebostonpledge.org/wp-content/uploads/2024/08/ESP-1.jpg",
    icon: "rocket",
    bullets: [
      "Three-step model: Locate target regions, Educate via 1-day clinics, Cultivate via ESP 50K",
      "Simplified 'MBA-in-a-box' workshops delivered across districts with US & local mentors",
      "Ten category awards, financier access, media visibility, and ongoing alumni tracking",
    ],
    details: {
      overview:
        "TBP's flagship Rural Economic Development (RED) initiative, ESP was successfully piloted in West Bengal in 2005–06 to demonstrate that business acumen is a latent capability across all communities, aiming to launch ~20 firms and thousands of jobs per program cycle.",
      coreBeliefs: [
        "The challenge of limited resources can be the basis for an economic revolution.",
        "The multiplier effect at the base of the pyramid is significantly higher.",
        "Entrepreneurship equals creative problem solving.",
      ],
      process: [
        {
          step: "Locate",
          description:
            "Select a specific state or city to run ESP annually from its inaugural year.",
        },
        {
          step: "Educate",
          description:
            "Partner with regional organizations and US volunteers to run 1-day district business clinics teaching simplified 'MBA-in-a-box' startup fundamentals.",
        },
        {
          step: "Cultivate",
          description:
            "Participants enter the written ESP 50K business plan contest (modeled on MIT's 50K), graded by an international consortium. Roughly 50% submit plans; 10 category winners receive mentorship, financier access, media exposure, and ongoing alumni support.",
        },
      ],
      contacts: [
        { name: "Inder Monga", email: "imonga@gmail.com" },
        { name: "Chitro Neogy", email: "chitro@mit.edu" },
      ],
    },
  },
  {
    id: "rural-innovation",
    number: "05",
    badge: "Sustainable Village Labs",
    title: "Rural Innovation Center Enterprising",
    tagline: "Experimental Workshops & Microfinance-Driven Village Transformation",
    desc: "Rural Innovation Centers provide experimental workshops where rural villagers test, develop, and launch eco-friendly, energy-efficient solutions backed by microfinance and mentoring.",
    image:
      "https://thebostonpledge.org/wp-content/uploads/2024/08/gal14-440x348-1.jpg",
    icon: "community",
    bullets: [
      "Experimental village workshops generating eco-friendly, energy-efficient solutions",
      "Proven microfinance-led transformation in Lakhikantapur without foreign aid",
      "Open global volunteer & expertise integration across engineering, business, and outreach",
    ],
    details: {
      overview:
        "Rural Innovation Centers give impoverished villagers access to experimental workshops supported by financing, volunteering, business mentoring, local consumer advocacy, and soft technologies to build sustainable local economies.",
      caseStudy: {
        title: "Village Transformation in Lakhikantapur",
        summary:
          "Initiated by Kapil Mandal to transform the base of the socio-economic pyramid without foreign aid, villagers in Lakhikantapur developed marketable skills and built a self-sustaining ecosystem powered by microfinance loans—a model TBP is scaling with Professor Partha Ghosh.",
      },
      waysToContribute: [
        {
          title: "Expertise Integration",
          description:
            "Contribute skills across engineering, software/networks, chemical engineering, geologic sampling, business relations, marketing, or outreach—from a few hours a month to full-time commitments.",
        },
        {
          title: "Diaspora & Local Collaboration",
          description:
            "Unite non-resident professionals, native entrepreneurs, engineers, doctors, legal counsel, and public workers to revitalize regional prosperity.",
        },
        {
          title: "Funding & Advocacy",
          description:
            "Support initiative launches through direct funding, membership, or word-of-mouth advocacy.",
        },
      ],
      gallery: [
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2024/08/gal14-440x348-1.jpg",
          caption: "Renewable Energy Centre",
        },
        {
          src: "https://thebostonpledge.org/wp-content/uploads/2024/08/gal2-440x376-1.png",
          caption: "Women of Self-Help Group visiting VSSU",
        },
      ],
    },
  },
];

export const getPillarById = (id: string): Pillar | undefined =>
  pillars.find((pillar) => pillar.id === id);