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
        setNewMovie(result);
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

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };
  return (
    <>
      <div className="home-container h-auto w-full pb-3" style={{ minHeight:'100vh' }}>
        <Navbar />

        {/* HORROR MOVIE */}
        <div className="container mx-auto flex justify-center flex-col items-center">
          <div className="container" style={{maxWidth:'95%'}}>
          <h1 className="ml-5 text-white text-3xl font-medium">Movie <span style={{ color:'#65B5E7' }}>Horror</span></h1>
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <div className="card-container flex overflow-x-auto space-x-4">
              {movieHorror.map((pm, index) => (
                <Link
          to={`/movie/${pm.link.split('/')[3]}`}
          className="flex flex-none bg-gray-900 card-movie shadow-lg items-center p-4 rounded-lg hover:shadow-gray-500 hover:bg-gray-800" 
          key={index} 
          style={{ width: '300px', height: '150px', margin: '10px' }}
        >
          <img
            className="object-cover rounded-md"
            style={{ width: '100px', height: '130px', marginRight: '5px' }}
            src={pm.image}
            alt={truncateTitle(pm.title, 15)}
          />
          <div className="flex-grow" style={{ height: '100%' }}>
            <div className="font-bold text-base text-white">
              {truncateTitle(pm.title, 15)}
            </div>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faStar} style={{ color: '#65B5E7' }} /> {pm.rating || '-'}
            </p>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faClock} style={{ color: '#65B5E7' }} /> {pm.duration || '-'}
            </p>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#65B5E7' }} /> {getTahun(pm.releaseDate) || '-'}
            </p>
          </div>
        </Link>
              ))}
            </div>
          )}
          </div>
        </div>

        {/* NEW MOVIE */}
        <div className="container mx-auto flex justify-center flex-col items-center">
          <div className="container" style={{maxWidth:'95%'}}>
          <h1 className="ml-5 text-white text-3xl font-medium">Movie <span style={{ color:'#65B5E7' }}>Baru</span></h1>
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <div className="card-container flex overflow-x-auto space-x-4">
              {newMovie.map((pm, index) => (
                <Link
          to={`/movie/${pm.link.split('/')[3]}`}
          className="flex flex-none bg-gray-900 card-movie shadow-lg items-center p-4 rounded-lg hover:shadow-gray-500 hover:bg-gray-800" 
          key={index} 
          style={{ width: '300px', height: '150px', margin: '10px' }}
        >
          <img
            className="object-cover rounded-md"
            style={{ width: '100px', height: '130px', marginRight: '5px' }}
            src={pm.image}
            alt={truncateTitle(pm.title, 15)}
          />
          <div className="flex-grow" style={{ height: '100%' }}>
            <div className="font-bold text-base text-white">
              {truncateTitle(pm.title, 15)}
            </div>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faStar} style={{ color: '#65B5E7' }} /> {pm.rating || '-'}
            </p>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faClock} style={{ color: '#65B5E7' }} /> {pm.duration || '-'}
            </p>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#65B5E7' }} /> {getTahun(pm.releaseDate) || '-'}
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
          <h1 className="ml-5 text-white text-3xl font-medium">Drama <span style={{ color:'#65B5E7' }}>Korea</span></h1>
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <div className="card-container flex overflow-x-auto space-x-4">
              {dramaKorea.map((pm, index) => (
                <Link
          to={`/movie/${pm.link.split('/')[3]}`}
          className="flex flex-none bg-gray-900 card-movie shadow-lg items-center p-4 rounded-lg hover:shadow-gray-500 hover:bg-gray-800" 
          key={index} 
          style={{ width: '300px', height: '150px', margin: '10px' }}
        >
          <img
            className="object-cover rounded-md"
            style={{ width: '100px', height: '130px', marginRight: '5px' }}
            src={pm.image}
            alt={truncateTitle(pm.title, 15)}
          />
          <div className="flex-grow" style={{ height: '100%' }}>
            <div className="font-bold text-base text-white">
              {truncateTitle(pm.title, 15)}
            </div>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faStar} style={{ color: '#65B5E7' }} /> {pm.rating || '-'}
            </p>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faClock} style={{ color: '#65B5E7' }} /> {pm.duration || '-'}
            </p>
            <p className="text-white text-base">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#65B5E7' }} /> {getTahun(pm.releaseDate) || '-'}
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
