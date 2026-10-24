import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalStrip({ children, height = "h-[200vh]", shift = "-58%" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", shift]);

  return (
    <div ref={ref} className={`relative ${height}`}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-5 pl-5 sm:pl-8">
          {children}
        </motion.div>
      </div>
    </div>
  );
}