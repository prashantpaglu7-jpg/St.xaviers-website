import {
  Sprout, Ruler, GraduationCap, BookOpen, Languages, Calculator, Leaf, Palette, Music,
  FlaskConical, Globe2, Laptop, BookOpenCheck, MonitorPlay, Users, ClipboardCheck, Trophy,
  School, Dumbbell, Theater, UtensilsCrossed, HeartPulse, ShieldCheck, Trees, Cpu, Mic,
  Feather, Camera, Circle,
} from "lucide-react";

const map = {
  Sprout, Ruler, GraduationCap, BookOpen, Languages, Calculator, Leaf, Palette, Music,
  FlaskConical, Globe2, Laptop, BookOpenCheck, MonitorPlay, Users, ClipboardCheck, Trophy,
  School, Dumbbell, Theater, UtensilsCrossed, HeartPulse, ShieldCheck, Trees, Cpu, Mic,
  Feather, Camera,
};

export default function Icon({ name, ...props }) {
  const Component = map[name] || Circle;
  return <Component {...props} />;
}