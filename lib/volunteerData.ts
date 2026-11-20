export interface VolunteerPrinciple {
  id: number;
  title: string;
  description: string;
}

export interface GroundRule {
  id: number;
  title: string;
  description: string;
}

export const volunteerData = {
  hero: {
    title: "Be A Volunteer",
    image: "https://thebostonpledge.org/wp-content/uploads/2024/08/members_small.jpg",
    subtitle:
      "Offer your time, intellect, spirit of public service, and compassion to serve complex and difficult grassroots issues alongside an international fellowship of changemakers.",
  },
  whoCanApply: {
    title: "Who can apply to the program?",
    intro:
      "Our volunteers include people from a wide range of backgrounds — students and faculty from academia, professionals representing different skill sets from diverse industries who offer their time, intellect, spirit of public service, and above all their spirit to serve complex and difficult issues.",
    communicationEthos:
      "As a member of TBP, we put the highest level of commitment in managing our communication style, our language — verbal and nonverbal, our expressions — vocal or silent. Through this process we ensure our effectiveness with each other, and our effectiveness as an individual and as a group with the world outside, continually working towards building high quality teamwork, goodwill, and in turn continually enhancing our effectiveness with the mission we serve.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
  },
  principles: {
    title: "Basic assumptions / principles",
    subtitle:
      "Our volunteer fellowship is guided by core convictions of humility, service, and excellence:",
    items: [
      {
        id: 1,
        title: "Inspired Volunteering",
        description:
          "Volunteering must be inspired, not imposed. We attract others purely through good work, however small it may appear.",
      },
      {
        id: 2,
        title: "Mutual Goodness",
        description:
          "Serving society requires us to be good to each other and the outside world, regardless of how welcoming it may seem.",
      },
      {
        id: 3,
        title: "Universal Reverence",
        description:
          "Those who may not connect with TBP's mission are treated with as much, if not more, reverence and respect.",
      },
      {
        id: 4,
        title: "Non-Competitive Spirit",
        description:
          "We respect and look up to all other forms of public service, operating without rivalry or competition.",
      },
      {
        id: 5,
        title: "Inherent Divine Worth",
        description:
          "We manage every interface with the foundational belief that divine goodness resides in every individual.",
      },
      {
        id: 6,
        title: "Excellence Above All",
        description:
          "We place quality in our work and excellence in our ethical standards far above any form of popularity.",
      },
    ] as VolunteerPrinciple[],
    image: "/images/volunteer-principles.jpg",
  },
  groundRules: {
    title: "Behavioral guidelines / ground rules",
    subtitle:
      "Six core tenets that govern how we interact, deliberate, and execute across cross-cultural teams:",
    items: [
      {
        id: 1,
        title: "Discipline of Harmony",
        description: "Honesty and integrity of discipline of harmony (timing).",
      },
      {
        id: 2,
        title: "Power of Cheerleading",
        description: "Power of cheer leading and mutual encouragement.",
      },
      {
        id: 3,
        title: "Constructive Language",
        description: "Energy of positive adjectives and adverbs in all spoken and written communication.",
      },
      {
        id: 4,
        title: "Power of Silence",
        description: "Power of silence, calm discernment, and active listening.",
      },
      {
        id: 5,
        title: "Pluralistic Beauty",
        description: "Beauty and enrichment of multiple perspectives.",
      },
      {
        id: 6,
        title: "Tasks Above Egos",
        description: "Putting tasks and community purpose above personal egos.",
      },
    ] as GroundRule[],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=85",
  },
  quote: {
    text: "By serving society, we essentially serve ourselves to uncover the better person within us",
    author: "Dr. Partha S. Ghosh",
    role: "Chairman, The Boston Pledge",
  },
  industries: [
    "Academia & Higher Education",
    "Information Technology & Artificial Intelligence",
    "Healthcare, Medicine & Life Sciences",
    "Finance, Banking & Management Consulting",
    "Civil Engineering, Energy & Infrastructure",
    "Agriculture, Water & Environmental Ecology",
    "Nonprofit Leadership & Public Policy",
    "Arts, Media & Cultural Communications",
    "Student / University Scholar",
    "Other Industry / Domain",
  ],
  timeCommitments: ["5 hrs", "7 hrs", "10 hrs", "12 hrs", "15 hrs"],
};

export default volunteerData;
