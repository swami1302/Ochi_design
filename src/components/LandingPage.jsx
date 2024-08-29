import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-48 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-center">
                {index===1 && <div className="w-[8vw] h-[5vw] mr-5 bg-red-400 relative top-[0.5vw] rounded-md"></div>}
                <h1 className='uppercase font-["Test_Founders_Grotesk_x-Condensed"] text-[8.5vw] leading-[6vw] font-semibold'>
                  {item}
                </h1>
              </div>
              
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-48 flex justify-between items-center px-10 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-xl">{item}</p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full uppercase">
            Start the Project
          </div>
          <div className="w-10 h-10 border-[1px] flex items-center justify-center border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
            <FaArrowUpLong />
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
