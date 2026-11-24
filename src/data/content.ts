// Copy and figures come from the ShARE BITS Pilani pitch deck, the 2024–25 project
// repository, the 2026 orientation deck and the Farcast and Agnikul project documents.

export const site = {
  name: "ShARE BITS Pilani",
  tagline: "Growing change makers",
  motto: "Do Well, Do Good",
  linkedin: "https://www.linkedin.com/company/share-bits-pilani",
  email: "f20230956@pilani.bits-pilani.ac.in", // Krish Agrawal (past President). TODO: replace with the current team's address
  campus: "BITS Pilani, Pilani Campus, Rajasthan 333031",
}

export const nav = [
  { to: "/work", label: "Work" },
  { to: "/network", label: "Network" },
  { to: "/alumni", label: "Alumni" },
  { to: "/bits-pilani", label: "BITS Pilani" },
  { to: "/join", label: "Join" },
]

export const stats = [
  { value: "8+", label: "Years running" },
  { value: "15+", label: "Organisations served" },
  { value: "70+", label: "Consultants trained" },
  { value: "1.11%", label: "Acceptance rate" },
]

export const consultantStats = [
  { value: "1.11%", label: "Acceptance rate", body: "Resume shortlist, a case round and personal interviews. We test problem-solving, creativity, leadership and social outlook." },
  { value: "40+", label: "Hours of training", body: "Built on ShARE's global curriculum and shaped with professional consultancies. Every member gets a mentor." },
  { value: "10+", label: "Disciplines", body: "Computer science, electronics, mechanical, chemical, civil, biology, physics, mathematics, economics and finance." },
  { value: "80+", label: "Alumni", body: "Now at top consultancies, banks, funds and start-ups, or at leading graduate schools." },
]

export type Client = { slug: string; name: string; logo: string; blurb: string; sector: string }

export const clients: Client[] = [
  { slug: "milaap", name: "Milaap", logo: "/clients/milaap.png", sector: "Social impact", blurb: "India's largest crowdfunding platform for medical and social causes." },
  { slug: "vayana", name: "Vayana", logo: "/clients/vayana.png", sector: "Fintech", blurb: "A leading trade finance platform for Indian businesses." },
  { slug: "stringbio", name: "String Bio", logo: "/clients/stringbio.png", sector: "Climate & biotech", blurb: "Turns methane into animal feed and crop inputs." },
  { slug: "raptee", name: "Raptee.HV", logo: "/clients/raptee.png", sector: "Electric mobility", blurb: "Chennai start-up building high-voltage electric motorcycles." },
  { slug: "honor", name: "HONOR", logo: "/clients/honor.png", sector: "Consumer tech", blurb: "Global smartphone and smart-device brand." },
  { slug: "kiko", name: "Kiko", logo: "/clients/kiko.png", sector: "Retail tech", blurb: "Brings local retailers online through ONDC." },
  { slug: "multipl", name: "multipl", logo: "/clients/multipl.png", sector: "Fintech", blurb: "Personal finance app built around saving for what you spend on." },
  { slug: "schbang", name: "Schbang", logo: "/clients/schbang.png", sector: "Marketing", blurb: "Digital agency working with 300+ brands in India and the UK." },
  { slug: "insideiim", name: "InsideIIM", logo: "/clients/insideiim.png", sector: "Ed-tech", blurb: "Career community for India's management students." },
]

export const otherClients = ["Farcast Biosciences", "Agnikul Cosmos", "GPLAN"]

type Wire = "flow" | "deck" | "dash" | "tam" | "journey" | "prd"
export type ServiceArea = { id: string; title: string; summary: string; items: string[]; deliverables: string[]; wire: Wire }

export const services: ServiceArea[] = [
  {
    id: "research", wire: "tam",
    title: "Market research",
    summary: "How big the market is, who is in it and where it is going. The groundwork a decision stands on.",
    items: ["Industry landscapes", "Market sizing and competitor mapping", "Regulation and macro trends", "Customer and segment analysis"],
    deliverables: ["Whitepapers", "Market-size models", "Competitor maps"],
  },
  {
    id: "strategy", wire: "deck",
    title: "Strategy and go-to-market",
    summary: "Where to play and how to win, written as a plan your team can run on Monday.",
    items: ["Go-to-market plans for new products", "Market entry", "Pricing and opportunity sizing", "Ranked partner and investor lists"],
    deliverables: ["GTM playbooks", "Industry one-pagers", "Prospect lists"],
  },
  {
    id: "product", wire: "prd",
    title: "Product and tech",
    summary: "Engineers who can read your stack and your customer in the same meeting.",
    items: ["Product requirements and specs", "Technical feasibility reviews", "AI use-case scoping", "Workflow analysis for B2B products"],
    deliverables: ["PRDs", "Use-case maps", "Working prototypes"],
  },
  {
    id: "data", wire: "dash",
    title: "Data and AI",
    summary: "Clean datasets, models and pipelines, plus the scoring logic to act on them.",
    items: ["Dataset building and enrichment", "ML and LLM pipelines", "Scoring frameworks", "Survey and behavioural analysis"],
    deliverables: ["Verified databases", "Pipelines", "Scoring models"],
  },
  {
    id: "pm", wire: "flow",
    title: "Product management",
    summary: "We take a product workstream from customer journey to page flow, alongside your team.",
    items: ["Customer journey mapping", "Information architecture and page flows", "UX recommendations", "Launch readiness"],
    deliverables: ["Journey maps", "Flow specs", "CX roadmaps"],
  },
]

export const pillars = [
  { title: "Many disciplines, one team", body: "Computer scientists, engineers, biologists, economists and finance students work the same problem. The answer is better for it." },
  { title: "We work with decision-makers", body: "Our briefs come from founders, CFOs, product heads and investors, and our work goes back to them." },
  { title: "Professional output, student cost", body: "Whitepapers, market models, GTM plans and product specs at a price and pace a traditional firm can't offer." },
  { title: "Impact is part of the brief", body: "Do Well, Do Good. We choose work that moves a business forward and leaves its sector better off." },
]

export type CaseStudy = {
  slug: string
  client: string
  logo?: string
  sector: string
  year: string
  tagline: string
  tags: string[]
  headline: string
  context: string
  wire: Wire
  areas: { area: string; title: string; points: string[] }[]
  metrics: { value: string; label: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "vayana", wire: "tam",
    client: "Vayana",
    logo: "/clients/vayana.png",
    sector: "Fintech · Trade finance",
    year: "2024–25",
    tagline: "Ten industries sized. One sales plan.",
    tags: ["Strategy", "Research", "Data"],
    headline: "Getting a leadership team to agree on its ten target industries",
    context: "Vayana wanted a sharper go-to-market for its BilltoPay product. We sized the industries, built the prospect list and showed where AI fits in the product.",
    metrics: [
      { value: "10", label: "industries sized, each with a fit verdict" },
      { value: "400+", label: "enterprise prospects verified" },
      { value: "3", label: "teams using our one-pagers: sales, product, board" },
    ],
    areas: [
      { area: "Strategy", title: "Which industries first, and why", points: ["Sized the market in each of the ten target industries.", "Wrote a one-pager per industry: workflows, bill volumes, barriers to adoption and a fit or no-fit verdict.", "Mapped buying committees so sales knew who to approach, and in what order."] },
      { area: "Product", title: "From industry workflows to features", points: ["Turned each industry's workflow into product use-cases, including audit support and utilities.", "Scoped practical uses of AI: invoice extraction, credit signals and dispute triage.", "Ranked the features that matter across industries."] },
      { area: "Research & data", title: "A prospect list sales could trust", points: ["Built a verified database of 400+ enterprises from LinkedIn, Apollo.io and Crunchbase.", "Tagged each account with fit signals and the right contact.", "Condensed the research into one-pagers now used by sales, product and the board."] },
    ],
  },
  {
    slug: "farcast", wire: "prd",
    client: "Farcast Biosciences",
    logo: "/clients/farcast.png",
    sector: "Biotech · AI in oncology research",
    year: "2026",
    tagline: "Five lab assays. One readable report.",
    tags: ["Product", "AI", "Biotech"],
    headline: "Turning five separate lab datasets into one report a scientist can read in minutes",
    context: "After every drug experiment, Farcast's platform produces five kinds of assay data, and each was analysed separately by hand. The most valuable signals only show up when all five are read together. We designed the product that does that.",
    metrics: [
      { value: "5", label: "assay types read together in one run" },
      { value: "<5 min", label: "target time from upload to report" },
      { value: "3+", label: "cross-assay patterns to surface per experiment" },
    ],
    areas: [
      { area: "Product", title: "A simpler product than the one first asked for", points: ["The original brief called for a statistical engine, a literature search system and a web app, all built from scratch.", "We proposed using a large language model as the analytical core, which cut the build to three small components.", "Wrote the full product requirements document: goals, success measures, limits and what the tool is not."] },
      { area: "AI & engineering", title: "Three parts with clear boundaries", points: ["A data formatter that checks and prepares the five files.", "A prompt system that tells the model what to analyse and how to structure its answer.", "A report renderer that produces a dashboard and a downloadable PDF."] },
      { area: "Research", title: "Built so scientists can trust it", points: ["Every finding is tagged with the data or the published paper it came from.", "Designed for a scientist with no coding background to run alone.", "Nothing is stored between runs, and outputs are for research use only."] },
    ],
  },
  {
    slug: "agnikul", wire: "dash",
    client: "Agnikul Cosmos",
    logo: "/clients/agnikul.png",
    sector: "Space tech · Remote sensing",
    year: "2025–26",
    tagline: "A launch market sized. 14 million trees counted.",
    tags: ["Strategy", "Machine learning", "Geospatial"],
    headline: "Sizing the launch market, and counting trees from orbit",
    context: "Agnikul builds launch vehicles in Chennai. We ran two pilots with them: a market-size estimate for their launch and satellite services, and an open-source method for counting trees from satellite images.",
    metrics: [
      { value: "2.7M+", label: "hectares covered" },
      { value: "14M+", label: "trees estimated" },
      { value: "18", label: "spectral bands used" },
    ],
    areas: [
      { area: "Strategy", title: "How big is the market for small launches?", points: ["Defined the customer segments: small-satellite operators, research institutions and commercial payload customers.", "Benchmarked the industry and the competition.", "Built a market-size model with its method and assumptions stated, plus an executive summary of the best opportunities."] },
      { area: "Machine learning", title: "Counting trees with radar and optical images", points: ["Built a pipeline on Sentinel-1 radar and Sentinel-2 optical imagery.", "Cleaned the images first: georeferencing, atmospheric correction, speckle filtering and cloud masking.", "Estimated tree density and classified vegetation across the study area."] },
      { area: "Research & data", title: "Open and repeatable", points: ["Listed every dataset and processing step so others can reuse the method.", "Checked results against available reference data.", "Documented the method, first results and what to do next."] },
    ],
  },
  {
    slug: "milaap", wire: "journey",
    client: "Milaap",
    logo: "/clients/milaap.png",
    sector: "Social impact · Healthcare",
    year: "2024–25",
    tagline: "Clearer choices for patients far from home.",
    tags: ["Strategy", "Product", "Data"],
    headline: "Helping patients decide where to travel for treatment",
    context: "Milaap set out to build a medical travel platform for patients and the family members who travel with them. We shaped the strategy, the product and the data behind it.",
    metrics: [
      { value: "+30%", label: "clearer information in pilot tests" },
      { value: "−50%", label: "misinformation, through verification" },
      { value: "80%", label: "data completeness, up from 55%" },
    ],
    areas: [
      { area: "Strategy", title: "Where trust breaks down", points: ["Set the framework for a platform covering seven categories of information.", "Mapped the journey of patients and attendants across 25+ touchpoints.", "Recommended where to build trust first."] },
      { area: "Product", title: "A product for stressful moments", points: ["Designed page flows for hospitals, hotels and essential services, cutting navigation loops by 25%.", "Designed how patients and partners submit and verify on-ground information.", "Advised on navigation and category clarity."] },
      { area: "Research & data", title: "Information people can rely on", points: ["Built data models for hospital profiles, nearby stays and support services.", "Designed verification steps that halved misinformation.", "Raised data completeness from 55% to 80%."] },
    ],
  },
  {
    slug: "stringbio", wire: "deck",
    client: "String Bio",
    logo: "/clients/stringbio.png",
    sector: "Climate tech · Biotech",
    year: "2024–25",
    tagline: "Which carbon products to build, and who buys the credits.",
    tags: ["Strategy", "Research"],
    headline: "Choosing which carbon-capture products to build, and how to sell the credits",
    context: "String Bio turns methane into animal feed and crop inputs. We helped the founder decide which carbon-capture products to pursue and how carbon credits fit the business.",
    metrics: [
      { value: "2–3", label: "product lines prioritised, with go/no-go criteria" },
      { value: "5", label: "buyer sectors mapped for carbon credits" },
      { value: "2", label: "carbon registries compared on cost and price" },
    ],
    areas: [
      { area: "Strategy", title: "A whitepaper the R&D team could act on", points: ["Reviewed carbon capture and use worldwide: processes, maturity, energy and cost.", "Narrowed the options to two or three product lines with go/no-go criteria.", "Outlined how to earn revenue from methane capture in voluntary and compliance markets."] },
      { area: "Product", title: "New products from existing waste", points: ["Proposed products such as biodegradable farm mulch made from current inputs and waste.", "Assessed each route for space, cost and energy.", "Listed what each needs upstream, and the risks of scaling."] },
      { area: "Research & data", title: "Who buys, and on which registry", points: ["Shortlisted corporate buyers and investors by sustainability record.", "Mapped buyers across oil and gas, power, chemicals, consumer goods and agriculture.", "Compared Verra and Gold Standard on method, certification cost and price."] },
    ],
  },
  {
    slug: "gplan", wire: "flow",
    client: "GPLAN",
    logo: "/clients/gplan.png",
    sector: "Architecture · Generative design",
    year: "2025–26",
    tagline: "Floor plans that score themselves.",
    tags: ["Product", "Tech"],
    headline: "Scoring generated floor plans so architects can iterate faster",
    context: "GPLAN generates layouts for irregular plots from a list of rooms, which rooms must sit together, and how people move between them. It produces many options. We built the way to compare them.",
    metrics: [
      { value: "3", label: "measures per layout: space use, adjacency, constraints" },
    ],
    areas: [
      { area: "Product", title: "From many options to a ranked few", points: ["Defined what makes one generated layout better than another.", "Turned that into a score an architect can read at a glance."] },
      { area: "Tech", title: "A score for every layout", points: ["Scored each option on how well it uses the plot, whether the right rooms are adjacent, and whether it meets the constraints.", "Made iteration faster: change the brief, regenerate, compare the scores."] },
    ],
  },
  {
    slug: "raptee", wire: "flow",
    client: "Raptee.HV",
    logo: "/clients/raptee.png",
    sector: "Electric mobility",
    year: "2024–25",
    tagline: "Launch-ready before the first bike shipped.",
    tags: ["Strategy", "Product", "Research"],
    headline: "Getting customers ready for a new kind of electric motorcycle",
    context: "Raptee.HV was about to launch its high-voltage electric motorcycle. We studied what would stop early buyers, and how to remove it.",
    metrics: [
      { value: "20+", label: "customer touchpoints mapped" },
      { value: "10+", label: "changes recommended" },
      { value: "+40%", label: "projected launch readiness" },
    ],
    areas: [
      { area: "Strategy", title: "What stops a first-time EV buyer", points: ["Mapped the customer experience across 20+ touchpoints.", "Recommended 10+ changes, projected to lift launch readiness by 40%.", "Covered both the website and the showroom."] },
      { area: "Product", title: "A smoother path to purchase", points: ["Found the practical and psychological barriers to buying early.", "Delivered a new website flow and a better in-store experience.", "Matched product features to what riders expect."] },
      { area: "Research & data", title: "What young riders want", points: ["Surveyed young buyers on the website, showrooms and features.", "Drew out what drives acceptance of a new product."] },
    ],
  },
]

export const process = [
  { step: "01", title: "Scope", body: "A 30-minute call. We ask what you're deciding, what you already know and what a good answer looks like." },
  { step: "02", title: "Staff", body: "A short proposal with scope, timeline and deliverables, and a team picked for your sector. NDAs on request." },
  { step: "03", title: "Sprint", body: "Weekly check-ins, so you see the thinking as it forms and can redirect it early." },
  { step: "04", title: "Ship", body: "Work your leadership can act on. Every deliverable is peer-reviewed before it reaches you." },
]

export const transform = [
  { n: "01", title: "Question", body: "Every project starts as a question someone senior can't yet answer." },
  { n: "02", title: "Structure", body: "We break it into parts that can be researched, sized and tested." },
  { n: "03", title: "Decision", body: "You get an answer you can defend, and the evidence behind it." },
]

export const globalClients = [
  "EDF", "Enedis", "Saft (TotalEnergies)", "Keolis", "Saint-Gobain", "Eranove",
  "Sofina", "General Electric", "Renault", "Faurecia", "BNP Paribas", "Michelin",
]

export const recruitment = {
  faqs: [
    { q: "Who can apply?", a: "Any student on the Pilani campus, from any branch. A mix of backgrounds is the point." },
    { q: "Do I need consulting experience?", a: "No. We look for structured thinking, curiosity and drive. Training covers the rest." },
    { q: "When is recruitment?", a: "At the start of the semester. It begins with an orientation session and runs for four weeks." },
    { q: "How much time does it take?", a: "A few focused hours a week during a project, planned around exams." },
    { q: "What will I work on?", a: "Live briefs in strategy, product, tech and data for start-ups and established companies." },
  ],
}

export const clientFaqs = [
  { q: "What does a project cost?", a: "Far less than a traditional firm. We scope each project to your stage and budget. Tell us the problem and we'll suggest options." },
  { q: "How long does a project run?", a: "Most run six to ten weeks with weekly check-ins. Shorter research sprints are possible." },
  { q: "How do you handle confidentiality?", a: "We sign NDAs on request and share work only with the project team. Every deliverable is reviewed internally before you see it." },
  { q: "Who do you work with?", a: "Start-ups from seed to growth stage, mission-led organisations and established companies, mostly in AI, deep tech, climate and fintech." },
]

// ——— From the 2026 orientation deck ———

export const shareGlobal = {
  definition: "ShARE is a start-up at the crossroads of education and consulting. Its mission is Do Well, Do Good.",
  aim: "ShARE exists to change how companies work, and to raise leaders who do well for themselves and good for the world.",
  flp: "Its Future Leaders Programme trains university students worldwide, and connects companies with the leaders it produces.",
  quote: { text: "Do Well Do Good, the only way to make a change today.", by: "Tony Blair", role: "Global Mentor of ShARE · Former Prime Minister, United Kingdom" },
  stats: [
    { value: "20", label: "Countries" },
    { value: "50", label: "Universities" },
    { value: "2,300+", label: "Students" },
    { value: "3,000+", label: "Alumni" },
  ],
  chapters: [
    "BITS Pilani", "BITS Goa", "IIFT", "IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "IIM Indore", "IIM Kozhikode",
    "IIM Lucknow", "IIT Bombay", "IIT Bhubaneswar", "IIT Delhi", "IIT Kanpur", "IIT Kharagpur", "IIT Patna", "IIT Madras",
    "IIT Roorkee", "IIT Ropar", "IIT (BHU) Varanasi", "SRCC New Delhi", "St. Stephen's", "TISS",
  ],
}

export const verticals = [
  { id: "consulting", title: "Strategy consulting", body: "Market sizing, go-to-market, pricing and research on questions a leadership team needs answered.", tags: ["Market sizing", "GTM", "Pricing"] },
  { id: "tech", title: "Product and tech", body: "Business problems solved with technology, data and AI. We build what the client's team can run.", tags: ["AI workflows", "ML pipelines", "Automation"] },
  { id: "pm", title: "Product management", body: "User research, prioritisation and launches, working across tech, business and design.", tags: ["User research", "Prioritisation", "Metrics"] },
]

export const toolkit = ["CIRCLES", "RICE", "AARRR", "Root cause analysis", "TAM · SAM · SOM", "Guesstimates", "Issue trees", "MECE", "Journey mapping", "Signal scoring"]

export const principles = [
  { n: "01", title: "Structure before numbers", body: "A formula the room can follow beats a clever shortcut nobody can check." },
  { n: "02", title: "Every assumption, out loud", body: "Say the number and where it came from, then move on. Silent guesses are how answers go wrong." },
  { n: "03", title: "Check the size of the answer", body: "Before you commit, ask whether it looks plausible at a glance." },
]

export const whyJoin = [
  { title: "Training", body: "40+ hours on problem-solving, guesstimates, cases and product thinking." },
  { title: "Live projects", body: "Real briefs from funded start-ups and global brands, from your first semester." },
  { title: "A global community", body: "2,300+ students and 3,000+ alumni at 50 universities in 20 countries." },
  { title: "Internship support", body: "Seniors and alumni at McKinsey, BCG, banks, funds and start-ups who will help you prepare." },
  { title: "Resume sessions", body: "Learn to tell your story well before internship season." },
  { title: "People like you", body: "A small team that takes its work seriously and itself lightly." },
]

export const recruitment2026 = [
  { when: "Day 0", title: "Orientation and Round 1", body: "An orientation session, then a live guesstimate to see how you think." },
  { when: "Week 1", title: "Resume and case round", body: "Send your resume and work through a case in a small group." },
  { when: "Weeks 2–3", title: "Personal interviews", body: "One-to-one conversations about structure, curiosity and leadership." },
  { when: "Week 4", title: "Results", body: "Offers go out and the new batch starts training." },
]

export const careerPaths = [
  { title: "McKinsey, BCG, Bain", note: "Tier 1" },
  { title: "Global consulting firms", note: "Tier 2" },
  { title: "Big Four", note: "Scale" },
  { title: "Boutique consulting", note: "Specialist" },
  { title: "Product management", note: "On campus" },
]

export const guesstimate = {
  question: "How many 8 AM classes do BITS Pilani students miss in one semester?",
  steps: [
    { title: "Clarify", body: "Which campus: Pilani, Goa or Hyderabad? Undergraduates only? A normal semester, leaving out exam weeks?" },
    { title: "Write the formula", body: "Missed classes = students × 8 AM courses per student × classes per course per week × weeks × chance of missing one." },
    { title: "Split the students", body: "Take first-degree students on the Pilani campus, split into single degree (60%) and dual degree (40%), and work out how many have an 8 AM at all." },
    { title: "Estimate the chance", body: "Group students by habit: often miss (50%), sometimes (20%) and the ever-present ‘ghot’ (5%). Weight the groups and multiply." },
  ],
}

// Current leadership (shared by the team, November 2026).
export const leadership = [
  { name: "Alhan Satani", role: "President", linkedin: "https://www.linkedin.com/in/alhan-satani-048a96327/" },
  { name: "Pratiksha Chatterjee", role: "President", linkedin: "https://www.linkedin.com/in/pratiksha-chatterjee-b55069307/" },
  { name: "Akshara Gupta", role: "Vice President", linkedin: "https://www.linkedin.com/in/akshara-gupta06/" },
  { name: "Srikar Bommakanti", role: "Project Director", linkedin: "https://www.linkedin.com/in/srikar-bommakanti-721693356/" },
  { name: "Lavanya Bansal", role: "Project Director", linkedin: "https://www.linkedin.com/in/lavanya-bansal-422603336/" },
]

// ShARE's Indian chapters, grouped by city for the map. Coordinates are campus locations.
export type ChapterCity = { id: string; city: string; lat: number; lon: number; chapters: string[] }
export const chapterCities: ChapterCity[] = [
  { id: "pilani", city: "Pilani", lat: 28.36, lon: 75.59, chapters: ["BITS Pilani"] },
  { id: "delhi", city: "New Delhi", lat: 28.61, lon: 77.2, chapters: ["IIT Delhi", "IIFT", "SRCC", "St. Stephen's College"] },
  { id: "ropar", city: "Rupnagar", lat: 30.97, lon: 76.47, chapters: ["IIT Ropar"] },
  { id: "roorkee", city: "Roorkee", lat: 29.86, lon: 77.9, chapters: ["IIT Roorkee"] },
  { id: "lucknow", city: "Lucknow", lat: 26.94, lon: 80.9, chapters: ["IIM Lucknow"] },
  { id: "kanpur", city: "Kanpur", lat: 26.51, lon: 80.23, chapters: ["IIT Kanpur"] },
  { id: "varanasi", city: "Varanasi", lat: 25.26, lon: 82.99, chapters: ["IIT (BHU) Varanasi"] },
  { id: "patna", city: "Patna", lat: 25.54, lon: 84.85, chapters: ["IIT Patna"] },
  { id: "ahmedabad", city: "Ahmedabad", lat: 23.03, lon: 72.53, chapters: ["IIM Ahmedabad"] },
  { id: "indore", city: "Indore", lat: 22.62, lon: 75.79, chapters: ["IIM Indore"] },
  { id: "kolkata", city: "Kolkata", lat: 22.44, lon: 88.3, chapters: ["IIM Calcutta"] },
  { id: "kharagpur", city: "Kharagpur", lat: 22.32, lon: 87.31, chapters: ["IIT Kharagpur"] },
  { id: "bhubaneswar", city: "Bhubaneswar", lat: 20.15, lon: 85.67, chapters: ["IIT Bhubaneswar"] },
  { id: "mumbai", city: "Mumbai", lat: 19.1, lon: 72.9, chapters: ["IIT Bombay", "TISS"] },
  { id: "goa", city: "Goa", lat: 15.39, lon: 73.88, chapters: ["BITS Goa"] },
  { id: "chennai", city: "Chennai", lat: 12.99, lon: 80.23, chapters: ["IIT Madras"] },
  { id: "bengaluru", city: "Bengaluru", lat: 12.89, lon: 77.6, chapters: ["IIM Bangalore"] },
  { id: "kozhikode", city: "Kozhikode", lat: 11.29, lon: 75.87, chapters: ["IIM Kozhikode"] },
]
