import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import WordReveal from "@/components/common/WordReveal";
import RippleButton from "@/components/common/RippleButton";
import { images } from "@/data/media";

export default function HomeHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <Image
          src={images.hero}
          alt="The St. Xavier's Jr./Sr. School campus in the golden evening light"
          className="block h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy/70 to-navy-deep/60" />

      <motion.div style={{ y: textY, opacity: fade }} className="container-site relative pt-24 text-center">
        <motion.p
          className="eyebrow-light text-[0.62rem] tracking-[0.3em] sm:text-[0.72rem]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          EST. 1976 · CBSE AFFILIATED · MUZAFFARPUR, BIHAR
        </motion.p>

        <h1 className="h1-display mx-auto mt-6 max-w-4xl text-white">
          <WordReveal text="Nurturing Minds, Shaping Futures" stagger={0.12} delay={0.25} />
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-[0.92rem] leading-relaxed text-cream/80 md:text-[1rem]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          A co-educational, English medium school committed to academic excellence and holistic development
          since 1976.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <RippleButton as={Link} to="/admissions" className="btn-gold w-full rounded-full px-8 py-3.5 sm:w-auto">
            Apply for Admission
            <ArrowRight className="h-4 w-4" />
          </RippleButton>
          <RippleButton as={Link} to="/facilities" className="btn-outline-light w-full rounded-full px-8 py-3.5 sm:w-auto">
            Explore Campus
          </RippleButton>
        </motion.div>
      </motion.div>

      <motion.a
        href="#welcome"
        aria-label="Scroll to content"
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/70 transition hover:text-gold"
      >
        <ChevronDown className="chevron-bob h-7 w-7" />
      </motion.a>
    </section>
  );
}