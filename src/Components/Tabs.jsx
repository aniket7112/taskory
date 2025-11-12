import { memo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
    
    

const BASE = import.meta.env.BASE_URL;
const btn_arrow = `${BASE}/assets/arrow-up-right.png`;

const TABS = [
  {
    id: "Email",
    label: "Email",
    img: `${BASE}assets/email-tab.png`,
    desc: "Email Integration",
  },
  {
    id: "Calendly",
    label: "Calendly",
    img: `${BASE}assets/crm.png`,
    desc: "Integrate Calendly",
  },
  {
    id: "Chat",
    label: "Chat",
    img: `${BASE}assets/automations.png`,
    desc: "Team chats ",
  },
  {
    id: "Docs",
    label: "Docs",
    img: `${BASE}assets/analytics.png`,
    desc: "Create and share",
  },
  {
    id: "CRM",
    label: "CRM solution",
    img: `${BASE}assets/mobile.png`,
    desc: "Manage clients",
  },
];

const slide = {
  enter: { x: 40, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -40, opacity: 0 },
};

const fade = {
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

function Tabs() {
  const [active, setActive] = useState(TABS[0].id);
  const current = TABS.find((t) => t.id === active) ?? TABS[0];

  const handleKey = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(id);
    }
  };

  return (
    <section className="py-16 overflow-x-clip">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-12 gap-8">
        {/* Left: Heading + tabs */}
        <div className="col-span-12 md:col-span-6">
          <div className="banner-top-heading bg-white shadow-[0px_10px_18px_0px_#3A4C921A]">Applications</div>
          <h2 className="text-white mb-10">
            Works with what <br /> you already use.
          </h2>

          <div role="tablist" aria-label="Integrations" className="space-y-4.5 ml-14">
            {TABS.map((tab) => {
              const isActive = active === tab.id;
              return (
                <div key={tab.id} className="space-y-2">
                  <button
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(tab.id)}
                    onKeyDown={(e) => handleKey(e, tab.id)}
                    className={`w-full text-left rounded-xl transition tab-heading outline-none
                                text-white focus-visible:ring-2 focus-visible:ring-white/40
                                ${isActive ? "font-semibold" : "border-transparent"}`}
                  >
                    {tab.label}
                  </button>

                  {/* Description under the active tab */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.p
                        key={tab.id}
                        variants={fade}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.25 }}
                        className="text-white text-base leading-relaxed pt-2.5 tab-desc"
                      >
                        {tab.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <div className="inline-block btn-group">
            <a href="#">
              <div className="flex gap-2 pt-3 pb-3 pl-9 pr-9 primary-btn mt-10 bg-white shadow-[0px_20px_25px_-5px_#0000001A]">
                <span>Get Started</span>
                <img src={btn_arrow} alt="arrow" className="transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </a>
          </div>
        </div>

        {/* Right: Image panel */}
        <div className="col-span-12 md:col-span-6">
          <div
            className="relative overflow-hidden
                        shadow-[0px_2px_6px_0px_var(--PrimaryAlphaPRA30),0px_13px_12px_0px_var(--PrimaryAlphaPRA05),0px_24px_15px_0px_var(--PrimaryAlphaPRA05),0px_40px_16px_0px_var(--PrimaryAlphaPRA05),0px_62px_17px_0px_var(--PrimaryAlphaPRA05)]
                        rounded-xl min-h-[360px]"
          >
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
    </section>
  );
}

export default memo(Tabs);
