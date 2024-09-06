import React from "react";

function About() {
  return (
    <div className="w-full   bg-[#CDEA68] p-20 text-black">
      <h1 className="font-['Neue_Montreal'] text-[3vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="border-t-[1px] border-[#a1b562] mt-20 w-full pt-10 flex gap-5">
        <div className="w-1/2">
            <h1 className="text-7xl ">Our approach :</h1>
            <button className="px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex items-center gap-10 uppercase text-xl">Read More
                <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
            </button>
        </div>
        <div className="w-1/2 bg-[#708037] h-[70vh] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
