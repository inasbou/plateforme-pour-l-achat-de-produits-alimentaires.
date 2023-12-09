import React from 'react'

const Offer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-green-600 md:py-36">
    <div className="flex  md:w-1/2  justify-center ">
      <div className="  text-white    ">
      <h1 className="  md:text-4xl text-center ">
        <span className=" font-semibold ">Offer of the week</span><br/>
         promotion 30% in el hanna store 
      </h1>
    </div>
    </div>
    <div className="flex md:w-1/2 justify-center ">
        <div  className='flex w-40  h-40 align-middle   '>
      <img
        src="/images/promotions.png"
        alt="Large Image"
       
      /></div>
    </div>
  </div>
  )
}

export default Offer