export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

const IMG_BASE = "https://thebostonpledge.org/wp-content/uploads";

export const ourTeamDetails: TeamMember[] = [
  {
    id: "partha-s-ghosh",
    name: "Dr. Partha S. Ghosh",
    role: "Chairman",
    bio: "Dr. Partha S. Ghosh is a global strategist, former McKinsey partner, and founder of The Boston Pledge. A professor at Tufts University and alumnus of MIT and IIT Kharagpur, he integrates Eastern and Western thought in leadership and innovation. He helped establish the Academy of Leadership at IIT Kharagpur and advises global leaders across business, government, and academia.",
    image: `${IMG_BASE}/2025/08/psg_thumbnail.png`,
    linkedin: "https://www.linkedin.com/in/partha-ghosh-820b4a/",
  },
  {
    id: "jahangir-sultan",
    name: "Dr. Jahangir Sultan",
    role: "Founding Member & Officer",
    bio: "Dr. Jahangir Sultan is Chair of the Finance Department at Bentley University, Edward F. Gibbons Professor, and Founding Director of the pioneering Trading Room inaugurated by Peter Lynch. A widely published finance scholar and Bentley’s 1999 Scholar of the Year, he serves on the Journal of Sustainable Finance & Accounting editorial board and co-edits works on Islamic finance and cybersecurity.",
    image: `${IMG_BASE}/2025/08/dr_jahangir.png`,
    linkedin: "https://www.linkedin.com/in/jahangir-sultan-aa55a24/",
  },
  {
    id: "vijay-narang",
    name: "Vijay Narang",
    role: "Director Strategic Initiatives",
    bio: "Vijay Narang is an IIT Kharagpur alumnus with over 40 years of leadership at GEC, IBM, ITC, and Toast Inc. He later transitioned into business intelligence and global operations. Since 2007, he has served as Co-Treasurer and Director of The Boston Pledge, contributing to nonprofit leadership and Vision Aid, blending corporate experience with a strong commitment to social impact.",
    image: `${IMG_BASE}/2025/08/VijayNarang_new-4.png`,
    linkedin: "https://www.linkedin.com/in/vijay-narang-52b4ab5",
  },
  {
    id: "john-gonsalves",
    name: "John Gonsalves",
    role: "Advisor Branding & Goodwill",
    bio: "John Gonsalves, an IIT Madras alumnus, has over 20 years of experience in strategy and operations management consulting. He later transitioned into global sales and solutions leadership roles with major IT consulting firms. With a strong foundation in engineering and business, he brings deep expertise in aligning technology solutions with enterprise strategy across diverse global markets.",
    image: `${IMG_BASE}/2025/08/JohnGonsalves.png`,
    linkedin: "https://www.linkedin.com/in/john-gonsalves-79841/",
  },
  {
    id: "shalini-datta",
    name: "Dr. Shalini Datta",
    role: "Leader Rural Development",
    bio: "Shalini Datta is a cancer biologist and Assistant Professor at the John C. Martin Centre in Kolkata. Trained at INSERM and Johns Hopkins, she researches non-invasive cancer diagnostics. With The Boston Pledge’s support, she founded Mind Hunt to promote science in Bengal and leads rural outreach in health and sanitation, including the Suchita initiative for tribal communities.",
    image: `${IMG_BASE}/2024/08/thumbnail_shalini_2.jpg`,
    linkedin: "https://www.linkedin.com/in/shalini-datta-phd-56786768/",
  },
  {
    id: "madhusudan-chakraborty",
    name: "Madhusudan Chakraborty",
    role: "Senior Advisor",
    bio: "Founding Director of IIT Bhubaneswar and former Professor at IIT Kharagpur, Prof. Chakraborty is a renowned academic leader in metallurgy. He has held key roles including Vice Chancellor of ADAMAS University and Acting Director at IIT Kharagpur. With 200+ publications and global teaching experience, he was honored as Best Metallurgist by the Government of India and continues to serve various academic and scientific bodies.",
    image: `${IMG_BASE}/2025/08/thumbnail_MC_Photo.jpg`,
  },
  {
    id: "puran-dang",
    name: "Puran Dang",
    role: "Senior Advisor",
    bio: "Puran Dang, a senior member of The Boston Pledge, is a respected leader in cultural, entrepreneurial, and humanitarian initiatives. He holds degrees from IIT, Delhi University, and an MBA, and has been a guiding force in promoting global ethics, leadership, and community service. His lifelong contributions span across education, business, and social impact in India and the U.S.",
    image: `${IMG_BASE}/2024/09/purandang-1.jpg`,
    linkedin: "https://www.linkedin.com/in/puran-dang-21300110a/",
  },
  {
    id: "lawrence-kaufman",
    name: "Dr. Lawrence Kaufman",
    role: "Senior Advisor",
    bio: "Dr. Kaufman is a seasoned business executive with a proven track record as CEO, COO, and board director across a wide range of technology-based companies, both public and private. With deep expertise in strategy, innovation, and organizational leadership, he has played a key role in scaling businesses, driving growth, and guiding transformative initiatives in dynamic, tech-driven environments.",
    image: `${IMG_BASE}/2024/08/Kaufman.jpg`,
    linkedin: "https://www.linkedin.com/in/lawrence-kaufman-79b76/",
  },
  {
    id: "ujjal-sarkar",
    name: "Dr. Ujjal Sarkar",
    role: "Member",
    bio: "Dr. Ujjal Sarkar, a former MIT researcher and current scientist at AbbVie DMPK, is an elected Councilor of the American Chemical Society (ACS). He co-founded Bengal Boston Bridge, an initiative that blends arts and sciences to foster cultural exchange and innovation. His work bridges scientific research, community leadership, and interdisciplinary collaboration across continents and disciplines.",
    image: `${IMG_BASE}/2024/08/Ujjal_headshot_AbbVie-1.png`,
    linkedin: "https://www.linkedin.com/in/ujjalsarkar/",
  },
  {
    id: "santosh-mukherjee",
    name: "Dr. Santosh Mukherjee",
    role: "Member",
    bio: "Dr. Santosh Mukherjee, CEO of Santech Global, is a renowned digital scientist and semiconductor innovator. With a rich background as a research guide, professor, and policy advisor, he actively contributes to both U.S. and India Chip Missions. His expertise bridges technology development, academic mentorship, and global collaboration in advancing semiconductor innovation and digital transformation.",
    image: `${IMG_BASE}/2024/08/72E64755-7CC1-47BD-BECC-BA4D904C9D3D-1.png`,
    linkedin: "https://www.linkedin.com/in/drsantoshmukherjeescientist/",
  },
  {
    id: "sanjay-mazumder",
    name: "Sanjay Mazumder",
    role: "Member",
    bio: "Sanjay Mazumder is a seasoned tech leader with nearly 30 years of experience in innovation and entrepreneurship. He founded startups like EdgeQBit, aiming to democratize technology through affordable, accessible AI solutions. His work bridges advanced computing with real-world impact, combining deep technical expertise with a commitment to inclusive innovation and global technological empowerment.",
    image: `${IMG_BASE}/2024/08/sanjay-1.jpg`,
  },
  {
    id: "santanu-sengupta",
    name: "Santanu Sengupta",
    role: "Member",
    bio: "Santanu Sengupta is Head of Data and AI at Nomura Holdings and a recognized innovation leader. With expertise spanning AI, technology policy, and digital transformation, he is also a sought-after speaker on responsible tech and leadership. His work bridges cutting-edge data strategy with global financial services and thought leadership in the evolving AI landscape.",
    image: `${IMG_BASE}/2024/08/Santanu-1.jpg`,
  },
  {
    id: "xixian-zhou",
    name: "Xixian Zhou",
    role: "Member",
    bio: "Xixian Zhou is currently a master’s student in Economics at Tufts University. Her research interests lie in development economics. She has collaborated with organizations across academic and private sectors, contributing to research and analysis on economic growth, development, and sustainability. Her academic and professional experience combines quantitative methods with policy-oriented perspectives on inclusive development.",
    image: `${IMG_BASE}/2025/11/xixianzhou.png`,
  },
  {
    id: "prabal-dey",
    name: "Prabal Dey",
    role: "IT Partner",
    bio: "Prabal Dey is a web and mobile engineer turned growth strategist, leading social media at Emcee IT Solutions. A systems thinker with expertise in UX, software architecture, and AI-driven marketing, he blends product thinking with storytelling to build communities and measurable outcomes. He mentors teams, shapes brand narratives, and ships high-conversion digital experiences.",
    image: `${IMG_BASE}/2025/07/prabaldey-2.webp`,
    linkedin: "https://www.linkedin.com/in/prabaldey/",
  },
  {
    id: "diana-petrenko",
    name: "Diana Petrenko",
    role: "Global Alliances & PR Strategy",
    bio: "Diana Petrenko is a seasoned digital marketing and communications leader with over a decade of experience building global brand narratives and high-impact public relations strategies. Her expertise spans growth marketing, integrated communications, and audience-centric campaign execution across international markets. Diana holds an MSc in Finance from Warwick Business School, University of Warwick, bringing strong analytical rigor to her creative leadership. She has consistently driven visibility, engagement, and reputation-building for mission-led initiatives and global platforms. Her work bridges strategy, storytelling, and execution to amplify purpose-driven organizations. At Boston Pledge, Diana supports digital presence and public engagement to strengthen the platform’s global voice and influence.",
    image: `${IMG_BASE}/2026/01/1000006839.jpg`,
    linkedin: "https://www.linkedin.com/in/diana-petrenko-a30a4619/",
  },
  {
    id: "sumit-duggal",
    name: "Sumit Duggal",
    role: "Technology & Indic Knowledge Systems",
    bio: "Driven by a deep curiosity about how technology, institutions, and culture shape human evolution, Sumit Duggal is a technology entrepreneur, systems thinker, and builder of public-purpose digital platforms. He works at the intersection of Digital Public Infrastructure, AI, asymmetric foundation models, and business intelligence. His focus lies in weaving timeless Indic wisdom with frontier innovation, ensuring intelligent systems remain grounded in human dignity, transparency, and shared prosperity. Sumit brings a founder’s bias for execution, a strategist’s rigor in governance and scale, and a collaborator’s instinct for cross-domain partnerships. He holds a B.E. in Mechanical Engineering from Delhi College of Engineering and a specialization in European Design Systems at IED, Italy. He actively contributes to initiatives that align ethics with innovation and translate technological possibility into inclusive, real-world impact.",
    image: `${IMG_BASE}/2026/01/SD.png`,
    linkedin: "https://www.linkedin.com/in/duggal01/",
  },
  {
    id: "iqbal-rattan-mehra",
    name: "Iqbal Rattan Mehra",
    role: "Social Media & Marketing Strategy",
    bio: "Iqbal Rattan Mehra is an accomplished entrepreneur and digital media leader with cross-sector experience spanning healthcare, hospitality, real estate, and technology consulting. A graduate of The Wharton School with a double major in Finance and Information Systems, he brings a strong analytical foundation and global business perspective. Iqbal founded SVAASA Pure Living, pioneering early wellness retail in India and introducing leading international nutraceutical brands to the market. He also established an award-winning heritage wellness resort and has advised on high-value real estate and strategic transactions. His career began in information systems consulting in the United States, working on financial and banking solutions. As Advisor – Social Media at Boston Pledge, he focuses on purposeful storytelling, digital strategy, and youth-centric leadership narratives.",
    image: `${IMG_BASE}/2025/07/IMG_4205.jpeg`,
  },
  {
    id: "ying-li",
    name: "Ying Li",
    role: "Member",
    bio: "Ying Li is a seasoned strategy consultant trusted by Fortune 500 leaders across North America, Europe, and Asia. She drives high-impact, multi-market initiatives for C-suite and board executives, integrating advanced analytics, proprietary frameworks, and cross-functional execution to achieve measurable growth and efficiency. Fluent in four languages, Ying bridges global expertise with local realities, ensuring that every strategy delivers sustainable options. She holds both a Bachelor of Arts and a Master of Arts in Economics from Boston University.",
    image: `${IMG_BASE}/2025/07/yingli_headshot.jpg`,
    linkedin: "https://www.linkedin.com/in/ying-li-38b3a63b/",
  },
];