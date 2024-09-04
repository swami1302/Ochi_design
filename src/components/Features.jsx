import React from "react";

function Features() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-800  pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="relative cardContainer  w-1/2 h-[75vh] ">
            <h1 className="absolute w-full left-[120%] z-[9] text-8xl font-['Test_Founders_Grotesk_x-Condensed'] font-semibold uppercase tracking-tight -translate-x-[50%] -translate-y-[50%] top-[50%] text-[#CDEA68]">
              {"Cardboard spaceship".split("").map((item,index)=>{
                return <span>{item}</span>
              })}
            </h1>
            <div className=" w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt="img_1"
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
          <div className="relative cardContainer w-1/2 h-[75vh]">
            <h1 className="absolute w-full right-full z-[9] text-8xl font-['Test_Founders_Grotesk_x-Condensed'] font-semibold uppercase tracking-tight translate-x-[50%] -translate-y-[50%] top-[50%] text-[#CDEA68]">
              {"Ah2 & matt horn".split("").map((item,index)=>{
                return <span>{item}</span>
              })}
            </h1> 
            <div className="w-full h-full rounded-xl  overflow-hidden ">
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt="img_2"
                className="w-full h-full bg-cover "
              />
            </div>
          </div>
        </div>
        <div className="cards w-full flex gap-10 mt-10">
          <div className="relative cardContainer  w-1/2 h-[75vh] ">
            <h1 className="absolute w-full left-[140%] z-[9] text-8xl font-['Test_Founders_Grotesk_x-Condensed'] font-semibold uppercase tracking-tight -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68]">
              {"fyde".split("").map((item,index)=>{
                return <span>{item}</span>
              })}
            </h1>
            <div className=" w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="img_1"
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
          <div className="relative cardContainer w-1/2 h-[75vh]">
            <h1 className="absolute w-full right-[60%] z-[9] text-8xl font-['Test_Founders_Grotesk_x-Condensed'] font-semibold uppercase tracking-tight translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68]">
              {"vise".split("").map((item,index)=>{
                return <span>{item}</span>
              })}
            </h1> 
            <div className="w-full h-full rounded-xl  overflow-hidden ">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="img_2"
                className="w-full h-full bg-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
