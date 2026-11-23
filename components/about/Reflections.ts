/**
 * The Boston Pledge — Chairman's Reflections & Thought Leadership
 * Centralized content data for the Reflections page (/reflections).
 */

export interface SpeechItem {
  id: number;
  title: string;
  forum: string;
  location: string;
  date: string;
  category?: string;
}

export interface ReflectionsData {
  title: string;
  subtitle: string;
  featuredVideo: {
    title: string;
    subtitle: string;
    youtubeUrl: string;
    embedUrl: string;
    description: string;
  };
  chairman: {
    name: string;
    role: string;
    organization: string;
    image: string;
    linkedin: string;
    quote: string;
    biography: string[];
    credentials: string[];
  };
  speeches: {
    sectionTitle: string;
    sectionDescription: string;
    items: SpeechItem[];
  };
}

export const reflectionsData: ReflectionsData = {
  title: "Reflections",
  subtitle:
    "Leadership, strategic philosophies, and grassroots visions by Dr. Partha S. Ghosh, Chairman of The Boston Pledge.",

  featuredVideo: {
    title: "Lecture on Leadership",
    subtitle: "Interview of a Bengali Thinker",
    youtubeUrl: "https://youtu.be/oHOhmc-aSd0",
    embedUrl: "https://www.youtube.com/embed/oHOhmc-aSd0",
    description:
      "A wide-ranging discourse on leadership, ethics, economic transformation, and public service by global strategist and The Boston Pledge Chairman, Dr. Partha S. Ghosh.",
  },

  chairman: {
    name: "Dr. Partha S. Ghosh",
    role: "Chairman",
    organization: "The Boston Pledge",
    image: "https://thebostonpledge.org/wp-content/uploads/2025/08/psg_thumbnail.png",
    linkedin: "https://www.linkedin.com/in/partha-ghosh-820b4a/",
    quote:
      "Never in history how much humankind could achieve, was ever limited by our means, but was only determined by how far our vision could stretch.",
    biography: [
      "Dr. Partha S. Ghosh, a true global citizen, is a policy advisor and a strategist for Corporates and Governments. He is known worldwide as an innovator of Business and Economic models and currently enjoys advisory relationships with multiple organizations in more than half a dozen nations. He helps boards of companies to be strategically more effective and corporate governance more trustworthy. In the last thirty-five years as a professional consultant to leaderships of prestigious organizations worldwide, he has been involved in a broad spectrum of strategic and policy issues in technology based industries. He has done extensive work to assess strategic and technology issues in the Energy Industry, both conventional and emerging renewable systems.",
      "Dr. Partha S. Ghosh believes that in the next 25 years the world economy will undergo profound changes which civilization has never experienced before. Industries and governments will need to reinvent the basic tenets of capitalism implying fundamental transformation of industry and economic models. He passionately advocates that through forward looking strategic and organization models, MNCs could uniquely lead the Global Renaissance. Working with leaders of MNCs the basic question he wishes to address is that — could leaderships of MNCs rekindle the spirit of exploration and bottom-up excitement to draw people towards a higher-level purpose in creating new knowledge intensive business models and industries in the 21st century. He thinks if the will is there, a transformed eco-friendly and energy-efficient world, which is more equitable, is indeed within the realm of possibility.",
      "His clients view him as a 'creative problem solver' and a 'visionary leader.' More recently he has been teaching Globalization & Economics at Tufts Gordon Institute, Innovation & Strategic Technologies at the Fletcher School, and Leadership at MIT. Earlier Mr. Ghosh was a partner at McKinsey & Company and is the founder/Managing Director of Strategy/Policy advisory firm Partha S. Ghosh & Associates. He has two advanced Engineering and Management degrees from Massachusetts Institute of Technology. He did his undergraduate work at Indian Institute of Technology. An avid public servant, he is one of the founding members of The Boston Pledge, and is involved with multiple philanthropic initiatives around the world. Given his wide range of interests from education reforms, philosophy, international relationships, science & engineering, business & economics, country management, public service, and his experience across cultures and industries, people who know him well, describe him as a 'modern day renaissance man.'",
    ],
    credentials: [
      "Former Partner, McKinsey & Company",
      "Founder & MD, Partha S. Ghosh & Associates",
      "Faculty, Tufts Gordon Institute & The Fletcher School",
      "Lecturer on Leadership, MIT",
      "Two Advanced Degrees, Massachusetts Institute of Technology (MIT)",
      "B.Tech Alumnus, Indian Institute of Technology (IIT)",
    ],
  },

  speeches: {
    sectionTitle: "Recent Select Publications, Speeches & Presentations",
    sectionDescription:
      "Select Keynote and Invited Speeches at major forums worldwide — covering a wide range of issues from Technology to Theology, Ethics to Engineering, Macro to Micro Economy, and Nation Building to Global Integration.",
    items: [
      {
        id: 1,
        title:
          "Practising the Art & Science of “Self Regenerative Organization”: Capturing the New Possibilities in a Probabilistic Environment",
        forum: "Cutrogli Business School Conference on ART of HR",
        location: "Dubrovnik, Croatia",
        date: "November 2014",
        category: "Organizational Strategy",
      },
      {
        id: 2,
        title:
          "Advancing the Promise of Inner Power to Power the 21st Century Leadership Qualities",
        forum: "Cutrogli Business School Conference on ART of HR",
        location: "Dubrovnik, Croatia",
        date: "November 2014",
        category: "Leadership Philosophy",
      },
      {
        id: 3,
        title:
          "Advancing IQ Dynamics of Organizations: Technology, People and Business Processes",
        forum: "AAPG Annual Conference",
        location: "Istanbul, Turkey",
        date: "September 2014",
        category: "Technology & Energy",
      },
      {
        id: 4,
        title:
          "Leadership in the 21st Century: Activating the Power within, Aligning with the Possibilities Ahead",
        forum: "Dell-Harvard Pilgrim Leadership Workshop",
        location: "Weston, MA, USA",
        date: "May 2014",
        category: "Executive Leadership",
      },
      {
        id: 5,
        title:
          "Advancing the Promise of Emerging Leaders: In Search of a New Paradigm?",
        forum: "Schlumberger HR Conference",
        location: "Paris, France",
        date: "December 2013",
        category: "Talent & Leadership",
      },
      {
        id: 6,
        title:
          "Advancing the Promise of Global Conscience: In Search of Paradigm Shift",
        forum:
          "Global Knowledge Conference organized by a Consortia of Universities at Suffolk University",
        location: "Cambridge, MA, USA",
        date: "November 1, 2013",
        category: "Global Conscience",
      },
      {
        id: 7,
        title:
          "Stimulating Bottom-Up Innovation at the Base of the Pyramid",
        forum: "The Boston Pledge Annual Conference at MIT",
        location: "Cambridge, MA, USA",
        date: "September 15, 2013",
        category: "Grassroots Innovation",
      },
      {
        id: 8,
        title:
          "Visioning the Role of China in the Emerging Global Economy",
        forum: "Tsinghua University",
        location: "Beijing, China",
        date: "September 10, 2013",
        category: "Geopolitics & Economy",
      },
      {
        id: 9,
        title:
          "Strategic Imperatives for Japan in Post Tsunami Recovery",
        forum: "Waseda University",
        location: "Tokyo, Japan",
        date: "July 2013",
        category: "Crisis Management & Economy",
      },
      {
        id: 10,
        title:
          "Exploring the New Frontiers of Human Conscience Beyond 3/11: Japan & The World in An Uncertain Environment",
        forum: "Japan Roundtable Hitachi Center at The Fletcher School",
        location: "Medford, MA, USA",
        date: "2012 / 2013",
        category: "Global Consciousness",
      },
      {
        id: 11,
        title:
          "Leadership in the 21st Century: Uncovering the Power within ~ Fusing Eastern and Western Philosophical Constructs",
        forum: "International Leadership Forum",
        location: "Manama, Bahrain",
        date: "February 2012",
        category: "Philosophy & Leadership",
      },
    ],
  },
};
