import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const movies = ['Deadpool   wolverine', 'Borderlands', 'Siccin 7','It ends with us','alien romulus']; // Example movie titles
        const apiKey = '93dc8c43'; // Replace with your OMDB API key
        const fetchedImages = await Promise.all(
          movies.map(async (movie) => {
            const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`);
            const data = await response.json();
            return data.Poster; // Assuming the Poster field has the image URL
          })
        );
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="carouselExampleControls" className="relative">
      <div className="relative w-full overflow-hidden flex justify-center">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative float-left transition-transform duration-[600ms] ease-in-out ${
              index === activeIndex ? 'block' : 'hidden'
            }`}
          >
            <img
              src={src}
              className="h-screen w-screen object-fill"
              alt={`Slide ${index}`}
              style={{ maxHeight: '100vh' }} // Ensures the image takes up half of the viewport height
            />
          </div>
        ))}
      </div>
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-in-out hover:text-white hover:opacity-90"
        type="button"
        onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
        aria-label="Previous Slide"
      >
        <span className="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-in-out hover:text-white hover:opacity-90"
        type="button"
        onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)}
        aria-label="Next Slide"
      >
        <span className="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Hero;
