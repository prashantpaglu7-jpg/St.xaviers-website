import { images } from "./media";

export const academicLevels = [
  {
    icon: "Sprout",
    title: "Primary",
    range: "Classes I – V",
    text: "A foundation in literacy, numeracy, environmental science and character, taught largely through activity, story and play.",
  },
  {
    icon: "Ruler",
    title: "Middle School",
    range: "Classes VI – VIII",
    text: "Structured subjects in Science, Mathematics, Social Science, English and Hindi, with the first introduction to laboratory work.",
  },
  {
    icon: "GraduationCap",
    title: "Secondary & Senior",
    range: "Classes IX – XII",
    text: "Board-focused teaching for Class X, then Science, Commerce and Humanities streams in Classes XI and XII with dedicated exam coaching.",
  },
];

export const subjectTabs = [
  {
    key: "primary",
    label: "Class I – V",
    subjects: [
      { icon: "BookOpen", name: "English", text: "Reading fluency, phonics, handwriting and early composition." },
      { icon: "Languages", name: "Hindi", text: "Varnamala, reading, dictation and simple creative writing." },
      { icon: "Calculator", name: "Mathematics", text: "Number sense, tables, measurement and shapes through manipulatives." },
      { icon: "Leaf", name: "Environmental Studies", text: "The world around us — family, community, plants, animals and health." },
      { icon: "Palette", name: "Art & Craft", text: "Drawing, colour, paper craft and clay as a weekly studio period." },
      { icon: "Music", name: "Music & Movement", text: "Rhymes, rhythm, group song and simple folk dance." },
    ],
  },
  {
    key: "middle",
    label: "Class VI – VIII",
    subjects: [
      { icon: "BookOpen", name: "English", text: "Literature, grammar, comprehension and structured paragraph writing." },
      { icon: "Languages", name: "Hindi & Sanskrit", text: "Prose, poetry, grammar and translation for the three-language formula." },
      { icon: "Calculator", name: "Mathematics", text: "Integers, fractions, algebra, geometry and data handling." },
      { icon: "FlaskConical", name: "Science", text: "Integrated physics, chemistry and biology with weekly lab periods." },
      { icon: "Globe2", name: "Social Science", text: "History, civics, geography and map work of India and the world." },
      { icon: "Laptop", name: "Computer Science", text: "Digital literacy, office tools and block-based programming." },
    ],
  },
  {
    key: "senior",
    label: "Class IX – XII",
    subjects: [
      { icon: "BookOpen", name: "English Core", text: "Prose, poetry, writing skills and long-form comprehension for the board." },
      { icon: "Calculator", name: "Mathematics", text: "Algebra, trigonometry, calculus and statistics with board-pattern practice." },
      { icon: "FlaskConical", name: "Science Stream", text: "Physics, Chemistry, Biology or Computer Science with full practical work." },
      { icon: "Briefcase", name: "Commerce Stream", text: "Accountancy, Business Studies, Economics and Entrepreneurship." },
      { icon: "Globe2", name: "Humanities Stream", text: "History, Political Science, Geography and Psychology." },
      { icon: "Laptop", name: "Computer Science", text: "Python programming, data handling and SQL for senior classes." },
    ],
  },
];

export const calendarTerms = [
  { term: "Term 1", months: "April – July", highlights: "Unit test I · Parent–teacher meeting" },
  { term: "Term 2", months: "August – November", highlights: "Half-yearly examinations (October) · Science exhibition" },
  { term: "Term 3", months: "December – March", highlights: "Pre-boards · Annual examinations (March)" },
];

export const holidays = ["Diwali", "Holi", "Independence Day", "Republic Day", "Chhath Puja", "Christmas"];

export const methodology = [
  { icon: "BookOpenCheck", title: "Conceptual Learning", text: "Ideas are built from the concrete to the abstract, so children understand before they memorise." },
  { icon: "MonitorPlay", title: "Smart Classrooms", text: "Interactive displays, simulations and recorded lessons support every chapter taught." },
  { icon: "Users", title: "Small Batch, 1:25", text: "A capped student–teacher ratio keeps every child visible to their teacher, every day." },
  { icon: "ClipboardCheck", title: "Regular Assessment", text: "Weekly class checks and three formal assessments a year, shared with parents in writing." },
];

export const achievements = [
  { title: "District Cricket Champions", year: "2025", text: "Under-16 boys' team, Muzaffarpur district inter-school tournament." },
  { title: "State Science Fair Winner", year: "2025", text: "Class X team recognised for a low-cost solar water purification model." },
  { title: "CBSE Class XII — 100% Pass", year: "2025", text: "All sixty-eight candidates passed, with eleven distinctions." },
  { title: "Inter-School Debate Runners-Up", year: "2026", text: "Senior English debate held at L.S. College, Muzaffarpur." },
  { title: "National Talent Search Qualifiers", year: "2024", text: "Two Class X students cleared the state-level NTSE screening." },
];