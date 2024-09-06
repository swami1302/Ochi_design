import { motion, useAnimation } from "framer-motion";
import React from "react";

function Features() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-800 pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        {/* First Row */}
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="relative cardContainer w-1/2 h-[75vh]"
          >
            <h1 className="absolute w-full left-[120%] overflow-hidden z-[9] text-8xl font-['Test_Founders_Grotesk_x-Condensed'] font-semibold uppercase tracking-tight -translate-x-[50%] -translate-y-[50%] top-[50%] text-[#CDEA68]">
              {"Cardboard spaceship".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.03,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt="img_1"
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="relative cardContainer w-1/2 h-[75vh]"
          >
            <h1 className="absolute w-full overflow-hidden right-[80%] z-[9] text-8xl font-['Test_Founders_Grotesk_x-Condensed'] font-semibold uppercase tracking-tight translate-x-[50%] -translate-y-[50%] top-[50%] text-[#CDEA68]">
              {"Ah2 & matt horn".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.03,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt="img_2"
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="relative cardContainer w-1/2 h-[75vh]"
          >
            <h1 className="absolute w-full overflow-hidden left-[140%] z-[9] text-8xl font-['Test_Founders_Grotesk_x-Condensed'] font-semibold uppercase tracking-tight -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68]">
              {"fyde".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="img_3"
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="relative cardContainer w-1/2 h-[75vh]"
          >
            <h1 className="absolute w-full overflow-hidden right-[63%] z-[9] text-8xl font-['Test_Founders_Grotesk_x-Condensed'] font-semibold uppercase tracking-tight translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68]">
              {"vise".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="img_4"
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
