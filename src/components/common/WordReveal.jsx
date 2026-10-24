import { motion } from "framer-motion";

export default function WordReveal({ text, className = "", delay = 0, stagger = 0.1 }) {
  const words = String(text).split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {word}{index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}