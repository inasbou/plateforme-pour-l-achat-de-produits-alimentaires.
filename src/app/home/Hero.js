import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className=" md:w-1/2  ">
        <div className="flex  justify-center  py-44  ">
        <h1 className="  md:text-4xl ">
          <span className=" font-semibold text-green-700">Freshness Awaits Your</span><br/>
           One-Stop Grocery Destination!"
        </h1>
      </div>
      </div>
      <div className=" md:w-1/2">
        <img
          src="/images/heroimg.png"
          alt="Large Image"
          
        />
      </div>
    </div>
  );
};

export default Hero;
