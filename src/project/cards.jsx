import React from 'react';

const Cards = ({ name, imageSrc, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className="h-64 w-40 rounded-md cursor-pointer text-black">
        <div className="card-body">
          <img
            src={imageSrc}
            className="h-40 shadow-lg border-2 border-teal-400 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
            alt={name}
          />
          <div className="text-start mt-2">
            <h5 className="card-title text-sm font-bold text-center hover:underline text-gray-400">{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
