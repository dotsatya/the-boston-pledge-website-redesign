/**
 * The Boston Pledge — Vision & Mission content
 * Centralized content for the Vision and Mission website page.
 * Keep presentation and styling in the page/component files.
 */

export type VisionMissionImage = {
  src: string;
  alt: string;
};

export type VisionMissionPillar = {
  title: string;
  description: string;
};

export type Doctrine = {
  id: number;
  content: string;
};

export const visionMissionData = {
  pageTitle: "Vision and Mission",

  vision: {
    title: "Vision",
    description:
      "The Boston Pledge’s vision is to continually bring together goodness in global citizens who will humbly serve to catalyze sustainable development of Global Equity. And be a fertile incubator of voluntary public service. The foundation of TBP constitutes Respect, Trust and Faith the members have in the cause and in each other, on which rest the three essential pillars defining our values – Discipline & Accountability, Inclusiveness, and Two way learning (with those we aspire to serve).",
    image: {
      src: "https://thebostonpledge.org/wp-content/uploads/2024/08/gal9.jpg",
      alt: "The Boston Pledge vision",
    } satisfies VisionMissionImage,
  },

  quote: {
    text:
      "Perfection of means & confusion of goals seem, in my opinion to characterize our age. If we desire sincerely and passionately the safety the welfare and free development of talents of men, we shall not be in want of the means to approach such a state. Even if small part of mankind strives for such goals, their superiority will prove itself in the long-run",
    author: "Albert Einstein",
  },

  mission: {
    title: "Mission",
    image: {
      src: "/images/misson-removebg.png",
      alt: "The Boston Pledge Mission - Action with Purpose and Compassion",
    } satisfies VisionMissionImage,
    objectives: [
      "Create and continually develop a process through which people in privileged regions can engage with the issues of socio-economic development in the undernourished areas of the world.",
      "Draw and deploy spiritual, intellectual, emotional, and financial capital for education, culture, sports, public-health, environment, and entrepreneurship",
      "Evolve a multi-disciplinary, multi-ethnic network, which will truly dedicate their inner selves to the service of humanity in celebration of unity in diversity.",
    ],
  },

  overarchingDoctrines: {
    title: "The Overarching Doctrines",
    introduction:
      "The development of The Boston Pledge is being guided by some overarching guidelines:",
    principles: [
      {
        id: 1,
        content:
          "Always place interests of the people we are trying to serve above all other considerations.",
      },
      {
        id: 2,
        content:
          "Work with a unified non-hierarchical approach, with egos out, with full commitment to preserve and enrich each others involvement.",
      },
      {
        id: 3,
        content:
          "Have faith in the natural reverence that TBP’s work will secure in driving the development of TBP; not be influenced by quick wins, or “easy paths” to popularity.",
      },
      {
        id: 4,
        content:
          "Focus on drawing everyone who will be interested in the experiments whether s/he is in Alabama or Bengal, Boston or Kolkata, Philippines or Peru,",
      },
      {
        id: 5,
        content:
          "Follow highest standards of professionalism in whatever we do, however little it may be.",
      },
      {
        id: 6,
        content:
          "Maintain objectivity and global perspective, not be biased by any specific and/or personal agenda.",
      },
      {
        id: 7,
        content:
          "Compliment & Enrich, not compete or undermine similar initiatives taken by other organizations.",
      },
      {
        id: 8,
        content:
          "Be responsible custodians of commitments made by individuals and/or organizations, be they be in the form of wisdom, wealth and/or work.",
      },
      {
        id: 9,
        content:
          "While TBP, as required will closely work with governments, it will not have any political affiliation.",
      },
      {
        id: 10,
        content: "Ensure 100% transparency in what we do.",
      },
    ] satisfies Doctrine[],
  },
} as const;

export default visionMissionData;
