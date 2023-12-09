"use client";
import React, { useState ,useEffect } from "react";
import storesData from "../../temp/products.json"; // Import your store data
import { BsCashCoin } from "react-icons/bs";
import Navbar from "../../home/Navbar";
import { MdOutlineFilterList } from "react-icons/md";


const Page = ({params}) => {
  const idProduct=params.id
  console.log(storesData[idProduct-1].products)
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  useEffect(() => {
    const prices = storesData[idProduct-1].products.map((product) => product.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    setMinPrice(min.toString());
    setMaxPrice(max.toString());
  }, []);
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    setFilterValue("");
    setMinPrice("");
    setMaxPrice("");
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    setSelectedFilter("");
    setFilterValue("");
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    setSelectedFilter("");
    setFilterValue("");
  };
  const getUniqueItems = (key) => {
    return [...new Set(storesData[idProduct-1].products.map((product) => product[key]))];
  };

  const filteredProducts = storesData[idProduct-1].products.filter((product) => {
    if (selectedFilter === "name") {
      return product.name.toLowerCase().includes(filterValue.toLowerCase());
    } else if (selectedFilter === "brand") {
      return product.brand.toLowerCase().includes(filterValue.toLowerCase());
    } else if (selectedFilter === "type") {
      return product.type.toLowerCase().includes(filterValue.toLowerCase());
    } else if (minPrice !== "" && maxPrice !== "") {
      return (
        product.price >= parseFloat(minPrice) &&
        product.price <= parseFloat(maxPrice)
      );
    }
    return true;
  });
  const uniqueItems = selectedFilter ? getUniqueItems(selectedFilter) : [];
  const uniquenames = [
    ...new Set(storesData[idProduct-1].products.map((product) => product.name)),
  ];
  const uniquebrands = [
    ...new Set(storesData[idProduct-1].products.map((product) => product.brand)),
  ];
  const uniquetypes = [
    ...new Set(storesData[idProduct-1].products.map((product) => product.type)),
  ];


return(
  <div className="  min-h-screen bg-green-50">
  <div className="flex flex-col   w-full justify-center">
    <Navbar/>
    <div className="flex flex-col  md:flex-row bg-green-600 justify-center">
      <h1 className=" hidden text-xl py-4 font-bold text-white mx-6 md:flex flex-row "> <MdOutlineFilterList className="text-white" />Filter your result </h1>
    <div className='md:relative '>
      <select
        value={selectedFilter}
        onChange={handleFilterChange}
        className="px-24  py-2 rounded-xl text-center font-semibold md:text-lg m-2 md:m-6 bg-white border-2  border-gray-300"
      >
        <option value="">Filter by </option>
        <option value="name">name</option>
        <option value="brand">brand</option>
        <option value="type">type</option>
      </select><div className="hidden md:absolute top-0 left-8 mt-7">
          <MdOutlineFilterList className="text-gray-400" />
        </div>
      </div>

      {selectedFilter && (
        <select
          value={filterValue}
          onChange={handleFilterValueChange}
          className="md:px-24 px-4 py-2 rounded-xl text-center font-semibold md:text-lg m-2 md:my-6 bg-white border-2  border-gray-300"
        >
          <option value="">Select {selectedFilter}</option>
          {uniqueItems.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}

      <input
        type="number"
        value={minPrice}
        onChange={handleMinPriceChange}
        placeholder="Min Price"
        className="md:px-4 py-2 rounded-xl bg-white border-2 m-2 md:m-6 border-gray-300"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        placeholder="Max Price"
        className="px-4 py-2 rounded-xl bg-white border-2 m-2 md:m-6 border-gray-300"
      />
    </div>

    <div className="flex flex-wrap  justify-items-center justify-center mt-16">
      {filteredProducts.map((product, key) => (
        <div className=" gap-1 bg-white flex  justify-center  flex-row-reverse rounded-xl shadow-lg  m-4   md:py-8 px-4    ">
          <div className=" flex flex-col text-center px-2">
            <p className=" text-xl font-bold text-green-700">
              {" "}
              {product.brand}{" "}
            </p>
            <p className=" font-semibold">{product.name}</p>
            <p> {product.type} </p>
            <p className="flex flex-row justify-center gap-3 ">
              <BsCashCoin className="mt-1" />
              {product.price}
            </p>
            <button className="rounded-md md:mt-3 bg-green-600 p-1 text-white hover:ease-in-out  ">Add to basket</button>

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
  </div></div>
);
};

export default Page;
