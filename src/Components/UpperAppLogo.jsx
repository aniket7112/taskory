import { memo } from 'react';
import { motion } from "motion/react"

const UpperAppLogo = () => {
    const images = [
    "/assets/upperApplogo/Container..svg",
    "/assets/upperApplogo/Container.svg",
    "/assets/upperApplogo/GoogleDocs.svg",
    "/assets/upperApplogo/GoogleDrive.svg",
    "/assets/upperApplogo/GoogleForms.svg",
    "/assets/upperApplogo/GoogleSheets.svg",
    "/assets/upperApplogo/GoogleSlides.svg",
    "/assets/upperApplogo/Symbol.svg.svg",
    "/assets/upperApplogo/zoom_symbol.png.svg",
  ];
  return (
    <>
    <div className="flex myGradient mb-14">

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 60, repeat: Infinity, ease:"linear" }}
        className="flex items-center shrink-0"
      >
        {images.map((image, index) => {
          return <img className="pr-20" src={image} key={index} />
        })}
      </motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 60, repeat: Infinity, ease:"linear" }}
        className="flex items-center shrink-0"
      >
        {images.map((image, index) => {
          return <img className="pr-20" src={image} key={index} />
        })}
      </motion.div>

    </div>


    <div className="flex myGradient">

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 60, repeat: Infinity, ease:"linear" }}
        className="flex items-center shrink-0"
      >
        {images.map((image, index) => {
          return <img className="pr-20" src={image} key={index} />
        })}
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 60, repeat: Infinity, ease:"linear" }}
        className="flex items-center shrink-0"
      >
        {images.map((image, index) => {
          return <img className="pr-20" src={image} key={index} />
        })}
      </motion.div>

    </div>
    
    </>
    

    
  );
};

export default memo(UpperAppLogo);