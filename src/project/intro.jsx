import React from 'react'

const intro = ({search,handleSearch}) => {
  return (
    <>
   <div className="text-center font-roboto">
          <h1 className="font-bold text-4xl hover:underline text-teal-400 mb-4 ">WHATS PLAYING IN KARACHI</h1>
          <div className="flex justify-center mb-8 text-lg font-semibold text-gray-400 space-x-4">
            <p className="hover:underline">Now Playing</p>
            <p>|</p>
            <p className="hover:underline">Coming soon</p>
          </div>
          <button className="border-2 border-teal-400 text-teal-400 p-3 font-bold rounded-full shadow-xl hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
            CHECK SHOWTIMES NOW
          </button>
        </div>
    
    
    
    
    </>

  )
}


export default intro