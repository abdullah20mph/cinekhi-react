import React from 'react';

const movieCard = ({title,onClick,pic}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="h-64 w-40 rounded-md cursor-pointer text-white">
        <div className="card-body ">
          <img
            src={pic}
            className="h-40 shadow-lg border-2 border-teal-400 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
            alt={title}
          />
          <div className="text-start mt-2">
            <h5 className="card-title text-sm font-medium text-start text-gray-400">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default movieCard;
