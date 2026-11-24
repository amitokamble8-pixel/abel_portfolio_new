/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ------------------------------------------------------------------
   LINKS
   ------------------------------------------------------------------
   Every section below supports links. Fill one in and it appears on the
   site; leave it "" or [] and nothing renders. Nothing breaks either way.

     link    ""  →  nothing is clickable
             "/work/slug"           internal route (uses the router)
             "https://…"            external (opens in a new tab)
             "/certificates/x.pdf"  a file in /public

             On a card, this makes the WHOLE card clickable.
             On an award or article row, the whole row.

     links   []  →  no link row
             [{ label: "Watch the session", href: "https://…" }]

             A row of one or more named links at the bottom of the item.
             Use this when something has several destinations, or when
             the label matters ("Certificate", "Paper", "Recording").

   `link` and `links` can both be used on the same item — the card-wide
   link sits underneath, the named links sit on top and win the click.
   ================================================================== */

export const PROFILE = {
  first: "Abel George",
  last: "Mathew",
  fullName: "Abel George Mathew",
  tagline: "Olympiad Mathematician • AI & Theoretical CS Researcher",
  location: "Bangalore, Karnataka, India",
  email: "",
  bio: [
    "I'm a Grade 11 student at Creative School, Bangalore, with a deep interest in proof-based mathematics, Olympiad problem solving, and theoretical computer science. My academic journey has been shaped by curiosity, rigorous mathematical thinking, and a passion for solving complex problems.",
    "Beyond competitions, I actively explore AI-driven mathematical reasoning, mentorship, and research initiatives that combine human creativity with computational systems. Through teaching, outreach, and collaborative projects, I aim to make advanced mathematics more accessible while continuing to push the boundaries of mathematical exploration.",
    "My goal is to explore the frontier of mathematical reasoning and contribute to systems that combine rigorous human thought with emerging artificial intelligence — applying analytical thinking and computational innovation to problems at the intersection of mathematics, technology, and intelligent systems.",
  ],
  socials: {
    github: "https://github.com/zvfrozel",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/abel-george-mathew/",
    codeforces: "",
    youtube: "https://www.youtube.com/live/YmbOZL1HZ2E?si=epAW1Ky9cNEuT-sB",
    imo: "https://www.imo-official.org/results/contestant/35510/",
    wespa: "https://wespa.xerafin.net/player.html?id=37382",
    fide: "https://ratings.fide.com/profile/33332240",
    twitter: "",
  },
  cv: "", // NOTE: empty. The Hero's "View My Resume" button is now hidden
  //        while this is blank — see pages.jsx. Add the PDF to /public
  //        and set this to "/resume.pdf" to bring the button back.
  photo: "/photo.jpg",
  aboutPhoto: "/aboutPhoto.jpg",

};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Research", to: "/work" },
      { label: "Projects", to: "/projects" },
      { label: "Articles", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  // (this entry previously declared `label` twice — the duplicate is removed)
  { label: "Leadership & Teaching", to: "/volunteering" },

  { label: "Sports", to: "/sports" },
];

/* ---- Research & engagement (renders as "Work Experience" cards) ----
   The whole card already links to /work/{slug}. Use `links` for anything
   extra: a recording, a write-up, a certificate. ---- */

export const EXPERIENCE = [
  {
  slug: "rmo-2026-live-paper-solving",
  role: "Instructor & Problem Solver",
  org: "RMO 2026 Live Paper Solving",
  logo: "",
  location: "Online",
  dates: "2026",
  meta: "2026 · Online · Mathematical Olympiad",
  badge: "Featured",
  desc: "Conducted a live RMO 2026 paper-solving session, demonstrating advanced mathematical reasoning and Olympiad problem-solving techniques.",
  bullets: [
    "Solved Regional Mathematical Olympiad (RMO) 2026 problems through a live instructional session",
    "Demonstrated advanced problem-solving approaches and mathematical reasoning",
    "Shared insights and strategies for tackling challenging Olympiad-level mathematics",
  ],
  tags: ["Olympiad Mathematics", "RMO", "Problem Solving", "Mathematical Reasoning"],
  links: [
    { label: "Watch Session", href: "https://www.youtube.com/live/YmbOZL1HZ2E" }
  ],
  featured: true,
},
  {
    slug: "mercor-frontier-math",
    role: "Research & Advanced Engagement",
    org: "IMO–Frontier Math Project (Mercor)",
    logo: "/logos/mercor.jfif",
    location: "Remote",
    dates: "Nov 2025 – Feb 2026",
    meta: "Nov 2025 – Feb 2026 · Remote ·",
    badge: "Contract",
    desc: "Recruited to contribute to cutting-edge research in AI-driven mathematical problem solving, working alongside top Olympiad talent globally.",
    bullets: [
      "Creating novel Olympiad-style problems to train advanced mathematical AI",
      "Advancing problem design for machine learning in high-level mathematics",
      "Bridging human mathematical creativity with artificial intelligence systems",
    ],
    tags: ["AI for Mathematics", "Problem Design", "Olympiad Mathematics"],
    links: [], // e.g. { label: "Project page", href: "https://…" }
    featured: true,
  },
  {
    slug: "sophie-fellowship",
    role: "Organiser & Instructor",
    org: "Sophie Fellowship",
    logo: "/logos/sophie-fellowship.avif",
    location: "India · Remote",
    dates: "2024 – Present",
    meta: "2024 – Present · India · Remote ·",
    badge: "Student-led",
    desc: "A student-led initiative focused on training Olympiad aspirants through structured mentorship and problem-solving sessions.",
    bullets: [
      "Mentored ~25 students annually",
      "Designed curriculum and lecture series",
      "Built a peer-driven learning ecosystem",
    ],
    tags: ["Teaching", "Mentorship", "Curriculum Design"],
    links: [],
    featured: true,
  },
  {
    slug: "inmotc-guest-lecturer",
    role: "Guest Lecturer",
    org: "Karnataka INMOTC 2025",
    logo: "/logos/inmo.avif",
    location: "Karnataka, India",
    dates: "2025",
    meta: "2025 · Karnataka, India ·",
    badge: "Invited",
    desc: "Delivered advanced sessions to top national-level Olympiad students at the Indian National Mathematical Olympiad Training Camp.",
    bullets: [
      "Taught advanced problem-solving techniques to INMO-qualified students",
      "Covered proof strategies across combinatorics and number theory",
    ],
    tags: ["Teaching", "Olympiad Mathematics"],
    links: [],
    featured: true,
  },
  {
    slug: "deva-matha-college",
    role: "Guest Speaker",
    org: "Deva Matha College, Kuravilangad",
    logo: "/logos/deva-matha.avif",
    location: "Kerala, India",
    dates: "2025",
    meta: "2025 · Kerala, India ·",
    badge: "Invited",
    desc: "Conducted lectures for combined batches of undergraduate and postgraduate mathematics students within the Department of Mathematics.",
    bullets: [
      "Engaged with higher-level academic audiences beyond school level",
      "Presented Olympiad approaches to university mathematics students",
    ],
    tags: ["Teaching", "Outreach"],
    links: [],
    featured: false,
  },
  {
    slug: "vedic-mathrix-2024",
    role: "Instructor",
    org: "Vedic Mathrix Camp 2024",
    logo: "/logos/vedic-mathrix.avif",
    location: "India",
    dates: "2024",
    meta: "2024 · India ·",
    badge: "Instructor",
    desc: "Facilitated a hands-on learning session as part of an initiative by the Raising a Mathematician Foundation, focusing on interactive and conceptual mathematical exploration.",
    bullets: [
      "Led interactive sessions on conceptual mathematical exploration",
      "Contributed to a foundation-run outreach programme",
    ],
    tags: ["Teaching", "Outreach"],
    links: [],
    featured: false,
  },

  {
    slug: "online-math-club",
    role: "Staff & Instructor",
    org: "Online Math Club",
    logo: "",
    location: "India · Remote",
    dates: "Present",
    meta: "Present · India · Remote ·",
    badge: "Staff",
    desc: "Staff member and instructor, leading live problem-solving sessions for students across India covering mathematical thinking and Olympiad preparation.",
    bullets: [
      "Leads live problem-solving sessions for students across India",
      "Covers mathematical thinking and Olympiad preparation",
    ],
    tags: ["Teaching", "Olympiad Mathematics"],
    links: [],
    featured: false,
  },
];

/* ---- Projects ----
   `link` makes the whole card clickable. `code` and `live` still render
   as the small GitHub / external icon buttons in the card footer, and
   `links` adds a labelled row — use whichever fits. ---- */

export const PROJECTS = [
  {
    name: "Rubik's Cube Group Theory Algorithm",
    org: "Personal Project",
    meta: "Grade 8",
    desc: "Applied group theory to the Rubik's Cube, building a solving algorithm on the mathematical structure underlying the puzzle's permutations.",
    tags: ["Group Theory", "Algorithms", "Mathematics"],
    link: "",
    code: "", // GitHub icon button
    live: "", // external icon button
    links: [], // e.g. { label: "Write-up", href: "https://…" }
    featured: true,
  },
  {
    name: "Vedic Multiplication Method",
    org: "Personal Project",
    meta: "Grade 7",
    desc: "Studied and implemented Vedic multiplication techniques, comparing their efficiency against conventional long multiplication.",
    tags: ["Mathematics", "Number Theory", "Algorithms"],
    link: "",
    code: "",
    live: "",
    links: [],
    featured: true,
  },
  {
    name: "Habit Fitness Website",
    org: "Personal Project",
    meta: "Grade 7",
    desc: "Built a habit and fitness tracking website using Django, covering both the backend models and the user-facing interface.",
    tags: ["Django", "Python", "Full-Stack Development"],
    link: "",
    code: "", // the GitHub repo would fit well here
    live: "",
    links: [],
    featured: true,
  },
];

/* ---- Achievements ----
   `link` makes the whole award card clickable. `links` adds named links
   below the detail — handy for "Certificate" plus "Results page". ---- */

export const AWARDS = [
  {
    icon: "🥇",
    title: "International Mathematical Olympiad (IMO) 2026",
    meta: "2026",
    detail: "Gold Medal. Global Rank 17, India Rank 1.",
    link: "https://www.imo-official.org/results/contestant/35510/",
    links: [],
    featured: true,
  },
  {
    icon: "🥈",
    title: "International Mathematical Olympiad (IMO) 2025",
    meta: "2025",
    detail: "Silver Medal, Global Rank 78, competing at Sunshine Coast, Australia.",
    link: "https://www.imo-official.org/results/contestant/35510/",
    links: [],
    featured: true,
  },
  {
    icon: "🥇",
    title: "Asian Pacific Mathematical Olympiad (APMO) 2026",
    meta: "2026",
    detail: "Gold Medal, ranking first in India.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🥉",
    title: "Asian Pacific Mathematical Olympiad (APMO) 2025",
    meta: "2025",
    detail: "Bronze Medal, ranking in the top 5 in India.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🏅",
    title: "Indian National Mathematical Olympiad (INMO)",
    meta: "2023 – 2026",
    detail: "All India Rank 1 in 2025; perfect score and top 4 nationwide in 2024; 4-time INMO awardee.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "💻",
    title: "Indian National Olympiad in Informatics (INOI) 2024",
    meta: "2024",
    detail: "Bronze Medal.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🏆",
    title: "Cambridge Outstanding Learner Award",
    meta: "IGCSE",
    detail: "Awarded by Cambridge Assessment International Education for exceptional performance in IGCSE Combined Sciences.",
    link: "", // e.g. "/certificates/cambridge-outstanding-learner.pdf"
    links: [],
    featured: false,
  },
  {
    icon: "🔤",
    title: "World Youth Scrabble Championship",
    meta: "Malaysia, 2025",
    detail: "Represented the Indian youth scrabble team. WESPA rating 1613.",
    link: "https://wespa.xerafin.net/player.html?id=37382",
    links: [],
    featured: false,
  },
];

/* ---- Research interests ---- */

export const ARTICLES = [
  {
    title: "Olympiad Mathematics",
    outlet: "Advanced problem solving, proof strategies, combinatorics, inequalities, and number theory",
    link: "",
    links: [],
  },
  {
    title: "Artificial Intelligence for Mathematics",
    outlet: "Symbolic reasoning systems, theorem exploration, and AI-assisted mathematical discovery",
    link: "",
    links: [],
  },
  {
    title: "Theoretical Computer Science",
    outlet: "Algorithms, complexity, abstraction, and computational structures",
    link: "",
    links: [],
  },
  {
    title: "Mathematical Logic & Formal Systems",
    outlet: "Formal reasoning pathways, proof systems, and foundational mathematical structures",
    link: "",
    links: [],
  },
];

/* ---- Leadership, teaching & activities ----
   Stats take a single `link` (the number becomes clickable).
   Orgs take `link` for the whole card and `links` for named links. ---- */

export const VOLUNTEER = {
  stats: [
    { value: "25+", label: "Students Mentored Yearly", link: "" },
    { value: "3+", label: "Guest Lectures", link: "" },
    { value: "2+", label: "Years Teaching", link: "" },
  ],
  orgs: [
    {
      name: "Sophie Fellowship",
      role: "Organiser & Instructor · Since 2024",
      desc: "A student-led initiative training Olympiad aspirants through structured mentorship and problem-solving sessions. Mentored roughly 25 students a year, designed the curriculum and lecture series, and built a peer-driven learning ecosystem.",
      link: "",
      links: [],
    },
    {
      name: "Karnataka INMOTC 2025",
      role: "Guest Lecturer",
      desc: "Delivered advanced sessions to top national-level Olympiad students at the Indian National Mathematical Olympiad Training Camp.",
      link: "",
      links: [],
    },
    {
      name: "Deva Matha College, Kuravilangad",
      role: "Guest Speaker",
      desc: "Conducted lectures for combined undergraduate and postgraduate batches within the Department of Mathematics.",
      link: "",
      links: [],
    },
    {
      name: "Vedic Mathrix Camp 2024",
      role: "Instructor",
      desc: "Facilitated a hands-on session for the Raising a Mathematician Foundation, focused on interactive and conceptual mathematical exploration.",
      link: "",
      links: [],
    },

    {
      name: "OTIS — Olympiad Training for Individual Study",
      role: "Instructor",
      desc: "Instructor on Evan Chen's OTIS programme, training a cohort of five students through weekly sessions on advanced olympiad material.",
      link: "", // e.g. "https://web.evanchen.cc/otis.html"
      links: [],
    },

  ],
};

/* ---- Sports & strategy ----
   `link` makes the whole card clickable (already used for chess and
   scrabble). `links` adds a labelled row for several destinations. ---- */

export const SPORTS = [
  {
    icon: "🏀",
    name: "Basketball",
    desc: "Served in leadership roles within school basketball initiatives, developing teamwork, communication, and on-court decision making.",
    link: "",
    links: [],
  },
  {
    icon: "🏸",
    name: "Badminton",
    desc: "Actively participated in competitive badminton, strengthening discipline, focus, and consistency through individual performance.",
    link: "",
    links: [],
  },
  {
    icon: "🏅",
    name: "Sports Leadership",
    desc: "Held positions including Sports Captain and Vice Captain, contributing toward team coordination, leadership, and student engagement.",
    link: "",
    links: [],
  },
  {
    icon: "♟️",
    name: "Chess",
    desc: "Exploring structured thinking, long-term planning, and tactical decision making through competitive chess.",
    link: "https://ratings.fide.com/profile/33332240",
    links: [],
  },
  {
    icon: "🔤",
    name: "Scrabble",
    desc: "Represented the Indian youth scrabble team at the World Youth Scrabble Championship, Malaysia 2025. WESPA rating 1613.",
    link: "https://wespa.xerafin.net/player.html?id=37382",
    links: [],
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "C++", "Django"],
  },
  {
    group: "Tools & Technologies",
    items: ["LaTeX", "HTML", "Git"],
  },
  {
    group: "Mathematics",
    items: ["Number Theory", "Combinatorics", "Inequalities", "Proof Strategies", "Mathematical Logic"],
  },
  {
    group: "Academic Interests",
    items: ["Pure Mathematics", "Theoretical Computer Science", "Algorithm Design & Complexity", "Formal Systems"],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/awards" },
  { label: "Research Interests", to: "/publications" },
  { label: "Leadership", to: "/volunteering" },
  { label: "About", to: "/about" },
];

/* Entries with an empty href are filtered out by the Footer. */
export const FOOTER_PROFILES = [
  { label: "IMO Official", href: PROFILE.socials.imo },
  { label: "WESPA Official", href: PROFILE.socials.wespa },
  { label: "FIDE Profile", href: PROFILE.socials.fide },
  { label: "YouTube Video", href: PROFILE.socials.youtube },
];
