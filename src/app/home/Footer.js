import React from "react";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
const Footer = () => {
 
      
  return (
    <div  id="#footer" className="w-full bg-black py-5 md:py-12 px-3 md:px-32">
      <div className="w-full text-white inline-flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className=" w-full inline-flex md:flex-row flex-col items-start justify-between md:my-7 my-4">
        <div className="flex flex-col md:p-3  gap-2">
            <p className="font-bold text-md mb-3">About us </p>
            <p>
              Grocery is the first website in algeria <br/>
             where you can find all grocery shops and products 
            </p>
            </div>
            <div className="flex flex-col p-3  gap-2">
            <p className="font-bold text-md mb-3">Contact  us </p>
            <p>
              for more information concat us on social media   <br/>
              phone: 0667654572 Or : 02345678
            </p>
            </div>
          <div className="flex flex-col md:p-3  gap-2">
            <p className="font-bold text-md mb-3">Our news letter</p>
            <div className=" flex flex-row  gap-1 md:gap-3">
              <input
                type="email"
                placeholder="Email address"
                className=" w-28 md:w-56 md:px-8 px-1 rounded-md  md:py-2"
              ></input>
              <button className="h-fit  px-1 md:py-2 md:px-4 bg-green-600 rounded-md  text-md text-white cursor-pointer">
                Subscribe
              </button>
            </div>
            <p>
              Subscrie to our news letter to see the latest <br/>
              about our company ,our products and services
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-x-6  gap-y-4 border-white border-t py-3 justify-between">
        <img
          src="/images/logoGr.png"
          alt="logo"
          className="hidden   md:flex  md:h-[50px]"
        />
        <div className=" justify-center text-base text-white flex flex-row gap-4 ">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
        <div className=" justify-center text-base text-white flex flex-row gap-4 ">
         <a href=""> <PiInstagramLogoBold/></a>
          <a href=""><FaFacebookSquare/></a>
         <a href=""> <IoLogoLinkedin/></a>
          
        </div>
        <div className=" justify-center  flex   ">

        <img
          src="/images/logoGr.png"
          alt="logo"
          className="md:hidden  h-[50px] w-[50px]"
        /></div>
      </div>
    </div>
  );
};

export default Footer;