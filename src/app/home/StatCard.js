import React  from 'react'


const StatCard = (props) => {
  return (
    <div className="flex flex-col gap-1 border border-green-500 rounded-xl shadow-lg  m-4  md:py-8 px-8 md:px-20 hover:shadow-xl  sm:w-48  md:w-auto">
    
    
     <div className='flex   flex-row-reverse '>
      <div>
    <h3 className="text-center px-2  font-bold text-lg">  {props.title}</h3>
    <p className="text-center px-2 "> {props.Subtitle} </p></div>
    <img className='w-20 h-20' src={props.img} alt={props.img} />
        </div>
        
        
      
    
  </div>
  )
}

export default StatCard