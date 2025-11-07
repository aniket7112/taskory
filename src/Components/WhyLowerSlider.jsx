import { memo } from 'react';
import { motion } from "motion/react";

const WhyLowerSlider = () => {
  const BASE = import.meta.env.BASE_URL;
    const cardicon1 = `${BASE}/assets/cardicon1.png`;
    const cardicon2 = `${BASE}/assets/cardicon2.png`;
    const cardicon3 = `${BASE}/assets/cardicon3.png`;
    return (
        <>
            <div className="why-slider myGradient flex">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="flex items-center shrink-0"
                >

                    <div className="wrapper flex ">
                        <div className="w-[411px] pt-6.5 pb-6.5 pr-5 pl-5 border border-[#FFCC86] rounded-xl shadow-[0px_40px_16px_0px_#387FF50D] mr-11">
                            <div className="flex gap-3 mb-3">
                                <img src={cardicon3} alt="" />
                                <h6>One task view</h6>
                            </div>
                            <p className="text-[#4B5162] text-[18px] leading-[160%]">Harness the unmatched power of artificial intelligence with Neuros. Dive deep into predictive analytics, anticipate market  </p>
                        </div>
                        <div className="w-[411px] pt-6.5 pb-6.5 pr-5 pl-5 border border-[#387FF5] rounded-xl shadow-[0px_40px_16px_0px_#387FF50D] mr-11">
                            <div className="flex gap-3 mb-3">
                                <img src={cardicon1} alt="" />
                                <h6>Calendar-aware</h6>
                            </div>
                            <p className="text-[#4B5162] text-[18px] leading-[160%]">Neuros seamlessly integrates with your favorite business tools, CRMs, and platforms. Experience a unified analytics platform that bridges the </p>
                        </div>
                        <div className="w-[411px] pt-6.5 pb-6.5 pr-5 pl-5 border border-[#FFCC86] rounded-xl shadow-[0px_40px_16px_0px_#387FF50D] mr-11">
                            <div className="flex gap-3 mb-3">
                                <img src={cardicon2} alt="" />
                                <h6>Multi-email + multi-tool</h6>
                            </div>
                            <p className="text-[#4B5162] text-[18px] leading-[160%]">In the fast-paced world of business, every second counts. Neuros processes data in real-time, ensuring you're always  </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="flex items-center shrink-0"
                >

                    <div className="wrapper flex ">
                        <div className="w-[411px] pt-6.5 pb-6.5 pr-5 pl-5 border border-[#387FF5] rounded-xl shadow-[0px_40px_16px_0px_#387FF50D] mr-11">
                            <div className="flex gap-3 mb-3">
                                <img src={cardicon3} alt="" />
                                <h6>One task view</h6>
                            </div>
                            <p className="text-[#4B5162] text-[18px] leading-[160%]">Harness the unmatched power of artificial intelligence with Neuros. Dive deep into predictive analytics, anticipate market  </p>
                        </div>
                        <div className="w-[411px] pt-6.5 pb-6.5 pr-5 pl-5 border border-[#FFCC86] rounded-xl shadow-[0px_40px_16px_0px_#387FF50D] mr-11">
                            <div className="flex gap-3 mb-3">
                                <img src={cardicon1} alt="" />
                                <h6>Calendar-aware</h6>
                            </div>
                            <p className="text-[#4B5162] text-[18px] leading-[160%]">Neuros seamlessly integrates with your favorite business tools, CRMs, and platforms. Experience a unified analytics platform that bridges the </p>
                        </div>
                        <div className="w-[411px] pt-6.5 pb-6.5 pr-5 pl-5 border border-[#387FF5] rounded-xl shadow-[0px_40px_16px_0px_#387FF50D] mr-11">
                            <div className="flex gap-3 mb-3">
                                <img src={cardicon2} alt="" />
                                <h6>Multi-email + multi-tool</h6>
                            </div>
                            <p className="text-[#4B5162] text-[18px] leading-[160%]">In the fast-paced world of business, every second counts. Neuros processes data in real-time, ensuring you're always  </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default memo(WhyLowerSlider);