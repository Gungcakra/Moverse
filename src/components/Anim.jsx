import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Anim() {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchAnim = async () => {
        try {
          const response = await fetch('https://moverse-api.vercel.app/api/movie-anim');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setMovieList(result);
        } catch (error) {
          console.error('Error fetching movies:', error);
        } finally {
          setLoading(false); // Set loading to false once data is fetched
        }
      };
      fetchAnim();
    }, []);
  
    const judulSingkat = (title, maxLength) => {
      return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
    };
    return (
      <>
        <div className="container-fluid pl-[10rem] h-screen flex flex-col min-w-full items-center pb-3 bg-black " style={{ minHeight:'100vh',height:'max-content' }}>
          <h1 className="text-white text-4xl py-5  font-medium">
            Animaton <span className="text-[#008CFFFF]">Movie</span>
          </h1>
  
          <div className="movie-list-container container-fluid min-w-full flex justify-center flex-wrap">
            {loading ? (
               Array.from({ length: 41}).map((_, index) => {
              const randomDelay = Math.random() * 0.5; 
              const randomDuration = Math.random() * 1 + 1; 
  
              return (
                <div
                  key={index}
                  className="card m-2 mx-3 w-[10rem] h-[15rem] bg-gray-900 rounded-md overflow-hidden flex flex-col"
                  style={{
                    animation: `pulse ${randomDuration}s infinite`,
                    animationDelay: `${randomDelay}s`,
                  }}
                >
                  <div className="bg-gray-700 h-2/3 rounded-md"></div>
                  <div className="card-title p-1">
                    <div className="bg-gray-700 h-4 w-full rounded-md"></div>
                  </div>
                </div>
              );
            })
            ) : (
              movieList.map((ml, index) => (
                <Link
                  key={index}
                  to={ml.link.includes('/tv') ? `/tv-detail/${ml.link.split('/')[3]}` : `/anim-detail/${ml.link.split('/')[3]}`}
                  className="card m-2 w-[10rem] h-[15rem] bg-gray-900 rounded-md overflow-hidden flex flex-col hover:shadow-gray-500"
                >
                  <img
                    src={ml.image}
                    alt={ml.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-title">
                    <p className="text-white text-center p-2">{judulSingkat(ml.title,15)}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </>
    );
}

export default Anim