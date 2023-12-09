import React from 'react'
import { BiSolidOffer } from "react-icons/bi";

const Offer = () => {
  return (
    <div className="flex flex-col py-4 md:flex-row bg-green-600 md:py-36">
    <div className="flex md:w-1/2 justify-center ">
        <div  className='flex  align-text-bottom  w-fit h-fit   '>
      <h1 className=" text-white text-lg   md:text-4xl text-center ">
        <span className="text-xl md:text-5xl font-semibold ">Offer of the week</span><br/>
         promotion 30% in el hanna store 
      </h1>
    </div>
    </div>
    <div className="flex md:w-1/2 justify-center ">
        <div  className='flex  align-middle    text-white  '>
        <BiSolidOffer className='w-[250px] h-[250px] ' /></div>
    </div>
  </div>
  )
}

export default Offer