import { memo } from 'react';
import { motion } from "motion/react";

const Marquee = () => {
  // ✅ Correct the file names (watch spelling and capitalization)
  // Place these in: public/assets/compnyLogo/
  const files = [
    "clarins.png",
    "fujitsu.png",        // fixed from "fujistu.png"
    "glassdoor.png",
    "hello-fresh.png",
    "Bolt.png",
    "Intuit.png",
    "kroger.png",
    "ntt.png",
    "Vevo.png",
  ];

  // ✅ Prefix paths dynamically based on your repo base (for GitHub Pages)
  const prefix = `${import.meta.env.BASE_URL}assets/compnyLogo/`;
  const images = files.map((f) => `${prefix}${f}`);

  return (
    <div className="flex myGradient">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex items-center shrink-0"
      >
        {images.map((image, index) => (
          <img className="pr-20" src={image} key={`row1-${index}`} alt="" />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex items-center shrink-0"
      >
        {images.map((image, index) => (
          <img className="pr-20" src={image} key={`row2-${index}`} alt="" />
        ))}
      </motion.div>
    </div>
  );
};

export default memo(Marquee);
