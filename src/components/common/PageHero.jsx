import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";
import WordReveal from "./WordReveal";

export default function PageHero({
  image,
  title,
  subtitle,
  current,
  minHeight = "min-h-[56vh] md:min-h-[62vh]",
  children,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);

  return (
    <section ref={ref} className={`relative flex items-end overflow-hidden ${minHeight} pb-12 pt-32 md:pb-16`}>
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image src={image} alt={title} className="block h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy/75 to-navy/45" />

      <div className="container-site relative w-full">
        <nav aria-label="Breadcrumb" className="mb-4 text-[0.68rem] uppercase tracking-[0.22em] text-white/55">
          <Link to="/" className="transition hover:text-gold">
            Home
          </Link>
          <span className="px-2 text-gold/60">/</span>
          <span className="text-gold">{current || title}</span>
        </nav>
        <h1 className="h1-display max-w-4xl text-white">
          <WordReveal text={title} />
        </h1>
        {subtitle && (
          <motion.p
            className="mt-5 max-w-2xl text-[0.9rem] leading-relaxed text-cream/80 md:text-[1rem]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}