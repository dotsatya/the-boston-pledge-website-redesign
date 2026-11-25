// ---------- Types ----------

// The detail page is built from blocks. Add new block types here when needed.
export type ContentBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "video"; url: string }
  | { type: "link"; label: string; href: string }
  | { type: "button"; label: string; href: string; onlyWhenUpcoming?: boolean };

export interface LatestUpdate {
  id: string;
  slug: string; // used in the URL: /updates/<slug> (same as the old site's slug)
  title: string;
  date: string; // ISO date, used ONLY for sorting (newest first)
  dateLabel: string; // the text you show on the page
  category: string;
  coverImage: string; // shown on the card and at top of the detail page
  summary: string; // short text for the card
  content: ContentBlock[]; // full details for the detail page
}

// ---------- Data ----------

export const latestUpdates: LatestUpdate[] = [
  // ===== 1. Reset India Webinar May 8th 2022 (event report) =====
  {
    id: "1",
    slug: "reset-india-webinar-may-8th-2022",
    title: "Reset India Webinar May 8th 2022",
    date: "2022-05-08",
    dateLabel: "May 8, 2022",
    category: "Webinar",
    coverImage: "https://thebostonpledge.org/wp-content/uploads/2024/08/blog1-300x208.jpg",
    summary:
      "Attended by close to 200 conscious Business, Academic & Social leaders from six different countries to discuss Dr. Partha Ghosh‘s book “INDIA TOWARDS 100: A CALL FOR RESET! Need a Missionary Zeal”,- the webinar entitled Reset India was indeed a solemn fusion of multiple thoughts that the world leaders need to pay attention to.",
    content: [
      {
        type: "paragraph",
        text: "Attended by close to 200 conscious Business, Academic & Social leaders from six different countries to discuss Dr. Partha Ghosh‘s book “INDIA TOWARDS 100: A CALL FOR RESET! Need a Missionary Zeal”,- the webinar entitled Reset India was indeed a solemn fusion of multiple thoughts that the world leaders need to pay attention to.",
      },
      {
        type: "paragraph",
        text: "On behalf of The Boston Pledge, –  Devendar Singh in his welcoming remarks defined the holistic significance of the subject, – creating a spirit of seriousness and a sense of urgency with which all the participants engaged with the webinar. Raj Pratha and Santanu Sengupta summarized the critical points of the book, – essentially underscoring the significance of the book in context of how the fundamental tenets of economic discipline must shift, how the governance model of nations need to be reprogrammed, and how humanity’s relationship with nature need to be reset with higher level of emphasis on the spiritual vector.",
      },
      {
        type: "paragraph",
        text: "Several distinguished thought leaders with wide range of experience in academia, industry and government offered their invaluable perspectives on the path-breaking ideas in the book:",
      },
      {
        type: "paragraph",
        text: "Mr. Puran Dang (a distinguished Life Fellow of Indian Institute of Technology, Kharagpur) while anchoring the programme emphasized the significance of the book from the perspective of the development of future leaders who could renew economic equations and business models the book proposes. He particularly emphasized that the book must become a textbook in universities & colleges in the Indian subcontinent and across the world.",
      },
      {
        type: "paragraph",
        text: "Dr. Sam Pitroda (Telcom Czar, Advisor to 3 PMs of India, former Chairman of Knowledge Commission) appreciated the freshness of the ideas that the book offers to enable socio-economic development that is bottom-up. He underscored the need for institutional systems to be more robust and transparent so that the innovative ideas the book offers on the core new economic rules around people & planet, could be implemented with long term commitment.",
      },
      {
        type: "paragraph",
        text: "Sri Suresh Prabhu (Member of the Indian Parliament for multiple terms and have led multiple important ministries of the Government of India) made three important points that the book talks about – importance of “freedom of honest thinking and expression”, “social conscience and empathy” (the world must realize true meaning of prosperity each one of us must ensure that our neighbor does not sleep hungry) and human engineering.",
      },
      {
        type: "paragraph",
        text: "Mr. R Gopalakrishnan (Gopal) (Author of 18 books, former Executive Director of Tata Sons, former member of Unilever Leadership team) agreed that while the wisdom of ancient philosophies should form the backbone of economic system of India, it needs to be marketed in modern context. As the book argues, he believes in India there is a need to focus more on software/systems and not just on hardware alone. He proposed five points that need to be considered to reset India’s software. He particularly emphasized the importance of fixing social equity to drive economic equity, and nurturing enterprises that are respected and loved, sustainable and honest. In tune with one of the basic themes of the book, he also emphasized the importance of biological model to deal with turbulence of change and to enable innovation. In the process, Gopal several times emphasized the significant role the Academy of Leadership at IIT Kharagpur must play to enable the transformational moves.",
      },
      {
        type: "paragraph",
        text: "Dr. Lawrence Kauffman (Thought Leader and Business leader with an impressive track record across multiple industries) emphasized the importance of the book around several critical points to reset global economic system; he particularly highlighted the need for strategic approach in governance of nations at the macroeconomic level, and stressed the need to move away from conventional hierarchical model to more dynamic biological mode at micro economic level, to unlock the power of self-expression and human ingenuity. He believes not just India, but 180 countries could benefit from the powerful ideas the book offers. He also stressed that Academy of Leadership at IIT Kharagpur should commit to nurturing a more sustainable and equitable global economic system.",
      },
      {
        type: "paragraph",
        text: "Dr. Partha S Ghosh (the author) thanked everyone for their reflections on the book in the context of the challenges in the Indian subcontinent and the world. He pointed out that through his work around the world he senses that there is an emerging consensus that governance of geo-political and geo-economic system need a fundamental shift; such a shift must reset how humanity engages with nature, how nations and individuals  engage with each other, and most importantly how we engage with our inner conscience. He indicated that perhaps because of the influence of Cartesian ways of thinking, discipline of economics rarely considers how different segments (with different cultural biases/norms, propensities to work, skill sets, work ethics etc.) of society could connect with and/or respond to macroeconomic policies, let alone realize that personal attitudes toward work, personal tendencies and preferences toward consumption are different, across population segments in different communities. Accordingly, he argues for Biological model, in contrast to the conventional Cartesian model.",
      },
      {
        type: "paragraph",
        text: "In that context he emphasized that India must switch from the current viscous cycle of lacklustre performance to virtuous cycle of enlightenment. He believes it is within the realm of possibility, if only the leadership of the nation engages with the foundational issues with, – a holistic perspective, a strategic mind-set, and human centric programs.",
      },
      {
        type: "paragraph",
        text: "He particularly emphasized that for India to reset, the nation will need to think of nutrition with the highest level of seriousness along three dimensions – nutrition of the body, nutrition of the intellect, and nutrition of inner conscience. He cautioned India cannot linearly extend the past into the future; the nation will need to chart a new trajectory, a “new S-curve” of socioeconomic development with an enlightened purpose.",
      },
      {
        type: "paragraph",
        text: "In addition, several important personalities shared brief but significant thoughts:",
      },
      {
        type: "paragraph",
        text: "Dr. Anil Kakodkar (Chancellor, Homi Bhabha National Institute, Chairman, Rajiv Gandhi Science & Technology Commission, and Former Chairman of Atomic Energy Commission) shared that the book has the ability to be the catalyst of change – which is urgently needed.",
      },
      {
        type: "paragraph",
        text: "Professor Farrokh Mistree (Professor at the University of Oklahoma and alumnus of IIT Kharagpur) suggested that the Government, Industry & local Communities must collaborate to build a culture to deliver social equity.",
      },
      {
        type: "paragraph",
        text: "Professor Sam Liggero (Tufts Gordon Institute Professor, former Director of R & D at Polaroid) commented that India has great minds to shape the future of the world. He believes the book could encourage policy makers and business to create an environment for everyone to realize their full potential.",
      },
      {
        type: "paragraph",
        text: "Mr. Krishan Khanna (Chairman and Founder of iWatch) observed that the book should be a must read for problem solvers. He particularly emphasized that India should focus on building relevant skill-sets in people, essential to  implement the innovative and transformational ideas the book proposes.",
      },
      {
        type: "paragraph",
        text: "Prof. Madhusudan Chakraborty (Former Director of IIT Bhubaneswar & former Director (Acting) of IIT Kharagpur) offered his thanks to all the speakers, participants, and the organizers for a very substantive and engaging discussion. He indicated the proposals in the book are relevant and timely, visionary and strategic, pragmatic and perennial. He asserted that thoughts Leaders in the discipline of Economics should take note of Partha Ghosh’s thoughts on ‘Cellularism’ and the significance of ‘Central Economic Nervous System’ of a national economy. He hoped that the book will be compulsory reading for the decision-makers of today and tomorrow, especially the IAS officers, corporate CEOs, aspiring leaders, members of the Academia and the University students who have specific roles to play in nation-building.",
      },
      // These 7 lines look like video/session titles on the old page.
      // TODO: add the video URLs and turn each into a { type: "video" } block.
      {
        type: "list",
        items: [
          "Introduction & Book Highlights by Devendar Singh, Raj Pratha & Santanu Sengupta",
          "Reflections by Mr. Puran Dang",
          "Reflections by Dr. Sam Pitroda & Sri Suresh Prabhu",
          "Mr. R Gopalakrishnan & Dr. Lawrence Kauffman",
          "Response from Dr. Partha S Ghosh",
          "Expert comments from Dr. Anil Kakodkar, Professor Farrokh Mistree, Professor Sam Liggero & Mr. Krishan Khanna",
          "Professor Madhusudan Chakraborty",
        ],
      },
      {
        type: "paragraph",
        text: "In summary, The Boston Pledge firmly believes that the timing of this webinar could not have been timelier.  Humanity faces unprecedented risks from many geo-political conflicts, global warming, pandemic, and economic devastation.  The challenges ahead are indeed significant, equally significant must be our response. The discussions in the webinar triggered a lively debate as is evident from the active participations of more than 150 attendees through the chat box. Virtually everyone, looking forward to a new horizon, appreciated the path breaking ideas of Dr Partha Ghosh and commented upon the ways and means to usher in the desired changes. Accordingly, the core message of the book – “Reset”, – is the key takeaway of the webinar as well",
      },
    ],
  },

  // ===== 2. Eighteenth Annual Conference 2019 =====
  {
    id: "2",
    slug: "eighteenth-annual-conference-2019",
    title: "Eighteenth Annual Conference 2019",
    date: "2019-10-01", // APPROXIMATE, only for sorting. Replace with the real date.
    dateLabel: "2019",
    category: "Conference",
    coverImage: "https://thebostonpledge.org/wp-content/uploads/2024/08/DSC_0238-440x550-1.jpg" ,
    summary: "Conference schedule will be announced soon. Stay tuned.",
    content: [
      {
        type: "paragraph",
        text: "Conference schedule will be announced soon. Stay tuned.",
      },
    ],
  },

  // ===== 3. Seventeenth Annual Conference 2018 =====
  {
    id: "3",
    slug: "seventeenth-annual-conference-2018",
    title: "Seventeenth Annual Conference 2018",
    date: "2018-11-11",
    dateLabel: "November 11, 2018",
    category: "Conference",
    coverImage: "https://thebostonpledge.org/wp-content/uploads/2024/08/blog3-300x208.jpg",
    summary:
      "Join Rutgers University Center for Innovation and Entrepreneurship for: Innovation Unbound:Ongoing journey of The Boston Pledge Digital “Enterprising through digital channels”",
    content: [
      {
        type: "paragraph",
        text: "Join Rutgers University Center for Innovation and Entrepreneurship for:",
      },
      {
        type: "heading",
        text: "Innovation Unbound:Ongoing journey of The Boston Pledge Digital “Enterprising through digital channels”",
        level: 2,
      },
      { type: "paragraph", text: "The Boston Pledge 17th Anniversary Conference" },
      { type: "paragraph", text: "DATE – November 11th 12:00 to 3:00 PM" },
      { type: "paragraph", text: "at Busch Student Center" },
      { type: "paragraph", text: "Rutgers University" },
      {
        type: "paragraph",
        text: "604 Bartholomew Rd, Piscataway Township, NJ 08854",
      },
    ],
  },

  // ===== 4. TBP Youth Workshop 2019 =====
  {
    id: "4",
    slug: "tbp-youth-workshop-2019",
    title: "TBP Youth Workshop 2019",
    date: "2019-07-01", // APPROXIMATE (summer 2019), only for sorting. Replace with the real date.
    dateLabel: "Summer 2019",
    category: "Workshop",
    coverImage: "https://thebostonpledge.org/wp-content/uploads/2024/08/19-1-400x300-1-300x225.jpg",
    summary:
      "TBP conducted several youth workshops in Eastern India with rural entrepreneurs",
    content: [
      {
        type: "paragraph",
        text: "One of the core missions of TBP is to develop underprivileged youth around the world and make them self-sufficient as they grow. TBP has partnered with several organizations worldwide for this purpose. TBP Youth Leader Ishani Sengupta organized a few entrepreneurship workshops over the summer of 2019 to help underprivileged students get exposure to entrepreneurship and help budding entrepreneurs expand their business. The most notable of those was a workshop at Prithwish Chandra Biswas Kanya Mahavidyalaya, A girl’s college in rural Bengal, and one in the famous city of Kolkata.",
      },
      {
        type: "paragraph",
        text: "Later on, Chairman of TBP, Mr. Partha Ghosh made an additional trip to help the students learn international arts and crafts which they could then manufacture and sell. TBP Volunteer Jaya and Komla Jalwapuram helped develop certificates for the entrepreneurship workshop, which Mr Ghosh distributed to the participants.",
      },
      {
        type: "paragraph",
        text: "Below is an excerpt of Ishani’s experience, in her own words",
      },
      {
        type: "paragraph",
        text: "TBP has been conducting entrepreneurship workshops for two decades now. I have been privileged to lead a few. Dasghara has been one of my many workshops, but it was a very special one because it was the first that serves women’s empowerment.",
      },
      {
        type: "paragraph",
        text: "This summer, I conducted a workshop at Dasghara, West Bengal. The road to Dasghara from Habra was picturesque, overlapping seamlessly with my imagination that I developed listening to the childhood stories of rural Bengal from my dad. The college building was unique, almost like a hidden treasure through the winding rural road that leads to its humble entrance. Thanks to Ms. Sudarshana, the Principal and the staff at PCBKMV, we had a great lunch and a memorable tour of the facility that eventually led to a room full of eager students; many did not have much exposure to business and entrepreneurship, but curious to understand what it is all about. Some were not as conversant with English language, so we conducted the workshop mostly in Bengali. That did not deter the inquisitive minds from asking many insightful questions. The richness of business ideas they developed within a couple of hours ranged from starting a dance academy to designing and marketing paper ornaments. Growing up in US, my business ideas have been largely influenced by technology and finance, but here I learnt how simple ideas could create as powerful business models.",
      },
      {
        type: "paragraph",
        text: "The facility at MCCI Kolkata offered a different experience – it was more businesslike. Thanks to the effort of our TBP colleagues Ms. Mukherjee and Mr Sanyal, we were offered a comfortable air-conditioned conference room with individual microphones, and a very different audience mostly consisting of budding entrepreneurs and senior representatives from MCCI.",
      },
      {
        type: "paragraph",
        text: "I felt a bit nervous at the beginning, being part of such a distinguished table, but the experience at Dasghara and the presence of experts like Mr. Sanyal and Ms. Mukherjee helped.. I learned a lot from discussions like revenue stream, when to diversify and when not to etc., as well as the challenges they are facing in their journey to take their business to the next level. We provided some feedback and promised to help them in their journey forward. We also discussed the TBP digital Platform and how it can connect the entrepreneurs in the region with the expertise and resources they need.",
      },
      {
        type: "paragraph",
        text: "The 2019 ESP workshops achieved far more than what I thought it would; but for many of these participants, it is a journey that is just starting and we have an opportunity to help them in that process in the coming days. I will work with our TBP USA and TBP Asia colleagues on the next steps and action items that follows. But till then, let’s pause for a second and celebrate the phenomenal 2019 ESP Workshops! Thanks everyone for your help and let’s work on the journey together…",
      },
    ],
  },

  // ===== 5. Sixteenth Annual Conference 2017 =====
  {
    id: "5",
    slug: "sixteenth-annual-conference-2017",
    title: "Sixteenth Annual Conference 2017",
    date: "2017-09-23",
    dateLabel: "September 23, 2017",
    category: "Conference",
    coverImage: "https://thebostonpledge.org/wp-content/uploads/2024/08/blog5-300x208.jpg",
    summary:
      "Join Capital IIT, WHEELS Global Foundation and George Mason University Center for Innovation and Entrepreneurship for: Innovation Unbound:Introducing The Boston Pledge Digital “Enterprising through digital",
    content: [
      // This first line is taken from the old card text. It was missing from the detail text you pasted.
      {
        type: "paragraph",
        text: "Join Capital IIT, WHEELS Global Foundation and George Mason University Center for Innovation and Entrepreneurship for:",
      },
      {
        type: "heading",
        text: "Innovation Unbound:Introducing The Boston Pledge Digital “Enterprising through digital channels",
        level: 2,
      },
      { type: "paragraph", text: "The Boston Pledge 16th Anniversary Conference" },
      { type: "paragraph", text: "DATE – September 23rd 2:00 to 6:00 PM" },
      { type: "paragraph", text: "at Mason Innovation Lab" },
      {
        type: "link",
        label: "The Center for Innovation and Entrepreneurship",
        href: "http://www.gmu.edu/resources/welcome/FairfaxMap2017.pdf",
      },
      { type: "paragraph", text: "Enterprise Hall, Room 278" },
      { type: "paragraph", text: "George Mason University" },
      { type: "heading", text: "Description", level: 2 },
      {
        type: "paragraph",
        text: "Digital channels are changing the business landscape for the privileged. With The Boston Pledge (TBP) digital, we have an opportunity to utilize the power of digital to reach out to the underprivileged communities. We can provide young entrepreneurs with a platform to express their challenges and ambitions and empower them to come up with innovative ideas and solutions by connecting them with the right expertise and resources. Let us connect the communities without having to leave our homes.",
      },
      { type: "quote", text: "“Let the Bits connect the Brains”" },
      { type: "heading", text: "Food and drinks sponsor", level: 2 },
      { type: "paragraph", text: "Food and drinks sponsor: Well Fargo" },
      {
        type: "paragraph",
        text: "An expert from the Small-Business Administration Division of Well Fargo will also be present to provide more information about Well Fargo’s SBA program. Wells Fargo is one of the largest providers of financing solutions to businesses under programs offered by the Small Business Administration (SBA) in the United States. Wells Fargo offers commercial loan financing to creditworthy businesses otherwise unable to obtain bank financing on reasonable terms using conventional lending channels.",
      },
    ],
  },

  // ===== 6. Reset India Webinar (registration page, same event as #1) =====
  {
    id: "6",
    slug: "reset-india-webinar",
    title: "Reset India Webinar",
    date: "2022-05-08", // same event date as #1; array order keeps #1 first
    dateLabel: "May 8, 2022",
    category: "Webinar",
    coverImage: "https://thebostonpledge.org/wp-content/uploads/2024/08/blog6-300x225.jpg",
    summary:
      "To register, please use the registration link below: Registration Link  Download Event Flyer",
    content: [
      {
        type: "paragraph",
        text: "To register, please use the registration link below:",
      },
      {
        type: "button",
        label: "Registration Link",
        href: "https://bit.ly/tbp-may-08-2022-register",
      },
      {
        type: "button",
        label: "Download Event Flyer",
        href: "https://thebostonpledge.org/wp-content/uploads/2022/04/TBP-May-8th-2022-Poster.pdf",
      },
    ],
  },
];

// ---------- Helpers (use these in your pages, not the raw array) ----------

export const getAllUpdates = (): LatestUpdate[] =>
  [...latestUpdates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export const getLatestUpdates = (count = 3): LatestUpdate[] =>
  getAllUpdates().slice(0, count);

export const getUpdateBySlug = (slug: string): LatestUpdate | undefined =>
  latestUpdates.find((u) => u.slug === slug);
