import { memo } from 'react';
import { motion } from "motion/react"

const Marquee = () => {
  const images = [
    "/assets/compnyLogo/clarins.png",
    "/assets/compnyLogo/fujistu.png",
    "/assets/compnyLogo/glassdoor.png",
    "/assets/compnyLogo/hello-fresh.png",
    "/assets/compnyLogo/Bolt.png",
    "/assets/compnyLogo/Intuit.png",
    "/assets/compnyLogo/kroger.png",
    "/assets/compnyLogo/ntt.png",
    "/assets/compnyLogo/Vevo.png",
  ];
  return (
    <div className="flex myGradient">

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 50, repeat: Infinity, ease:"linear" }}
        className="flex items-center shrink-0"
      >
        {images.map((image, index) => {
          return <img className="pr-20" src={image} key={index} />
        })}
      </motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 50, repeat: Infinity, ease:"linear" }}
        className="flex items-center shrink-0"
      >
        {images.map((image, index) => {
          return <img className="pr-20" src={image} key={index} />
        })}
      </motion.div>

    </div>

  );
};

export default memo(Marquee);