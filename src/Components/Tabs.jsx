import { memo } from 'react';
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const BASE = import.meta.env.BASE_URL;
const email_tab = `${BASE}assets/email-tab.png`;

const TABS = [
  { id: "Email", label: "Email", img: email_tab },
  { id: "Calendly", label: "Calendly", img: "/assets/crm.png" },
  { id: "Chat", label: "Chat", img: "/assets/automations.png" },
  { id: "Docs", label: "Docs", img: "/assets/analytics.png" },
  { id: "CRM solution", label: "CRM solution", img: "/assets/mobile.png" },
];

const slide = {
  enter: { x: 40, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit:  { x: -40, opacity: 0 },
};

const Tabs = () => {
    const [active, setActive] = useState(TABS[0].id);
    const current = TABS.find(t => t.id === active);
  return (
    <section className="py-16 overflow-x-clip grid grid-cols-12">
      {/* Heading + tabs inside container */}
      <div className="mx-auto max-w-7xl px-6 col-span-6 gap-8 items-start">
        {/* Left: heading + tabs (col-5 on desktop) */}
        <div className="col-span-12 md:col-span-5">
          <h2 className="text-white mb-10">
            Works with what <br/> you already use.
          </h2>

          <div role="tablist" aria-label="Features" className="space-y-3 ml-13">
            {TABS.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={`w-full text-left text-white rounded-xl 
                mb-4.5 transition tab-heading
                  ${active === tab.id
                    ? " "
                    : "border-transparent"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right column placeholder to keep row height, no overflow here */}
        {/* <div className="col-span-12 md:col-span-7 min-h-[360px]" /> */}
      </div>

      {/* Full-bleed right panel aligned with container left */}
      <div className="col-span-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className=""> {/* 5/12 ≈ 41.666% to align under right column */}
            <div className="relative  overflow-hidden
                 shadow-[0px_2px_6px_0px_var(--PrimaryAlphaPRA30),0px_13px_12px_0px_var(--PrimaryAlphaPRA05),0px_24px_15px_0px_var(--PrimaryAlphaPRA05),0px_40px_16px_0px_var(--PrimaryAlphaPRA05),0px_62px_17px_0px_var(--PrimaryAlphaPRA05)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  src={current.img}
                  alt={current.label}
                  className="w-full h-auto block select-none"
                  draggable="false"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Tabs);