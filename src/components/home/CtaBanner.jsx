import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Image } from "@/components/ui/image";
import RippleButton from "@/components/common/RippleButton";
import WordReveal from "@/components/common/WordReveal";
import { images } from "@/data/media";
import { school } from "@/data/school";

export default function CtaBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-deep">
      <motion.div style={{ y }} className="absolute inset-0 opacity-35">
        <Image src={images.buildingFront} alt="" className="block h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy/70" />

      <div className="container-site relative flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div>
          <p className="eyebrow-light">Admissions 2026–27</p>
          <h2 className="h2-display mt-3 max-w-xl text-cream">
            <WordReveal text="Ready to join the St. Xavier's family?" />
          </h2>
          <p className="mt-4 max-w-lg text-[0.9rem] leading-relaxed text-cream/70">
            Seats are open from Class I to Class XII. Visit the office on Goshala Road, or call us and we will
            walk you through the process.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <RippleButton as={Link} to="/admissions" className="btn-gold rounded-full px-7 py-3.5">
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </RippleButton>
          <a href={`tel:${school.phones[0]}`} className="btn-outline-light rounded-full px-7 py-3.5">
            <Phone className="h-4 w-4" />
            {school.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}