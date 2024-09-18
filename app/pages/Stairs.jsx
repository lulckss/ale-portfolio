"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const stairAnimation = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  animate: {
    opacity: 1,
    clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
  },
  exit: {
    opacity: 0,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
};

const Stairs = () => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      
      initial={{opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}
      animate={{opacity: 0, clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)"}}
      exit={{opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}
      transition={{
        duration: 0.75,
        
        
      }}
    ></motion.div>
  );
};

export default Stairs;
