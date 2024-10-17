import React, { useEffect, useState } from "react";
import Navbar from '../components/NavBar';
import "../assets/css/Home.css"
function Home() {
  const [popularMovie, setPopularMovie] = useState([]);
  const [newMovie, setNewMovie] = useState([]);
  const [movieIndo, setMovieIndo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularMovie = async () => {
      try {
        const response = await fetch('https://moverse-api.vercel.app/api/movie-popular');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setPopularMovie(result.data); // Akses array dari result.data
      } catch (error) {
        console.error('Error fetching popular movies:', error); // Tangani error
      } finally {
        setLoading(false); // Set loading menjadi false setelah fetch selesai
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
        setNewMovie(result); // Akses array dari result.data
      } catch (error) {
        console.error('Error fetching popular movies:', error); // Tangani error
      } finally {
        setLoading(false); // Set loading menjadi false setelah fetch selesai
      }
    };
    fetchNewMovie();
  }, []);

  useEffect(() => {
    const fetchMovieIndo = async () => {
      try {
        const response = await fetch('https://moverse-api.vercel.app/api/movie-indo');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setMovieIndo(result); // Akses array dari result.data
      } catch (error) {
        console.error('Error fetching popular movies:', error); // Tangani error
      } finally {
        setLoading(false); // Set loading menjadi false setelah fetch selesai
      }
    };
    fetchMovieIndo();
  }, []);

  return (
    <>
      <div className="container bg-black h-auto w-100">
        <Navbar />
        <h1 className="text-center text-white text-3xl mb-4">Sedang Populer</h1>

        {/* POPULAR MOVIE */}
        <div className="container mx-auto">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <div className="flex flex-wrap justify-center m-0">
              {popularMovie.map((pm, index) => (
                <div className="overflow-hidden shadow-lg flex flex-col items-center" key={index} style={{ width: '170px',height:'250px' }}>
                  <img 
                    className="img-pm"
                    style={{ width:'80%',height:'auto' }} 
                    src={pm.image} 
                    alt={pm.title} 
                  />
                  <div className="px-2 text-center">
                    <div className="font-bold text-sm text-white">{pm.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* NEW MOVIE */}
        <div className="container mx-auto">
            <h1 className="text-center text-white text-3xl mb-4 mt-4">Movie Baru</h1>
            {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <div className="flex flex-wrap justify-center m-0">
              {newMovie.map((pm, index) => (
                <div className="overflow-hidden shadow-lg flex flex-col items-center" key={index} style={{ width: '170px',height:'250px' }}>
                  <img 
                    className="img-pm"
                    style={{ width:'80%',height:'auto' }} 
                    src={pm.image} 
                    alt={pm.title} 
                  />
                  <div className="px-2 text-center">
                    <div className="font-bold text-sm text-white">{pm.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="container mx-auto">
            <h1 className="text-center text-white text-3xl mb-4 mt-4">Movie Indonesia</h1>
            {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <div className="flex flex-wrap justify-center m-0">
              {movieIndo.map((pm, index) => (
                <div className="overflow-hidden shadow-lg flex flex-col items-center" key={index} style={{ width: '170px',height:'250px' }}>
                  <img 
                    className="img-pm"
                    style={{ width:'80%',height:'auto' }} 
                    src={pm.image} 
                    alt={pm.title} 
                  />
                  <div className="px-2 text-center">
                    <div className="font-bold text-sm text-white">{pm.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
