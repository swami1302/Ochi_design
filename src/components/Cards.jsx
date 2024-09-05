import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className="cardContainer h-[50vh] w-1/2 ">
            <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center relative">
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
              <button className='absolute bottom-10 left-10 px-5 py-1 border-2 rounded-full text-white text-sm'>&copy;2019 -2020 </button>
            </div>
        </div>
        <div className="cardContainer flex gap-5 h-[50vh] w-1/2">
            <div className="card w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center relative">
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className='absolute bottom-10 left-10 px-5 py-1 border-2 rounded-full text-white text-sm uppercase'>rating 5.0 on clutch </button>
            </div>
            <div className="card w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center relative">
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='absolute bottom-10 left-10 px-5 py-1 border-2 rounded-full text-white text-sm uppercase'>Business Bootcamp Alumni</button>
            </div>
        </div>
    
    </div>
  )
}

export default Cards
