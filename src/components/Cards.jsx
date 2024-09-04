import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className="cardContainer h-[50vh] w-1/2 ">
            <div className="card w-full h-full bg-[#004D43] rounded-xl"></div>
        </div>
        <div className="cardContainer flex gap-5 h-[50vh] w-1/2">
            <div className="card w-1/2 h-full bg-[#274743] rounded-xl"></div>
            <div className="card w-1/2 h-full bg-[#274743] rounded-xl"></div>
        </div>
    
    </div>
  )
}

export default Cards
