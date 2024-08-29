import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <h1 className='text-[24vw] leading-none font-["Test_Founders_Grotesk_x-Condensed"] uppercase font-semibold '>
          We are Ochi
        </h1>
        <h1 className='text-[24vw] leading-none font-["Test_Founders_Grotesk_x-Condensed"] uppercase font-semibold '>
          We are Ochi
        </h1>
        <h1 className='text-[24vw] leading-none font-["Test_Founders_Grotesk_x-Condensed"] uppercase font-semibold '>
          We are Ochi 
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
