import React, { useState } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';


const Over = ({ title, showTime, cinema, closeModal, pic,synopsis }) => {
const currentData = new Date();
const monthIndex = currentData.getMonth();
const dayDate = currentData.getDate();
const months = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"];

const currentMonth = months[monthIndex];
  
const [selectedDate, setSelectedDate] = useState(`${dayDate} ${currentMonth}`);

// Generate an array of the next 7 days
const generateNext7Days = () => {
  const dates = [];
  for (let i = 0; i < 3; i++) {
    const futureDate = new Date();
    futureDate.setDate(currentData.getDate() + i); // Increment the date
    const day = futureDate.getDate();
    const month = months[futureDate.getMonth()];
    dates.push(`${day} ${month}`);
  }
  return dates;
};

// In your component
const dateOptions = generateNext7Days();

  return (
    <>
      {/* Overlay */}


      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center transition-opacity duration-300"
        onClick={closeModal}
      >
        {/* Modal Content */}
        <div
  className="relative max-w-2xl max-h-[80vh] bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105 overflow-y-auto"
  onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-teal-400">Movie Preview</h2>
            <button
              onClick={closeModal}
              className="text-red-500 font-bold text-2xl hover:text-red-700 transition duration-300"
            >
              X
            </button>
          </div>

          {/* Movie Information */}
          <div className="flex gap-6">
            <img
              src={pic}
              alt="Movie Poster"
              className="rounded-lg h-72 w-48 object-cover shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <div className="text-gray-300 space-y-4">
              <h3 className="text-xl font-semibold">{title}</h3>
              <button className="text-xs font-semibold bg-teal-600 text-white py-1 px-3 rounded-md shadow-md hover:bg-teal-500 transition duration-300">
                Action
              </button>
            </div>
          </div>

          {/* Show Details */}
          <div className="border-t border-gray-700 mt-6 pt-4">
            <h3 className="text-lg font-medium text-gray-200">Show Details</h3>
            <p className="font-medium text-sm text-gray-400 mt-2">Date</p>

            {/* Date Dropdown */}
            <Menu as="div" className="relative inline-block mt-2">
              <div>
                <MenuButton className="flex justify-between items-center w-full bg-gray-700 text-gray-200 px-4 py-2 rounded-md shadow-sm hover:bg-gray-600 transition duration-300">
                  {selectedDate}
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </MenuButton>
              </div>

              <MenuItems className="absolute mt-2 w-48 rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {dateOptions.map((date, index) => (
                    <MenuItem key={index} onClick={() => setSelectedDate(date)}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-gray-600 text-teal-400' : 'text-gray-300'
                          } block w-full text-left px-4 py-2 text-sm`}
                        >
                          {date}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            <h5 className="font-medium text-sm text-gray-400 mt-4">{cinema}</h5>
            <button className="bg-teal-600 text-white py-2 px-4 text-sm font-medium rounded-md mt-2 shadow-sm hover:bg-teal-500 transition duration-300">
              {showTime}
            </button>
          </div>

          {/* Movie Synopsis */}
          <div className="border-t border-gray-700 mt-6 pt-4">
            <h3 className="text-lg font-medium text-gray-200">Synopsis</h3>
            <p className="mt-2 text-sm text-gray-400">
            {synopsis || "Plot information not available"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Over;
