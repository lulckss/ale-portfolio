"use client";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {  delay: 0.3, duration: 0.4, ease: "easeInOut" }, 
          }}

          className="base-page-size h-screen w-screen bg-primary fixed top-0 pointer-events-none"
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
