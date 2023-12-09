"use client";
import React, { useState, useEffect } from 'react';
import shops from '../temp/shops.json';
import Store from './Store';
import {IoSearchOutline} from 'react-icons/io5';
import { MdOutlineFilterList } from "react-icons/md";

const Shops = () => {
  const [selectedWilaya, setSelectedWilaya] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('');
  const [wilayas, setWilayas] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Extract unique wilayas from shops data
  useEffect(() => {
    const uniqueWilayas = [...new Set(shops.map((shop) => shop.wilaya))];
    setWilayas(uniqueWilayas);
  }, []);

  // Update communes when a wilaya is selected
  useEffect(() => {
    if (selectedWilaya) {
      const wilayaCommunes = [...new Set(shops
        .filter((shop) => shop.wilaya === selectedWilaya)
        .map((shop) => shop.commune))];
      setCommunes(wilayaCommunes);
    } else {
      setCommunes([]);
    }
    setSelectedCommune('');
  }, [selectedWilaya]);

  // Filter shops based on selected wilaya and commune
  useEffect(() => {
    let filteredShops = shops;

    if (selectedWilaya) {
      filteredShops = filteredShops.filter((shop) => shop.wilaya === selectedWilaya);
    }

    if (selectedCommune) {
      filteredShops = filteredShops.filter((shop) => shop.commune === selectedCommune);
    }

    if (searchTerm) {
      filteredShops = filteredShops.filter(
        (shop) => shop.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setSearchResults(filteredShops);
  }, [selectedWilaya, selectedCommune, searchTerm]);

  const handleWilayaChange = (e) => {
    setSelectedWilaya(e.target.value);
    setSearchTerm('');
  };

  const handleCommuneChange = (e) => {
    setSelectedCommune(e.target.value);
    setSearchTerm('');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSelectedWilaya('');
    setSelectedCommune('');
  };

  return (
    <div className='flex justify-center  min-w-screen min-h-screen bg-green-50 flex-col items-center '>
      <div className='flex flex-row mt-6 gap-6'>
      <div className=" relative   ">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={handleSearch}
            className="border-2  border-gray-300 rounded-2xl md:pl-8  px-2 md:pr-4 py-2 "
          />
          <div className="absolute top-0 left-2 mt-3">
            <IoSearchOutline className="text-gray-400" />
          </div>
        </div>
        <div className='relative'>
        <select value={selectedWilaya} onChange={handleWilayaChange}  className="pl-8 p-2 rounded-xl bg-white border-2  border-gray-300">
          <option value='' >Filter by  Wilaya</option>
          {wilayas.map((wilaya, index) => (
            <option key={index} value={wilaya}>
              {wilaya}
            </option>
          ))}
        </select>
        <div className="absolute top-0 left-2 mt-3">
            <MdOutlineFilterList className="text-gray-400" />
          </div>
        </div>
        {selectedWilaya && (
          <select value={selectedCommune} onChange={handleCommuneChange} className="pl-8 p-2 rounded-xl bg-white border-2  border-gray-300" >
            <option value=''>Select Commune</option>
            {communes.map((commune, index) => (
              <option key={index} value={commune}>
                {commune}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className='flex flex-wrap jsutify-center '>
        {searchResults.map((shop, index) => (
          <Store
            id={shop.id}
            key={index}
            title={shop.title}
            rating={shop.rating}
            wilaya={shop.wilaya}
            commune={shop.commune}
            open={shop.open}
            img={shop.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Shops;

