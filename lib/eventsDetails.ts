import { ContentBlock, getUpdateBySlug } from "./latestUpdates";

// ---------- Types ----------

export interface EventItem {
  id: string;
  slug: string; // /events/<slug>
  title: string;
  date: string; // Single date field (ISO format, e.g. YYYY-MM-DD)
  type: "completed" | "upcoming"; // Event status: only "completed" or "upcoming"
  category: string;
  coverImage?: string; // optional: many old events have no image
  venue?: string;
  summary: string; // short text for the card
  content: ContentBlock[]; // full details for the detail page
}

// Four events are also in "Latest Updates". We reuse that content so there is ONE copy.
const fromUpdate = (slug: string): ContentBlock[] => {
  const update = getUpdateBySlug(slug);
  if (!update) throw new Error(`Missing update: ${slug}`);
  return update.content;
};

// ---------- Data ----------

export const eventsDetails: EventItem[] = [
  // ===== Renaissance 2.0 =====
  {
    id: "1",
    slug: "renaissance-2-0-a-parliament-of-enlightened-thoughts",
    title: "Renaissance 2.0 - A Parliament of Enlightened Thoughts",
    date: "2026-02-24",
    type: "upcoming",
    category: "Silver Jubilee",
    coverImage:
      "https://thebostonpledge.org/wp-content/uploads/2025/08/New-Project-1-768x2461.png",
    summary:
      "The Silver Jubilee celebration of The Boston Pledge — where global visionaries gather to reimagine civilization through peace, creativity, and conscience.",
    content: [
      {
        type: "image",
        src: "https://thebostonpledge.org/wp-content/uploads/2025/08/New-Project-1-768x2461.png",
        alt: "Renaissance 2.0 - A Parliament of Enlightened Thoughts, event poster with all details",
      },
      { type: "paragraph", text: "Event Date: February 24th, 2026" },
      { type: "button", label: "Event Link", href: "https://25.thebostonpledge.org/" },
    ],
  },

  // ===== Balancing Equity, Ethics, & Ecology =====
  {
    id: "2",
    slug: "balancing-equity-ethics-ecology-generative-ai-as-the-engine",
    title: "Balancing Equity, Ethics, & Ecology: Generative AI as the Engine?",
    date: "2024-09-15",
    type: "completed",
    category: "Webinar",
    coverImage:
      "https://thebostonpledge.org/wp-content/uploads/2024/08/tbp-768x1773.jpg",
    summary:
      "This event explores how Generative AI could shape the global socio-economic system, highlighting both its benefits and challenges, and gathering experts to discuss AI’s potential to guide humanity toward a more ethical and sustainable future.",
    content: [
      {
        type: "button",
        label: "Register in advance for this webinar",
        href: "https://bit.ly/tbp-Sept-15-2024",
        onlyWhenUpcoming: true,
      },
      {
        type: "image",
        src: "https://thebostonpledge.org/wp-content/uploads/2024/08/tbp-768x1773.jpg",
        alt: "Balancing Equity, Ethics, & Ecology: Generative AI as the Engine? event poster",
      },
      {
        type: "button",
        label: "Download poster",
        href: "https://mcusercontent.com/0a1c0ebdbc0e5a6735b3ecf0c/files/cfcb8033-26ab-8e16-4fa3-46d84964c997/GenAI_TBPSep15th_2024.pdf",
      },
    ],
  },

  // ===== TBP 20th Anniversary Conference Series =====
  {
    id: "3",
    slug: "tbp-20th-anniversary-conference-series-oct-10-2021",
    title: "TBP 20th Anniversary Conference Series-Oct-10-2021",
    date: "2021-10-10",
    type: "completed",
    category: "Conference Series",
    coverImage:
      "https://thebostonpledge.org/wp-content/uploads/2024/08/Poster-TBP-10-10-10-event-V2-768x994.png",
    summary: "TBP 20th Anniversary Conference Series, October 10, 2021.",
    content: [
      {
        type: "button",
        label: "Registration Link",
        href: "https://us02web.zoom.us/webinar/register/WN_ff-jRjhcTR-Bt55TLWo9Jw",
        onlyWhenUpcoming: true,
      },
      {
        type: "button",
        label: "Download Event Flyer",
        href: "https://thebostonpledge.org/poster-tbp-10-10-10-event-v2-2/",
      },
      {
        type: "image",
        src: "https://thebostonpledge.org/wp-content/uploads/2024/08/Poster-TBP-10-10-10-event-V2-768x994.png",
        alt: "TBP 20th Anniversary Conference Series, October 10, 2021, event poster",
      },
    ],
  },

  // ===== TBP 20th Anniversary =====
  {
    id: "4",
    slug: "tbp-20th-anniversary",
    title: "TBP 20th Anniversary",
    date: "2020-09-01",
    type: "completed",
    category: "Summit",
    coverImage:
      "https://thebostonpledge.org/wp-content/uploads/2020/08/TBP-Summit-poster.jpg",
    summary:
      "The hidden assets of south asia to trigger bottom-up socio-economic surge",
    content: [
      {
        type: "button",
        label: "Download Flyer for TBP 20th Anniversary",
        href: "https://thebostonpledge.org/tbp2321.pdf",
      },
      {
        type: "image",
        src: "https://thebostonpledge.org/wp-content/uploads/2020/08/TBP-Summit-poster.jpg",
        alt: "TBP 20th Anniversary summit poster",
      },
      {
        type: "button",
        label: "Registration link",
        href: "https://zoom.us/webinar/register/WN_Uq7BR3s3T52XCrL4u8IlAw",
        onlyWhenUpcoming: true,
      },
    ],
  },

  // ===== TBP Youth Workshop 2019 (shared with Latest Updates) =====
  {
    id: "5",
    slug: "tbp-youth-workshop-2019",
    title: "TBP Youth Workshop 2019",
    date: "2019-07-01",
    type: "completed",
    category: "Workshop",
    coverImage: "/images/updates/tbp-youth-workshop-2019.jpg",
    summary:
      "TBP conducted several youth workshops in Eastern India with rural entrepreneurs",
    content: fromUpdate("tbp-youth-workshop-2019"),
  },

  // ===== Eighteenth Annual Conference 2019 (shared with Latest Updates) =====
  {
    id: "6",
    slug: "eighteenth-annual-conference-2019",
    title: "Eighteenth Annual Conference 2019",
    date: "2019-10-01",
    type: "completed",
    category: "Annual Conference",
    coverImage: "/images/updates/eighteenth-annual-conference-2019.jpg",
    summary: "Conference schedule will be announced soon. Stay tuned.",
    content: fromUpdate("eighteenth-annual-conference-2019"),
  },

  // ===== Seventeenth Annual Conference 2018 (shared) =====
  {
    id: "7",
    slug: "seventeenth-annual-conference-2018",
    title: "Seventeenth Annual Conference 2018",
    date: "2018-11-11",
    type: "completed",
    category: "Annual Conference",
    coverImage: "/images/updates/seventeenth-annual-conference-2018.jpg",
    venue: "Busch Student Center, Rutgers University, Piscataway Township, NJ",
    summary:
      "Join Rutgers University Center for Innovation and Entrepreneurship for: Innovation Unbound:Ongoing journey of The Boston Pledge Digital “Enterprising through digital channels”",
    content: fromUpdate("seventeenth-annual-conference-2018"),
  },

  // ===== Sixteenth Annual Conference 2017 (shared) =====
  {
    id: "8",
    slug: "sixteenth-annual-conference-2017",
    title: "Sixteenth Annual Conference 2017",
    date: "2017-09-23",
    type: "completed",
    category: "Annual Conference",
    coverImage: "/images/updates/sixteenth-annual-conference-2017.jpg",
    venue: "Mason Innovation Lab, George Mason University",
    summary:
      "Join Capital IIT, WHEELS Global Foundation and George Mason University Center for Innovation and Entrepreneurship for: Innovation Unbound:Introducing The Boston Pledge Digital “Enterprising through digital",
    content: fromUpdate("sixteenth-annual-conference-2017"),
  },

  // ===== Fifteenth Annual Event 2016 =====
  {
    id: "9",
    slug: "fifteenth-annual-event-2016",
    title: "Fifteenth Annual Event 2016",
    date: "2016-10-01",
    type: "completed",
    category: "Annual Event",
    venue: "Fletcher School of Law & Diplomacy, Medford, MA",
    summary: "The World at the Brink: Future of Education",
    content: [
      { type: "paragraph", text: "The World at the Brink: Future of Education" },
      {
        type: "paragraph",
        text: "Held in October 2016 at the Fletcher School of Law & Diplomacy, Medford, Massachusetts.",
      },
    ],
  },

  // ===== Fourteenth Annual Event 2015 =====
  {
    id: "10",
    slug: "fourteenth-annual-event-2015",
    title: "Fourteenth Annual Event 2015",
    date: "2015-06-01",
    type: "completed",
    category: "Annual Event",
    summary: "Rural Innovation Center in Lakhikantapur",
    content: [
      { type: "paragraph", text: "Rural Innovation Center in Lakhikantapur" },
    ],
  },

  // ===== Thirteenth Annual Event 2014 =====
  {
    id: "11",
    slug: "thirteenth-annual-event-2014",
    title: "Thirteenth Annual Event 2014",
    date: "2014-06-01",
    type: "completed",
    category: "Annual Event",
    summary: "Leadership & Future of Water",
    content: [{ type: "paragraph", text: "Leadership & Future of Water" }],
  },

  // ===== Twelfth Annual Event 2013 =====
  {
    id: "12",
    slug: "twelfth-annual-event-2013",
    title: "Twelfth Annual Event: 2013",
    date: "2013-06-01",
    type: "completed",
    category: "Annual Event",
    summary:
      "The 12th Annual Conference of The Boston Pledge presents: Mr. Kapil Mandal, a perfect representation of Leadership and Entrepreneurship",
    content: [
      {
        type: "paragraph",
        text: "The 12th Annual Conference of The Boston Pledge presents: Mr. Kapil Mandal, a perfect representation of Leadership and Entrepreneurship, will talk about his experience of how he applied innovative models of microfinance in transforming a very challenged environment at Lakhikantapur (a small village 70km south of Calcutta, India), disadvantaged by salty and barren soil only 30 years ago, from despair and hopelessness to an Oasis of Hope & Possibilities – nurturing a forward looking economically selfsufficient green community.",
      },
    ],
  },

  // ===== Eleventh Annual Event 2012 =====
  {
    id: "13",
    slug: "eleventh-annual-event-2012",
    title: "Eleventh Annual Event: 2012",
    date: "2012-06-01",
    type: "completed",
    category: "Annual Event",
    summary:
      "Partha S. Ghosh is the chairman of The Boston Pledge. As a true global citizen, policy advisor and a strategist for Corporates and Governments he is known worldwide as an innovator of Business and Economic models.",
    content: [
      {
        type: "paragraph",
        text: "Partha S. Ghosh is the chairman of The Boston Pledge. As a true global citizen, policy advisor and a strategist for Corporates and Governments he is known worldwide as an innovator of Business and Economic models. He teaches Globalization & Economics at Tufts Gordon Institute, Innovation & Strategic Technologies at the Fletcher School, and Leadership at MIT. Mr. Ghosh was a partner at McKinsey & Company and is the founder/ Managing director of Strategy/Policy advisory firm Partha S Ghosh & Associates.",
      },
    ],
  },

  // ===== Tenth Annual Event 2011 =====
  {
    id: "14",
    slug: "tenth-annual-event-2011",
    title: "Tenth Annual Event: 2011",
    date: "2011-06-01",
    type: "completed",
    category: "Annual Event",
    summary:
      "Human beings did not stop evolving when we got up on our hind legs. Our evolution has continued, even accelerated, but is now more inward.",
    content: [
      {
        type: "paragraph",
        text: "Human beings did not stop evolving when we got up on our hind legs. Our evolution has continued, even accelerated, but is now more inward. As a species, we are rapidly becoming more intelligent, more educated, more informed, more connected and more conscious. Taken together, these changes spell a profound shift, as we humans have entered the Age of Transcendence. The implications of this are profound for every sphere of our existence. This panel will explore the consequences of these changes for the world of business in particular.",
      },
    ],
  },

  // ===== Ninth Annual Event 2010 =====
  {
    id: "15",
    slug: "ninth-annual-event-2010",
    title: "Ninth Annual Event: 2010",
    date: "2010-12-04",
    type: "completed",
    category: "Annual Event",
    summary:
      "The Boston Pledge presents our Annual Conference with emerging leaders, renowned thinkers and progressive minds like you",
    content: [
      {
        type: "paragraph",
        text: "The Boston Pledge presents our Annual Conference with emerging leaders, renowned thinkers and progressive minds like you",
      },
      { type: "paragraph", text: "Saturday December 4, 2010 | 2:30 - 5:30pm" },
      {
        type: "paragraph",
        text: "As humanity struggles through the current global recession, characterized by high unemployment rates, shortsighted leadership and deteriorating ethics in corporations and governments, we at The Boston Pledge view  the future with a reasonable degree of optimism. From crisis come opportunities for change. Funds raised will serve the various initiatives The Boston Pledge is serving at the base of the pyramid in different communities.",
      },
      {
        type: "heading",
        text: "Who do you think would benefit the most from this conference? What would the conference specifically offer?",
        level: 3,
      },
      {
        type: "paragraph",
        text: "This conference is focused on motivating professionals, young and seniors irrespective of their professional inclinations to engage with the challenges of imbalances of the 3Es _ Equity (widening gap between rich and poor), Ecology (melting ice on top of the mountains and glaciers) and Ethics (erosion of moral and civic values), which might stifle the progress civilization has made in the past 50,000 years. In the process it is my hope like- minded people will come together to deal with these challenges.",
      },
      {
        type: "heading",
        text: "The conference seems to play on the word Micro. What is the significance of that word?",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Microscopic forces are pure and most powerful. In physics, chemistry and biology we have been continually inspired by the wanders of these powers. It is our belief in communities also when small group of people come together with the purity of purpose however microscopic they may be when they gel they scale rapidly. Mother Teresa’s Missionaries of Charity is an excellent example how a large organization with base in 160 countries was built with humble beginnings on streets of Calcutta. We want to share with our supporters in the conference that however micro may their contributions be we should feel not handicapped by the size of the contribution, but be inspired by the creative and imaginative forces that such offerings might unleash.",
      },
      {
        type: "heading",
        text: "It is often felt that the techniques taught in top Business Schools are designed address the needs of the top one percent. Yet many argue that these techniques work for transforming the world of the bottom of the economic pyramid. Any comments?",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Excellent point. I think business school education is increasingly oriented to serve Wall Street requirements, which rewards the process of how you could speedily multiply the wealth of the investors. That approach does not work at the so called “Bottom of the Pyramid”.",
      },
      {
        type: "paragraph",
        text: "First we do not use the term “bottom” as it sound elitist as if people from the top have to reach to the bottom to bring about social change. We call that area of the pyramid as the base of the pyramid. Now for any building if the base is weak it does not matter how strong the top is, the building is fundamentally fragile. Unfortunately we have reached that point in our development, all our economic equations as result of business school curricula is focused on serving institutions at the top of the pyramid. Why shouldn’t they, as business schools have become places where students go to improve their economic standing in society. The economics of top schools are such, – that to afford good teachers, for the campuses to provide corporate like teaching environment they need to charge high tuition fees which only rich students can afford – leading to what I call the “cycle of elitism”",
      },
      {
        type: "paragraph",
        text: "If business schools are focused on serving students coming from the base of the pyramid not to graduate a few to go to the top, but to help them inspire the base for bottom up economic progress we have to fundamentally recast the curriculum with fundamental emphasis on",
      },
      {
        type: "list",
        items: [
          "(i) compassionate leadership,",
          "(ii) economics of inclusion as opposed to economics of exclusion,",
          "(iii)personality development which can bridge the base the and the apex of the pyramid,",
          "(iv) who will find ways to solve problems at the base to create jobs, not eliminate jobs at the middle,",
          "(v)create wealth where purchasing power is small or near zero. Business schools in contrast end up teaching how to take coal to New Castle and or take sand to the sea beach. Business school graduates must learn how to build oasis in the middle of deserts, not just how to build another high-rise in Manhattan.",
        ],
      },
    ],
  },

  // ===== Eighth Annual Event 2009 =====
  {
    id: "16",
    slug: "eighth-annual-event-2009",
    title: "Eighth Annual Event: 2009",
    date: "2009-06-01",
    type: "completed",
    category: "Annual Event",
    summary:
      "Making Green Economy Real: Life beyond the Meltdown where you Reinvent Yourself",
    content: [
      {
        type: "heading",
        text: "Making Green Economy Real: Life beyond the Meltdown where you Reinvent Yourself",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Explore the emerging landscape of New jobs, New entrepreneurship, New Wealth creation, & Thought leadership opportunities",
      },
    ],
  },

  // ===== Seventh Annual Event 2008 =====
  {
    id: "17",
    slug: "seventh-annual-event-2008",
    title: "Seventh Annual Event: 2008",
    date: "2008-06-01",
    type: "completed",
    category: "Annual Event",
    summary:
      "Turbulent times produce revolutionary change. The Renaissance in Europe and in 19th Century India, as well as the impressive progress in modern China stand as testimony to the power of the human spirit.",
    content: [
      {
        type: "paragraph",
        text: "Turbulent times produce revolutionary change. The Renaissance in Europe and in 19th Century India, as well as the impressive progress in modern China stand as testimony to the power of the human spirit. Today, in a time of global upheaval with our fragile planet, the economic turmoil, and the divide between the rich and the poor, we have the opportunity to create new paradigms of thought and action",
      },
    ],
  },

  // ===== Sixth Annual Event 2007 =====
  {
    id: "18",
    slug: "sixth-annual-event-2007",
    title: "Sixth Annual Event: 2007",
    date: "2007-06-01",
    type: "completed",
    category: "Annual Event",
    summary: "Enterprising for Rural Development",
    content: [{ type: "paragraph", text: "Enterprising for Rural Development" }],
  },

  // ===== Fifth Annual Event 2006 =====
  {
    id: "19",
    slug: "fifth-annual-event-2006",
    title: "Fifth Annual Event: 2006",
    date: "2006-06-01",
    type: "completed",
    category: "Annual Event",
    summary: "Being in harmony with culture of the local at the base of the Pyramid",
    content: [
      {
        type: "paragraph",
        text: "Being in harmony with culture of the local at the base of the Pyramid",
      },
    ],
  },

  // ===== Fourth Annual Event 2005 =====
  {
    id: "20",
    slug: "fourth-annual-event-2005",
    title: "Fourth Annual Event: 2005",
    date: "2005-06-01",
    type: "completed",
    category: "Annual Event",
    summary: "In the Beginning is Desire...",
    content: [{ type: "paragraph", text: "In the Beginning is Desire..." }],
  },

  // ===== Third Annual Event 2004 =====
  {
    id: "21",
    slug: "third-annual-event-2004",
    title: "Third Annual Event 2004",
    date: "2004-06-01",
    type: "completed",
    category: "Annual Event",
    summary:
      "According to The Rig-Veda, the oldest poetic thoughts in the history of the subcontinent, the root of all divine creative activity is the spark of desire that expands the universe from a primordial unity into flowering multiplicity.",
    content: [
      {
        type: "paragraph",
        text: "According to The Rig-Veda, the oldest poetic thoughts in the history of the subcontinent, the root of all divine creative activity is the spark of desire that expands the universe from a primordial unity into flowering multiplicity. Dr. Neela Bhattacharya Saxena explores this theme and the place of the great Goddess Kali in the spiritual and cultural heritage of India in her book titled: In the Beginning IS Desire: Tracing Kali’s Footprints in Indian Literature.",
      },
    ],
  },

  // ===== Second Annual Event 2003 =====
  {
    id: "22",
    slug: "second-annual-event-2003",
    title: "Second Annual Event 2003",
    date: "2003-12-20",
    type: "completed",
    category: "Annual Event",
    venue: "MIT Wong Auditorium",
    summary:
      "Coming to terms with an Emerging Global Crisis: Arsenic in Drinking Water..",
    content: [
      {
        type: "heading",
        text: "Coming to terms with an Emerging Global Crisis: Arsenic in Drinking Water..",
        level: 2,
      },
      { type: "paragraph", text: "Invites You to Participate in a Seminar on" },
      {
        type: "heading",
        text: "An Emerging Global Crisis: The Challenge of Arsenic in Water",
        level: 2,
      },
      { type: "paragraph", text: "@ MIT Wong Auditorium" },
      { type: "paragraph", text: "On December 20th Saturday 2003" },
      { type: "paragraph", text: "1:30 PM to 5:30 PM" },
      { type: "paragraph", text: "Followed by Refreshments" },
      {
        type: "paragraph",
        text: "World Renowned Economists, Technologists and Environmentalists",
      },
      {
        type: "paragraph",
        text: "It is Your Opportunity to Get Involved for a Sustainable Future",
      },
      { type: "paragraph", text: "WITH MIT SOUTH ASIAN STUDENTS ASSOCIATION" },
    ],
  },

  // ===== First Annual Event 2002 =====
  {
    id: "23",
    slug: "first-annual-event-2002",
    title: "First Annual Event: 2002",
    date: "2002-06-01",
    type: "completed",
    category: "Annual Event",
    summary: "World Economists, Technologists and Environmentalists",
    content: [
      {
        type: "paragraph",
        text: "World Economists, Technologists and Environmentalists",
      },
    ],
  },
];

// ---------- Helpers (use these in your pages, not the raw array) ----------

// Formats an ISO date (e.g. "2026-02-24") into a clean display label (e.g. "February 24, 2026")
export const formatEventDate = (dateStr: string): string => {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const d = new Date(Date.UTC(year, month, day));
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      });
    }
  }
  return dateStr;
};

// Returns event status directly from the data object's `type` field
export const getEventStatus = (e: EventItem): "upcoming" | "completed" => e.type;

export const getAllEvents = (): EventItem[] =>
  [...eventsDetails].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export const getUpcomingEvents = (): EventItem[] =>
  getAllEvents().filter((e) => e.type === "upcoming");

export const getCompletedEvents = (): EventItem[] =>
  getAllEvents().filter((e) => e.type === "completed");

export const getEventBySlug = (slug: string): EventItem | undefined =>
  eventsDetails.find((e) => e.slug === slug);

// Pagination (the old site had 2 pages)
export const getEventsPage = (page = 1, pageSize = 12) => {
  const all = getAllEvents();
  const totalPages = Math.max(1, Math.ceil(all.length / pageSize));
  const current = Math.min(Math.max(1, page), totalPages);
  return {
    events: all.slice((current - 1) * pageSize, current * pageSize),
    page: current,
    totalPages,
  };
};
