import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import Over from "./over"; // Assuming Over is your modal component

const cinemaDetail = ({jsonData,location}) => {
  const [modal, setModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [poster, setPoster] = useState("");
  const [plot, setPlot] = useState("");

  const openModal = (movie, showtimes) => {
    setSelectedMovie({ movie, showtimes });
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedMovie(null);
  };

  //! turning json into an array then taking out the individual movie names.
  const data = jsonData;
  const movieTitles = data.movies.map((movie) => movie.title);
  const unique = new Set(movieTitles);
  const movieNames = [...unique];

  useEffect(() => {
    const fetchImg = async () => {
      let fetchPoster = {};
      let fetchPlot = {}
  
      const cleanMovieTitle = (title) => {
        const keywordsToRemove = ['(English Subtitled)','(Indonesian)','(Pakistani)','(Pakistani Movie)', '(Urdu Dubbed)', '(Urdu)','(Remastered)', '(Director\'s Cut)'];
        let cleanedTitle = title;
        keywordsToRemove.forEach(keyword => {
          cleanedTitle = cleanedTitle.replace(keyword, '').trim();
        });
        return cleanedTitle;
      };
  
      for (let movie of movieNames) {
        let cleanedTitle = cleanMovieTitle(movie);
        let url = `https://www.omdbapi.com/?t=${encodeURIComponent(cleanedTitle)}&apikey=93dc8c43`;
        let response = await fetch(url);
        let data = await response.json();
        fetchPoster[cleanedTitle] = data.Poster;   
        fetchPlot[cleanedTitle] = data.Plot;


      }

      setPoster(fetchPoster);
      setPlot(fetchPlot);
    };
    
    fetchImg();
  }, [movieNames]);

  return (
    <>
      <div className="bg-gray-900 min-h-screen p-8">
        <h2 className="font-bold text-4xl text-gray-100 text-center mb-10">{location}</h2>
        <div className="flex justify-center">
          <div
            id="animated-div"
            className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 animate-fadeIn"
          >
            {movieNames.map((movie, index) => {
              const showtimes = data.movies
                .filter((m) => m.title === movie)
                .flatMap((m) => m.showtimes);

              return (
                <MovieCard
                  key={index}
                  title={movie}
                  pic={poster[movie]}
                  onClick={() => openModal(movie, showtimes)}
                  className="transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
                />
              );
            })}
          </div>
        </div>
      </div>

      {modal && selectedMovie && (
        <Over
          title={selectedMovie.movie}
          showTime={selectedMovie.showtimes.join(", ")}
          cinema={location}
          pic={poster[selectedMovie.movie]}
          synopsis = {plot[selectedMovie.movie]}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default cinemaDetail;
