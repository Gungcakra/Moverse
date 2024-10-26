import React, { useEffect, useState } from "react";
import Navbar from '../components/NavBar';
import "../assets/css/Home.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
function Home() {
  const [popularMovie, setPopularMovie] = useState([]);
  const [newMovie, setNewMovie] = useState([]);
  const [movieHorror, setMovieHorror] = useState([]);
  const [dramaKorea, setDramaKorea] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchPopularMovie = async () => {
  //     try {
  //       const cachedData = localStorage.getItem('popularMovies');
  //       const cachedTime = localStorage.getItem('cacheTime');
  //       const currentTime = new Date().getTime();
  //       const cacheDuration = 1000 * 60 * 60; // Durasi cache (1 jam)
  
  //       // Jika ada data cache, tampilkan terlebih dahulu
  //       if (cachedData) {
  //         setPopularMovie(JSON.parse(cachedData));
  //         setLoading(false);
  //       }
  
  //       // Jika data cache sudah kadaluarsa atau tidak ada, fetch data baru
  //       if (!cachedTime || currentTime - cachedTime >= cacheDuration) {
  //         const response = await fetch('https://moverse-api.vercel.app/api/movie-popular');
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         const result = await response.json();
  
  //         // Simpan hasil fetch ke cache
  //         localStorage.setItem('popularMovies', JSON.stringify(result.data));
  //         localStorage.setItem('cacheTime', currentTime.toString());
  
  //         // Update state dengan data terbaru
  //         setPopularMovie(result.data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching popular movies:', error);
  //     }
  //   };
  
  //   // Panggil fungsi fetch
  //   fetchPopularMovie();
  // }, []);
  
  useEffect(() => {
    const fetchPopularMovie = async () => {
      try {
        const response = await fetch('https://moverse-api.vercel.app/api/movie-popular');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setPopularMovie(result.data);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchPopularMovie();
  }, []);

  useEffect(() => {
    const fetchNewMovie = async () => {
      try {
        const response = await fetch('https://moverse-api.vercel.app/api/movie-new');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setNewMovie(result.slice(0,14 ));
      } catch (error) {
        console.error('Error fetching popular movies:', error); 
      } finally {
        setLoading(false);
      }
    };
    fetchNewMovie();
  }, []);

  useEffect(() => {
    const fetchMovieHorror = async () => {
      try {
        const response = await fetch('https://moverse-api.vercel.app/api/movie-horror');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setMovieHorror(result);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchMovieHorror();
  }, []);

  useEffect(() => {
    const fetchDramaKorea = async () => {
      try {
        const response = await fetch('https://moverse-api.vercel.app/api/movie-korea');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setDramaKorea(result);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchDramaKorea();
  }, []);

  const getTahun = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
};

  const judulSingkat = (title, maxLength) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };
  return (
    <>
      <div className="home-container h-auto w-full pb-3 pl-[10rem] bg-black p-4" style={{ minHeight:'100vh' }}>


        {/* NEW MOVIE */}
        <div className="container mx-auto flex justify-center flex-col items-center">
          <div className="container" style={{maxWidth:'95%', minHeight:'200px'}}>
          <h1 className="ml-5 text-white text-3xl font-medium">Movie <span style={{ color:'#068FFF' }}>Baru</span></h1>
            <div className="container flex flex-wrap justify-center items-center">
            {loading ? (
             Array.from({ length: 14}).map((_, index) => {
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
            newMovie.map((ml, index) => (
              <Link
                key={index}
                to={ml.link.includes('/tv') ? `/tv-detail/${ml.link.split('/')[3]}` : `/detail/${ml.link.split('/')[3]}`}
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
        </div>




{/* HORROR MOVIE */}
<div className="container mx-auto flex justify-center flex-col items-center">
  <div className="container" style={{ maxWidth: '95%', minHeight:'200px' }}>
    <h1 className="ml-5 text-white text-3xl font-medium">
      Movie <span style={{ color: '#008CFFFF' }}>Horror</span>
    </h1>
    {loading ? (
      <div className="flex overflow-x-auto space-x-4">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="flex flex-none bg-gray-900 shadow-lg items-center p-4 rounded-lg animate-pulse"
            style={{ width: '300px', height: '150px', margin: '10px' }}
          >
            {/* Skeleton for Image */}
            <div
              className="bg-gray-700 rounded-md"
              style={{ width: '100px', height: '130px', marginRight: '5px' }}
            ></div>

            {/* Skeleton for Text Content */}
            <div className="flex-grow" style={{ height: '100%' }}>
              <div className="w-3/4 h-5 bg-gray-700 rounded-md mb-2"></div>
              <div className="w-1/2 h-5 bg-gray-700 rounded-md mb-2"></div>
              <div className="w-1/2 h-5 bg-gray-700 rounded-md mb-2"></div>
              <div className="w-1/3 h-5 bg-gray-700 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="card-container flex overflow-x-auto space-x-4">
        {movieHorror.map((pm, index) => (
          <Link
            to={`/anim-detail/${pm.link.split('/')[3]}`}
            className="flex flex-none bg-gray-900 card-movie shadow-lg items-center p-4 rounded-lg hover:shadow-gray-500 hover:bg-gray-800"
            key={index}
            style={{ width: '300px', height: '150px', margin: '10px' }}
          >
            <img
              className="object-cover rounded-md"
              style={{ width: '100px', height: '130px', marginRight: '5px' }}
              src={pm.image}
              alt={judulSingkat(pm.title, 15)}
            />
            <div className="flex-grow" style={{ height: '100%' }}>
              <div className="font-bold text-base text-white">
                {judulSingkat(pm.title, 15)}
              </div>
              <p className="text-white text-base">
                <FontAwesomeIcon icon={faStar} style={{ color: '#068FFF' }} /> {pm.rating || '-'}
              </p>
              <p className="text-white text-base">
                <FontAwesomeIcon icon={faClock} style={{ color: '#068FFF' }} /> {pm.duration || '-'}
              </p>
              <p className="text-white text-base">
                <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#068FFF' }} /> {getTahun(pm.releaseDate) || '-'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    )}
  </div>
        </div>

        {/* DRAMA KOREA */}
        <div className="container mx-auto flex justify-center flex-col items-center">
          <div className="container" style={{maxWidth:'95%'}}>
          <h1 className="ml-5 text-white text-3xl font-medium">Drama <span style={{ color:'#068FFF' }}>Korea</span></h1>
          {loading ? (
            <div className="flex overflow-x-auto space-x-4">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="flex flex-none bg-gray-900 shadow-lg items-center p-4 rounded-lg animate-pulse"
            style={{ width: '300px', height: '150px', margin: '10px' }}
          >
            {/* Skeleton for Image */}
            <div
              className="bg-gray-700 rounded-md"
              style={{ width: '100px', height: '130px', marginRight: '5px' }}
            ></div>

            {/* Skeleton for Text Content */}
            <div className="flex-grow" style={{ height: '100%' }}>
              <div className="w-3/4 h-5 bg-gray-700 rounded-md mb-2"></div>
              <div className="w-1/2 h-5 bg-gray-700 rounded-md mb-2"></div>
              <div className="w-1/2 h-5 bg-gray-700 rounded-md mb-2"></div>
              <div className="w-1/3 h-5 bg-gray-700 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
          ) : (
            <div className="card-container flex overflow-x-auto space-x-4">
              {dramaKorea.map((pm, index) => (
                <Link
          to={`/detail/${pm.link.split('/')[4]}`}
          className="flex flex-none bg-gray-900 card-movie shadow-lg items-center p-4 rounded-lg hover:shadow-gray-500 hover:bg-gray-800" 
          key={index} 
          style={{ width: '300px', height: '150px', margin: '10px' }}
        >
          <img
            className="object-cover rounded-md"
            style={{ width: '100px', height: '130px', marginRight: '5px' }}
            src={pm.image}
            alt={judulSingkat(pm.title, 15)}
          />
          <div className="flex-grow" style={{ height: '100%' }}>
            <div className="font-bold text-base text-white">
              {judulSingkat(pm.title, 15)}
            </div>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faStar} style={{ color: '#068FFF' }} /> {pm.rating || '-'}
            </p>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faClock} style={{ color: '#068FFF' }} /> {pm.duration || '-'}
            </p>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#068FFF' }} /> {getTahun(pm.releaseDate) || '-'}
            </p>
          </div>
        </Link>
              ))}
            </div>
          )}
          </div>
        </div>


      </div>
    </>
  );
}

export default Home;
