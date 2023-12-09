import React from "react";

const Footer = () => {
  const products =["Autocapture"," Data Gouvernance","Virtual Events","Virtual Users"," Behavioral Analytics","Connect"];
  const explore =["Ressources","Blog","Documents"];
  const company=["About us","Partners","Customers","Contact us"]
  const socialmedia=[
    {
      src:"facebook",
      link:"https://www.facebook.com/spinetnfc/"
    },
    {
      src:"instagram",
      link:"https://www.instagram.com/spinetnfc/"
    },
    {
      src:"linkedin",
      link:"https://www.linkedin.com/company/sarl-spinet-nfc/"
    },
    {
      src:"youtube",
      link:"https://www.youtube.com/channel/UCH0wmLK2nfNo-LhnCiT_j6Q"
    }
  ]
  return (
    <div className="w-full bg-black py-5 md:py-12 px-3 md:px-32">
      <div className="w-full text-white inline-flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className=" w-full inline-flex md:flex-row flex-col items-start justify-between md:my-7 my-4">
        <div className="inline-flex flex-col items-start md:gap-y-3 gap-y-1 my-5 md:my-0">
            <p className="font-bold text-md mb-3">Products</p>
            {products.map((product)=>(
            <p className="router-link-active router-link-exact-active font-medium text-md text-neutral-20 hover:text-white transition-all hover:border-b-white hover:border-b-2">
             {product}
            </p>))}
           
          </div>
          <div className="inline-flex flex-col items-start md:gap-y-3 gap-y-1 my-5 md:my-0">
            <p className="font-bold text-md mb-3">Explore</p>
            {explore.map((exploreEl)=>(
            <p className="router-link-active router-link-exact-active font-medium text-md text-neutral-20 hover:text-white transition-all hover:border-b-white hover:border-b-2">
             {exploreEl}
            </p>))}
           
          </div>
          <div className="inline-flex flex-col items-start md:gap-y-3 gap-y-1 my-5 md:my-0">
            <p className="font-bold text-md mb-3">Company</p>
            {company.map((companyEl)=>(
            <a
              
              href="/"
              className="router-link-active router-link-exact-active font-medium text-md text-neutral-20 hover:text-white transition-all hover:border-b-white hover:border-b-2"
            >
              {companyEl}
            </a>))}
           
          </div>
          <div className="flex flex-col md:p-3  gap-2">
            <p className="font-bold text-md mb-3">Our news letter</p>
            <div className=" flex flex-row  gap-1 md:gap-3">
              <input
                type="email"
                placeholder="Email address"
                className=" w-28 md:w-56 md:px-8 px-1 rounded-md  md:py-2"
              ></input>
              <button className="h-fit  px-1 md:py-2 md:px-4 bg-blue-600 rounded-md  text-md text-white cursor-pointer">
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
          src="/images/logo_expanded.svg"
          alt="spinet_logo"
          className="h-[20px] md:[40px]"
        />
        <div className=" justify-center text-base text-white flex flex-row gap-4 ">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
        <div className=" justify-center text-base text-white flex flex-row gap-4 ">
          {socialmedia.map((media)=>(
          <a href={media.link}>
            <img
              className="h-[25px] md:[45px]"
              src={`/icons/${media.src}.svg`}
              alt={`${media.src} icon`}
            />
          </a>))}
          
        </div>
      </div>
    </div>
  );
};

export default Footer;