import { images } from "./media";

export const facilities = [
  {
    id: "classrooms",
    icon: "School",
    title: "48 Smart Classrooms",
    text: "Every classroom is ventilated, well lit and fitted with an interactive display, seating for forty and a dedicated class library corner.",
    image: images.classroom,
  },
  {
    id: "smartboards",
    icon: "MonitorPlay",
    title: "Smartboard in Every Class",
    text: "Interactive panels let teachers bring diagrams, simulations and recorded lessons into everyday teaching.",
    image: images.study,
  },
  {
    id: "labs",
    icon: "FlaskConical",
    title: "Science Laboratories",
    text: "Separate physics, chemistry and biology laboratories equipped for the full CBSE practical syllabus up to Class XII.",
    image: images.scienceLab,
  },
  {
    id: "computer",
    icon: "Laptop",
    title: "Computer Laboratory",
    text: "A sixty-seat computer laboratory with broadband connectivity supports coding, IT and Computer Science classes.",
    image: images.computerLab,
  },
  {
    id: "library",
    icon: "BookOpen",
    title: "Central Library",
    text: "Over twelve thousand titles across English and Hindi, reference sets, periodicals and a quiet reading hall for senior students.",
    image: images.library,
  },
  {
    id: "sports",
    icon: "Trophy",
    title: "Sports Ground",
    text: "A full-size ground with a cricket pitch and nets, athletics track markings and space for football and kho-kho.",
    image: images.sportsGround,
  },
  {
    id: "indoors",
    icon: "Dumbbell",
    title: "Indoor Games",
    text: "Table tennis, chess, carrom and badminton courts under cover, supervised through the games period and after school.",
    image: images.cricket,
  },
  {
    id: "auditorium",
    icon: "Theater",
    title: "Auditorium",
    text: "A four-hundred seat auditorium with a full stage, lighting and sound for assemblies, debates and cultural evenings.",
    image: images.auditorium,
  },
  {
    id: "cafeteria",
    icon: "UtensilsCrossed",
    title: "Cafeteria",
    text: "Hygienic, freshly prepared vegetarian food at subsidised rates, with a separate drinking water station on each floor.",
    image: images.cafeteria,
  },
  {
    id: "infirmary",
    icon: "HeartPulse",
    title: "First Aid & Infirmary",
    text: "A staffed infirmary with a trained nurse on campus, first-aid kits in every wing and a tie-up with a nearby clinic.",
    image: images.parentMeeting,
  },
  {
    id: "security",
    icon: "ShieldCheck",
    title: "Parking & Security",
    text: "Gated entry with round-the-clock security, visitor logging, CCTV coverage of corridors and a covered parent parking bay.",
    image: images.gate,
  },
  {
    id: "green",
    icon: "Trees",
    title: "Green Campus",
    text: "Two acres of shaded walks, a kitchen garden tended by the Eco Club, and open lawns used for yoga and morning assembly.",
    image: images.greenCampus,
  },
];

export const hotspots = [
  { id: "classrooms", label: "Main Building", x: 47, y: 44 },
  { id: "labs", label: "Science Labs", x: 64, y: 56 },
  { id: "library", label: "Central Library", x: 35, y: 58 },
  { id: "sports", label: "Sports Ground", x: 56, y: 79 },
  { id: "auditorium", label: "Auditorium", x: 74, y: 35 },
  { id: "cafeteria", label: "Cafeteria", x: 25, y: 41 },
  { id: "security", label: "Parking & Gate", x: 16, y: 70 },
];