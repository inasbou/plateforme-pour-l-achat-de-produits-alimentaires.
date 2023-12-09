import React from "react";
import Link from "next/link";
const Navbar = () => {
  

  return (
    <div className=" lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
         <img  src="/images/logoGr.png"  className="w-[30px] h-[30px"/>
          <Link className="navbar__link relative" href="/">
            Home
          </Link>
          <Link className="navbar__link relative" href="/shops">
           Shops
          </Link>
          <Link className="navbar__link relative" href="#footer">
           About Us
          </Link>
          <Link className="navbar__link relative" href="/basket">
            My basket
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
