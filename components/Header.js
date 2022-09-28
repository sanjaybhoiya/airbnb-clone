import React from 'react';
import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UserIcon,
    MenuIcon,
} from '@heroicons/react/solid';
import { useState } from "react";
import { useRouter } from "next/router";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header({placeholder}) {

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const Submit = () => {
      router.push({
        pathname: "/search",
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          noOfGuests,
        },
      });
    };
    const Cancel = () => {
      setSearchInput("");
    };
  
    const Button = ({ text, color, submit }) => (
      <button
        className={`text-md font-semibold flex-grow font-mono border-2 rounded-lg py-2 hover:shadow-md shadow-sm ${
          color && "text-red-400"
        }`}
        onClick={submit ? Submit : Cancel}
      >
        {text}
      </button>
    );
  
    const selectionRange = {
      startDate,
      endDate,
      key: "Selection",
    };
  
    const handleSelect = (ranges) => {
      setStartDate(ranges.Selection.startDate);
      setEndDate(ranges.Selection.endDate);
    };
  
    

    return (
        <header className="sticky top-0 x-50 items-center 
      md:grid md:grid-cols-3 flex bg-white shadow-md p-3
       md:px-10 z-50">
          
          
            {/* left logo */}

        <div onClick={() => { router.push("/"); }}
          className='relative flex items-center h-10 
          cursor-pointer my-auto '>

                <Image
                    src="https:links.papareact.com/qd3"
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />

            </div>

            {/* center search */}
          
      
            <div className="flex flex-grow ml-4 items-center border-2 rounded-full py-2 md:shadow-sm focus-within:shadow-md">
                <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}


            className="flex-grow pl-5
                    bg-transparent outline-none"
            type="text"
            placeholder={placeholder || "Start your search"}
                />
                <SearchIcon className="h-8  bg-red-400 text-white rounded-full p-2 cursor-pointer hidden lg:inline-flex md:mx-2" />
            </div>

            {/* right ham */}

            <div className="space-x-4 items-center justify-end text-gray-500 hidden md:flex">
        <p className="cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-full hidden lg:inline">
          Become a host
        </p>
        <GlobeAltIcon className="h-10 cursor-pointer hover:bg-gray-100 p-2 rounded-full hidden md:inline" />
        <div className="items-center border-2 space-x-2 rounded-full p-2 cursor-pointer hover:shadow-md hidden md:flex">
        <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
                </div>
            </div>
            
            {/* Search Input Calender */}
            {searchInput && (
                <div className="md:flex flex-col col-span-3 mx-auto mt-3 hidden">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#fd5b61"]}
                        onChange={handleSelect}
                    />


                    {/* Number of guests */}
            <div className="flex items-center mb-4 ml-5">
            <h2 className="text-2xl font-mono font-semibold text-gray-600 flex-grow">
                            Number of Guests
                            
                        </h2>
                        
            <UserIcon className="h-5 mr-4 text-gray-600" />
            
             <input
              type="number"
              className="w-20 pl-2 text-lg outline-none text-red-400 px-2 rounded-md"
              min={1}
              value={noOfGuests}
              onChange={(e) => {
                setNoOfGuests(e.target.value);
              }}
             />
                    </div>

                    <div className="flex space-x-1 ml-5">
                        <Button text="Cancel"/>
                        <Button text="Submit" color submit/>
          </div>
                </div>
            )}
                </header>
    );
}

export default Header;