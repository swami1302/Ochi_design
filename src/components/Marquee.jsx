import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.01' className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[24vw] pr-20 leading-none font-["Test_Founders_Grotesk_x-Condensed"] uppercase font-semibold  -mt-[3.8%] -mb-[1%]'
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[24vw] pr-20 leading-none font-["Test_Founders_Grotesk_x-Condensed"] uppercase font-semibold  -mt-[3.8%] -mb-[1%]'
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          className='text-[24vw] leading-none font-["Test_Founders_Grotesk_x-Condensed"] uppercase font-semibold pr-20 -mt-[3.8%] -mb-[1%]'
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
