// Source: ShARE Alumni tracker (sheets "ShARE" and "Current Life") and the 2026 orientation deck.
// Only public profile details are published here: no emails or phone numbers.
// `logo` keys map to files in /public/logos (see scripts/fetch-logos.sh).

export type Alum = {
  name: string
  batch: number
  por: string // position of responsibility held at ShARE
  company?: string
  role?: string
  logo?: string
  sector: "Consulting" | "Finance" | "Tech & Product" | "Founder" | "Higher studies" | "Industry"
  linkedin?: string
}

const li = (handle: string) => `https://www.linkedin.com/in/${handle}/`

export const alumni: Alum[] = [
  // 2017
  { name: "Swati Taparia", batch: 2017, por: "Senior Consultant", company: "Harvard Business School", role: "MBA · ex-Flipkart", logo: "harvard", sector: "Higher studies", linkedin: li("swati-taparia-388195178") },
  { name: "Kishlay Jha", batch: 2017, por: "Startup Manager", company: "Indian Forest Service", role: "Officer · ex-GAIL", logo: "ifs", sector: "Industry", linkedin: li("kishlay-jha") },
  { name: "Abhijit M", batch: 2017, por: "Senior Consultant", company: "IQVIA", role: "Associate Consultant", logo: "iqvia", sector: "Consulting", linkedin: li("abhijit-mohan") },
  { name: "Kshitij Kakade", batch: 2017, por: "Senior Consultant", company: "J.P. Morgan", role: "Quant Research Associate, Equity Derivatives", logo: "jpmorgan", sector: "Finance", linkedin: li("kshitijkakade") },
  // 2018
  { name: "Shourya Sodhani", batch: 2018, por: "President", company: "Elevation Capital", role: "Senior Associate", logo: "elevation", sector: "Finance", linkedin: li("shourya-sodhani-478845171") },
  { name: "Vishwajeet Raje", batch: 2018, por: "Senior Consultant", company: "Sprinklr", role: "Product Manager", logo: "sprinklr", sector: "Tech & Product", linkedin: li("vishwajeetraje") },
  { name: "Anisha Shewani", batch: 2018, por: "Senior Consultant", company: "Boston Consulting Group", role: "Senior Associate", logo: "bcg", sector: "Consulting", linkedin: li("anisha-shewani") },
  { name: "Avisha Gupta", batch: 2018, por: "Senior Consultant", company: "Goldman Sachs", role: "Engineering Associate", logo: "goldman", sector: "Finance", linkedin: li("avisha-gupta-9033a9176") },
  { name: "Ayush Pratap Singh", batch: 2018, por: "Senior Consultant", company: "Boston Consulting Group", role: "Consultant · MBA, FMS Delhi", logo: "bcg", sector: "Consulting", linkedin: li("ayush-pratap-singh-a9134b44") },
  { name: "Kush Gupta", batch: 2018, por: "Senior Consultant", company: "Synergy Consulting", role: "MBA, IIM Kozhikode", logo: "synergy", sector: "Consulting", linkedin: li("kush-s-gupta") },
  { name: "Manthan Patel", batch: 2018, por: "Startup Manager", company: "Morgan Stanley", role: "MFE, Cornell", logo: "morganstanley", sector: "Finance", linkedin: li("manthan1832") },
  { name: "Sarthak Agarwal", batch: 2018, por: "Learning Unit Manager", company: "Citi", role: "Technology Analyst", logo: "citi", sector: "Finance", linkedin: li("sarthakaga15") },
  { name: "Yathaarth Jamwal", batch: 2018, por: "Member", company: "Magi", role: "Founding Engineer", logo: "magi", sector: "Tech & Product", linkedin: li("yathaarthjamwal") },
  { name: "Aman Verma", batch: 2018, por: "Startup Manager", company: "IIM Bangalore", role: "MBA, Class of 2027", logo: "iimb", sector: "Higher studies", linkedin: li("aman-verma-288b931a2") },
  // 2019
  { name: "Rimen Kaur", batch: 2019, por: "Senior Consultant", company: "Headout", role: "Business Growth Manager", logo: "headout", sector: "Tech & Product", linkedin: li("rimenkaur28") },
  { name: "Gaurav Shinde", batch: 2019, por: "Senior Consultant", company: "InCred Financial Services", role: "Product Manager", logo: "incred", sector: "Finance", linkedin: li("gaurav-shinde-b8217118a") },
  { name: "Shreya Chouhan", batch: 2019, por: "Startup Manager", company: "UBS", role: "Quantitative Risk Analyst", logo: "ubs", sector: "Finance", linkedin: li("shreya-chouhan") },
  { name: "Chitwan Agarwal", batch: 2019, por: "Member", company: "Entrepreneur First", role: "Founder, F26 cohort", logo: "ef", sector: "Founder", linkedin: li("chitwan-agarwal-77975018b") },
  { name: "Amey Agarwal", batch: 2019, por: "Learning Unit Manager", company: "Axtria", logo: "axtria", sector: "Consulting", linkedin: li("amey-agarwal-23bba4195") },
  { name: "Roshan Agrawal", batch: 2019, por: "Network Manager", company: "Tata Communications", role: "Software Engineer", logo: "tatacomm", sector: "Tech & Product", linkedin: li("roshan-agrawal") },
  { name: "Saumya Goyal", batch: 2019, por: "Member", company: "Lansum Endpoint Developers", role: "Management Trainee, Marketing", sector: "Industry", linkedin: li("saumya-goyal-9518881a1") },
  // 2020
  { name: "Atishay Jain", batch: 2020, por: "President", company: "Skydo", logo: "skydo", sector: "Tech & Product", linkedin: li("jn-atishay") },
  { name: "Rushant Ashtputre", batch: 2020, por: "President", company: "Stealth AI startup", role: "Founder & CEO", sector: "Founder", linkedin: li("rushant-ashtputre") },
  { name: "Manan Sood", batch: 2020, por: "Vice President", company: "MSCI", role: "Index Research, Fixed Income", logo: "msci", sector: "Finance", linkedin: li("manan-sood") },
  { name: "Sarthak Agarwal", batch: 2020, por: "Project Director", company: "American Express", role: "Analyst, Data Science", logo: "amex", sector: "Finance", linkedin: li("sarthak-agarwal-64aa4294") },
  { name: "Aditya Thakur", batch: 2020, por: "Senior Consultant", company: "Dodge AI", role: "Co-founder", logo: "dodge", sector: "Founder", linkedin: li("adityathakurgg") },
  { name: "Gurum Bajaj", batch: 2020, por: "Senior Consultant", company: "ARB Trading Group", role: "STIR Trader", logo: "arb", sector: "Finance", linkedin: li("gurum-bajaj-1010110") },
  { name: "Sarthak Singhal", batch: 2020, por: "Learning Unit Manager & Project Lead", company: "Headout", role: "Program Manager", logo: "headout", sector: "Tech & Product", linkedin: li("sarthak-singhal-3b1a1484") },
  { name: "Utkarsh Singhvi", batch: 2020, por: "Learning Unit Manager", company: "Skydo", role: "Ops Lead, Strategy & Initiatives", logo: "skydo", sector: "Tech & Product", linkedin: li("utkarsh-singhvi-1593791ba") },
  { name: "Rohit Mathew", batch: 2020, por: "Member", company: "Texas Instruments", role: "Analog Engineer", logo: "ti", sector: "Industry", linkedin: li("rohit-mathew-1846ba217") },
  // 2021
  { name: "Shobhit Khurana", batch: 2021, por: "President", company: "ShopOS", role: "Product", logo: "shopos", sector: "Tech & Product", linkedin: li("shobhit-khurana") },
  { name: "Kunal Dhingra", batch: 2021, por: "President", company: "AppsForBharat", role: "Product", logo: "appsforbharat", sector: "Tech & Product", linkedin: li("kunal-dhingra-427b0a221") },
  { name: "Tarun Negi", batch: 2021, por: "Consulting Director", company: "P&G", role: "Engineering Manager", logo: "pg", sector: "Industry", linkedin: li("tarun-negi-ar03") },
  { name: "Shreeram Verma", batch: 2021, por: "Project Director", company: "Swiss Re", logo: "swissre", sector: "Finance", linkedin: li("shreeram-verma-59ab06203") },
  { name: "Ayush Dsouza", batch: 2021, por: "Senior Consultant", company: "Eternal", role: "Member of Product Staff", logo: "eternal", sector: "Tech & Product", linkedin: li("ayush-dsouza") },
  { name: "Aditya Khandelwal", batch: 2021, por: "Associate Consultant", company: "Apple", role: "Software Development", logo: "apple", sector: "Tech & Product", linkedin: li("aditya-khandelwal-7825a822b") },
  { name: "Ayush Kulkarni", batch: 2021, por: "Learning Unit Manager", company: "Paper Boat (Hector Beverages)", role: "Associate Brand Manager", logo: "paperboat", sector: "Industry", linkedin: li("ayush-kulkarni-a859a5202") },
  { name: "Harshita Khurana", batch: 2021, por: "Associate Consultant", company: "Godrej Capital", role: "Assistant Manager", logo: "godrej", sector: "Finance", linkedin: li("harshita-khurana-") },
  { name: "Aditi Dash", batch: 2021, por: "Network Manager", company: "SLB", role: "Well Construction Engineer", logo: "slb", sector: "Industry", linkedin: li("aditi-dash-b67a1a193") },
  // 2022
  { name: "Ankur Soni", batch: 2022, por: "President", company: "Google", role: "Associate Product Manager, Google Pay", logo: "google", sector: "Tech & Product", linkedin: li("ankursoni14") },
  { name: "Shreyank Maheshwari", batch: 2022, por: "President", company: "Siemens Energy", role: "Proposal Management", logo: "siemensenergy", sector: "Industry", linkedin: li("shreyank-maheshwari") },
  { name: "Meghna Ramaratnam", batch: 2022, por: "Consulting Director", company: "Nomura", role: "CEO / CAO's Office, Asia ex-Japan", logo: "nomura", sector: "Finance", linkedin: li("meghna-r-261b10232") },
  { name: "Aditya Raj Verma", batch: 2022, por: "Consulting Director", company: "Investec", logo: "investec", sector: "Finance", linkedin: li("-adityarajverma") },
  { name: "Sahil Sethi", batch: 2022, por: "Vice President", company: "Morgan Stanley", role: "Research Data Strategist", logo: "morganstanley", sector: "Finance", linkedin: li("sahil-sethi-09779b257") },
  { name: "Karan Pratap Singh", batch: 2022, por: "Senior Consultant", company: "Vitalize Healthcare", role: "Founder", sector: "Founder", linkedin: li("karan-pratap-singh09") },
  // 2023
  { name: "Krish Agrawal", batch: 2023, por: "President", company: "Peak XV Partners", logo: "peakxv", sector: "Finance", linkedin: li("krish-agrawal01") },
  { name: "Jeevan Mohapatra", batch: 2023, por: "President", company: "P&G", role: "also at Zeropearl VC", logo: "pg", sector: "Industry" },
  { name: "Samarthh Dave", batch: 2023, por: "Vice President", company: "McKinsey & Company", logo: "mckinsey", sector: "Consulting", linkedin: li("samarthh-dave-308443288") },
  { name: "Devesh Saraogi", batch: 2023, por: "Consulting Director", company: "IBM", role: "ex-Samsung", logo: "ibm", sector: "Tech & Product", linkedin: li("devesh-saraogi-8581302a2") },
  { name: "Bhoomi Singhal", batch: 2023, por: "Product Director", company: "University of Copenhagen", logo: "copenhagen", sector: "Higher studies" },
  { name: "Ayush Singh", batch: 2023, por: "Senior Consultant", company: "Sarvam AI", logo: "sarvam", sector: "Tech & Product", linkedin: li("ayush-singh-50a079224") },
  { name: "Devansh Agarwal", batch: 2023, por: "Senior Consultant", company: "Skan AI", logo: "skan", sector: "Tech & Product", linkedin: li("devansh-agarwal-874605180") },
  { name: "Suryansh Malik", batch: 2023, por: "Senior Consultant", company: "Myntra", logo: "myntra", sector: "Tech & Product", linkedin: li("suryansh-m-6707a0283") },
  { name: "Vardhman Chopra", batch: 2023, por: "Senior Consultant", company: "Morgan Stanley", logo: "morganstanley", sector: "Finance", linkedin: li("vardhman-chopra-6436a927b") },
  { name: "Christo", batch: 2023, por: "Senior Consultant", sector: "Industry" },
  { name: "Isha", batch: 2023, por: "Senior Consultant", sector: "Industry" },
]

export const batches = [...new Set(alumni.map((a) => a.batch))].sort((a, b) => b - a)
export const sectors = ["Consulting", "Finance", "Tech & Product", "Founder", "Higher studies", "Industry"] as const

// Logo marks used on the "where our alumni are" strip.
export const featuredLogos = ["mckinsey", "bcg", "goldman", "google", "apple", "jpmorgan", "morganstanley", "nomura", "peakxv", "elevation", "pg", "sarvam", "ibm", "ubs", "amex", "myntra"]
