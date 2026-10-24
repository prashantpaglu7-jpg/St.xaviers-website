import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const isOpen = typeof index === "number" && index >= 0;

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate(1);
      if (event.key === "ArrowLeft") onNavigate(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onNavigate]);

  const item = isOpen ? items[index] : null;

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="absolute right-4 top-4 rounded-full border border-white/25 p-2 text-white/80 transition hover:border-gold hover:text-gold md:right-8 md:top-8"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate(-1)}
            aria-label="Previous image"
            className="absolute left-3 rounded-full border border-white/25 p-2 text-white/80 transition hover:border-gold hover:text-gold md:left-8"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate(1)}
            aria-label="Next image"
            className="absolute right-3 rounded-full border border-white/25 p-2 text-white/80 transition hover:border-gold hover:text-gold md:right-8"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <motion.figure
            key={index}
            className="w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <Image src={item.image} alt={item.title} fittingType="fit" className="block max-h-[76vh] w-full" />
            <figcaption className="mt-4 text-center text-[0.82rem] text-cream/75">
              {item.title}
              {item.category && <span className="ml-2 text-gold">· {item.category}</span>}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}