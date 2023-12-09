"use client"
import React ,{useState} from 'react'
import Navbar from '../home/Navbar'
import { SlBasket } from "react-icons/sl";
import basketItems from '../temp/basket.json'
import { BsCashCoin } from "react-icons/bs";
import { Butterfly_Kids } from 'next/font/google';


const page = () => {
    const [showModal, setShowModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCheckboxChange = (productId) => {
    const isSelected = selectedProducts.includes(productId);
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const calculateTotal = () => {
    // Calculate the total sum of selected products
    const total = basketItems
      .filter((product) => selectedProducts.includes(product.id))
      .reduce((sum, product) => sum + product.price, 0);
    return total;
  };
  const modalOverlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Semi-transparent black */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, /* Ensure modal is above other elements */
  };

  const modalStyles = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '12px',
    width: '70%',
    maxWidth: '800px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    position: 'relative',
  };
  return (
    <div className='flex flex-col bg-green-50 h-min-screen'>
        <Navbar/>
   <div className='flex flex-row md:m-6 font-semibold  justify-center   text-green-600  text-lg md:text-6xl'>
   <SlBasket /> <h1>My basket </h1>
        </div>
        <div className="flex flex-wrap justify-center mt-16">
        {basketItems.map((product, key) => (
          <div className=" gap-1 flex  justify-center  bg-white flex-row-reverse rounded-xl shadow-lg  m-4  md:py-8 px-4    ">
            <div className=" flex flex-col text-center px-2">
              <p className=" text-xl font-bold text-green-700">
               
                {product.brand}{" "}
              </p>
              <p className=" font-semibold">{product.name}</p>
              <p> {product.type} </p>
              <p className="flex flex-row justify-center gap-3 ">
                <BsCashCoin className="mt-1" />
                {product.price}
              </p>
              <button className="rounded-md md:mt-3 bg-green-600 p-1 text-white hover:ease-in-out  ">Remove </button>

            </div>
            <div className="flex flex-col gap-4">
              <img
                className="w-20 h-20"
                src={product.image}
                alt={product.img}
              />
            </div>
          </div>
        ))}
        
      </div>
      <div className='flex justify-center '>
        <button onClick={toggleModal} className="rounded-md md:mt-3 bg-white p-4 md:px-12 border-green-500 border text-green-600 hover:ease-in duration-300">Order</button>

        {showModal && (
        <div style={modalOverlayStyles}>
          <div style={modalStyles}>
            <span onClick={toggleModal} className='font-bold text-3xl'>
              &times;
            </span>
            <h2>Select Products</h2>
            <form>
              {basketItems.map((product) => (
                <div key={product.id}>
                  <label className='text-lg font-medium'>
                    <input
                      type='checkbox'
                      value={product.id}
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleCheckboxChange(product.id)}
                    />
                    {product.name}
                  </label>
                </div>
              ))}
              <p>Total: {calculateTotal()} DA </p>
              <button
                type='button'
                onClick={toggleModal}
                className='rounded-md md:mt-3 flex justify-center text-white px-4 md:px-12 bg-green-500 border'
              >
                Order now
              </button>
            </form>
          </div>
          </div>
        )}
      </div></div>
  )
}

export default page