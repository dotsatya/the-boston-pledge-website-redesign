export interface Quote {
  text: string;
  author: string;
}

export interface CoreValue {
  id: string;
  label: string;
}

export interface Guideline {
  id: number;
  title: string;
  description: string;
}

export interface ConstitutionData {
  pageTitle: string;
  organization: {
    name: string;
    acronym: string;
  };
  heroImage: {
    src: string;
    alt: string;
  };
  constitution: {
    heading: string;
    intro: string;
    coreValues: CoreValue[];
  };
  quote: Quote;
  guidelines: {
    heading: string;
    intro: string;
    items: Guideline[];
  };
}

export const constitutionData: ConstitutionData = {
  pageTitle: "Constitution",
  organization: {
    name: "The Boston Pledge",
    acronym: "TBP",
  },
  heroImage: {
    src: "/images/constitution.jpg",
    alt: "The Boston Pledge Constitution",
  },
  constitution: {
    heading: "Our Constitution",
    intro:
      "As a non-profit organization served by volunteers, we adhere to certain guidelines with uncompromising dedication:",
    coreValues: [
      {
        id: "honesty-integrity",
        label: "Honesty and Integrity of discipline of harmony (timing)",
      },
      {
        id: "cheer-leading",
        label: "Power of cheer leading",
      },
      {
        id: "positive-energy",
        label: "Energy of positive adjectives and adverbs",
      },
      {
        id: "power-of-silence",
        label: "Power of silence",
      },
      {
        id: "multiple-perspectives",
        label: "Beauty of multiple perspectives",
      },
      {
        id: "tasks-above-egos",
        label: "Putting tasks above personal egos",
      },
    ],
  },
  quote: {
    text: "Where the mind is without fear and the head is held high: where knowledge is free, where the world has not been broken into fragments by narrow domestic walls........\n........into that heaven of freedom, my father let my country awake",
    author: "Rabindranath Tagore",
  },
  guidelines: {
    heading: "Our Guidelines",
    intro:
      "As a non-profit organization served by volunteers The Boston Pledge will always adhere to certain guidelines",
    items: [
      {
        id: 1,
        title: "Political Independence",
        description:
          "TBP will not have any affiliation with any political party anywhere in the world; it will work as an independent body to meet its objectives with dedication to excellence.",
      },
      {
        id: 2,
        title: "Cultural & Ethnic Inclusivity",
        description:
          "TBP will work with different cultural and ethnic organizations around the world and will not align with any single one on an exclusive basis.",
      },
      {
        id: 3,
        title: "Volunteer Working Group",
        description:
          "Members of the working group will be those students and professionals who dedicate a certain amount of time to serve and/or anchor various initiatives that TBP will undertake.",
      },
      {
        id: 4,
        title: "Mutual Respect & Reverence",
        description:
          "As members of TBP we value our colleagues irrespective of the background they represent, and treat each other with reverence.",
      },
      {
        id: 5,
        title: "Uncompensated Non-Profit Service",
        description:
          "TBP is run as a non-profit organization; its members – core and associates – are not compensated for their time commitment.",
      },
      {
        id: 6,
        title: "Expense Reimbursement",
        description:
          "Out-of-pocket expenses related to development of marketing, organization of seminars, and limited travel-related expenses (on permission of the board) will be compensated when receipts of services/products sourced are properly documented.",
      },
      {
        id: 7,
        title: "Commitment to Evolution",
        description:
          "At the core of TBP we believe the only constant is “change”. In that spirit, as TBP develops it will be open to new thoughts; accordingly, as required, The Boston Pledge leadership will consider amending the above and adding any additional guidelines so that The Boston Pledge can continually evolve its charter in increasing its effectiveness.",
      },
    ],
  },
};

export default constitutionData;
