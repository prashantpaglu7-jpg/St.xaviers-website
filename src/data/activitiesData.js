import { images } from "./media";

export const activities = [
  {
    icon: "Trophy",
    title: "Sports",
    text: "Cricket, football, kho-kho, athletics, table tennis, chess and badminton, with inter-house and inter-school fixtures through the year.",
    image: images.cricket,
  },
  {
    icon: "Palette",
    title: "Arts & Culture",
    text: "Music, dance, theatre, painting and craft — every child takes part in at least one cultural production each year.",
    image: images.cultural,
  },
  {
    icon: "Cpu",
    title: "Clubs & Societies",
    text: "Science, debate, coding and robotics, eco-club, literary and photography, each meeting twice a week after school.",
    image: images.robotics,
  },
  {
    icon: "Globe2",
    title: "Community & Leadership",
    text: "Student council, community service drives, cleanliness campaigns and an annual leadership camp for senior students.",
    image: images.assembly,
  },
];

export const clubs = [
  { icon: "FlaskConical", name: "Science Club", text: "Experiments, exhibitions and visits to research institutions." },
  { icon: "Mic", name: "Debate & Elocution", text: "Weekly practice in English and Hindi, with inter-school competitions." },
  { icon: "Cpu", name: "Coding & Robotics", text: "Python, electronics and robot building for Classes VI to XII." },
  { icon: "Leaf", name: "Eco Club", text: "Kitchen garden, tree planting and waste segregation on campus." },
  { icon: "Feather", name: "Literary Society", text: "The school magazine, poetry readings and creative writing workshops." },
  { icon: "Camera", name: "Photography Club", text: "Documenting school life and learning composition and light." },
];

export const activityAchievements = [
  { image: images.cricket, title: "District Cricket Champions", year: "2025", text: "Under-16 boys' team, Muzaffarpur district tournament." },
  { image: images.scienceFair, title: "State Science Fair Winner", year: "2025", text: "Low-cost solar water purification model by Class X students." },
  { image: images.sportsDay, title: "Athletics Meet Record", year: "2026", text: "New school record in the 200m senior girls' event." },
  { image: images.cultural, title: "Best Cultural Troupe", year: "2026", text: "Inter-school folk dance competition, Muzaffarpur." },
  { image: images.art, title: "Art Olympiad Merit", year: "2025", text: "Three students placed in the district-level art competition." },
];

export const eventsCalendar = [
  { event: "Annual Day", month: "January" },
  { event: "Republic Day Parade", month: "January 26" },
  { event: "Sports Day", month: "February" },
  { event: "Science Exhibition", month: "March" },
  { event: "Independence Day", month: "August 15" },
  { event: "Cultural Fest — Utsav", month: "December" },
];