import { memo } from "react";
import { motion } from "motion/react";

const UpperAppLogo = () => {
  // Put these files in: public/assets/upperApplogo/
  const files = [
    "Container.svg",
    "GoogleDocs.svg",
    "GoogleDrive.svg",
    "GoogleForms.svg",
    "GoogleSheets.svg",
    "GoogleSlides.svg",
    "Symbol.svg",
    "zoom_symbol.png",
  ];

  // Prefix with repo base so GH Pages resolves correctly
  const prefix = `${import.meta.env.BASE_URL}assets/upperApplogo/`;
  const images = files.map((f) => `${prefix}${f}`);

  return (
    <>
      {/* ROW 1 – moves left */}
      <div className="flex myGradient mb-14">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex items-center shrink-0"
        >
          {images.map((image, index) => (
            <img className="pr-20" src={image} key={`r1-a-${index}`} alt="" />
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex items-center shrink-0"
        >
          {images.map((image, index) => (
            <img className="pr-20" src={image} key={`r1-b-${index}`} alt="" />
          ))}
        </motion.div>
      </div>

      {/* ROW 2 – moves right */}
      <div className="flex myGradient">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex items-center shrink-0"
        >
          {images.map((image, index) => (
            <img className="pr-20" src={image} key={`r2-a-${index}`} alt="" />
          ))}
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex items-center shrink-0"
        >
          {images.map((image, index) => (
            <img className="pr-20" src={image} key={`r2-b-${index}`} alt="" />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default memo(UpperAppLogo);
