import React from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";


const Store = (props) => {

  const router= useRouter();
  const handleClick =()=>{
    router.push(`/stores/${props.id}`)

  }
  return (
    <div className=" gap-1 flex   bg-white flex-row-reverse rounded-xl shadow-lg  m-4  md:py-8 px-2  hover:shadow-2xl  sm:w-52  ">
      
        <div>
          <h3 className="text-center px-2  font-bold text-lg">
            
            {props.title}
          </h3>
          <p className="text-center px-2 "> {props.rating} </p>
          <p className="text-center px-2 "> {props.commune} </p>
          <p className="text-center px-2 "> {props.wilaya} </p>
          <p
            className={`text-center px-2 ${
              props.open ? "text-green-600" : "text-red-600"
            } `}
          >
           
            {props.open ? "Open" : "Close"}{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4">
        <img className="w-20 h-20" src={props.img} alt={props.img} />
        
          <button onClick={handleClick} className="rounded-md bg-green-500 p-1 text-white">Details</button>
       </div>
      </div>
   
  );
};

export default Store;
/**<Link href={`/stores/${props.id}`}>
          <button className="rounded-md bg-green-500 p-1 text-white">Details</button>
        </Link> */