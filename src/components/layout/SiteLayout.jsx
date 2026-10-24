import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useScrolled from "@/hooks/useScrolled";

export default function SiteLayout() {
  const scrolled = useScrolled(80);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <header className="fixed inset-x-0 top-0 z-50">
        <TopBar hidden={scrolled} />
        <Navbar scrolled={scrolled} />
      </header>

      <motion.main
        key={pathname}
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>

      <Footer />
    </div>
  );
}