import React, { useState } from "react";
import Header from "./project/header";
import Intro from "./project/intro";
import Cards from "./project/cards";
import Footer from "./project/footer";

import Hero from "./project/hero";
import Cinema from "./project/cinemaDetail";
import jsonDataDHA from "./project/json/showtimesDHA.json";
import jsonDataAskari from "./project/json/showtimesAskari.json";
import jsonDataCinepax from "./project/json/showtimesCinepax.json";
import jsonDataBahria from "./project/json/showtimesBahria.json";
import jsonDataArena from "./project/json/showtimesArena.json";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const renderSelectedMovie = () => {
    switch (selectedMovie) {
      case "NueplexDHA":
        return <Cinema jsonData={jsonDataDHA} location={"Nueplex DHA"} />;
      case "Arena":
        return <Cinema jsonData={jsonDataArena} location={"Arena"} />;
      case "GoldRaiha":
        return <Cinema jsonData={jsonDataBahria} location={"Gold Raiha"} />;
      case "Cinepax":
        return <Cinema jsonData={jsonDataCinepax} location={"Cinepax"} />;
      case "NueplexAskari":
        return <Cinema jsonData={jsonDataAskari} location={"Nueplex Askari"} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      {!selectedMovie && <Hero />}
      <div className="bg-gray-900 text-white py-12">
        {!selectedMovie && <Intro />}

        {!selectedMovie ? (
          <div className="flex justify-center mt-8">
            <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
              <Cards
                name="Nueplex DHA"
                imageSrc="src/assets/leisure-cine-gold-gi-2-s.jpg"
                onClick={() => setSelectedMovie("NueplexDHA")}
              />
              <Cards
                name="Arena"
                imageSrc="src/assets/arena.jpeg"
                onClick={() => setSelectedMovie("Arena")}
              />
              <Cards
                name="Gold Raiha Cinema"
                imageSrc="src/assets/cinema-2.png"
                onClick={() => setSelectedMovie("GoldRaiha")}
              />
              <Cards
                name="Cinepax"
                imageSrc="src/assets/cinemax-ocean-mall.jpg"
                onClick={() => setSelectedMovie("Cinepax")}
              />
              <Cards
                name="Nueplex Askari"
                imageSrc="src/assets/Asakri-cinema-hall.png"
                onClick={() => setSelectedMovie("NueplexAskari")}
              />
            </div>
          </div>
        ) : (
          <div className="transition-opacity duration-500 opacity-100 ">
            {renderSelectedMovie()}
            <div className="flex justify-center items-center">
              <button
                onClick={() => setSelectedMovie(null)}
                className="text-xs font-semibold bg-teal-600 text-white py-1 px-3 rounded-md shadow-md hover:bg-teal-500 transition duration-300"
              >
                Back to Movies
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
