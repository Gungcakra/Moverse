  import React from 'react';
  import { NavLink, useLocation } from 'react-router-dom';
  import logoNav from "../assets/images/logoNav.png";
  import "../assets/css/NavBar.css";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCameraRetro, faFire, faHome, faMasksTheater, faStar, faTv, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

  const Navbar = () => {

    const location = useLocation();

    // const isActive = location.pathname === '/' || location.pathname.startsWith('/detail');
    // const animActive = location.pathname.startsWith('/anim-detail');

    return (
      <nav className="p-4 h-screen w-45 bg-black shadow-md shadow-white fixed">
        <div className="container mx-auto flex flex-col items-center space-y-8">

          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src={logoNav} alt="Logo" style={{ maxWidth: '50px' }} />
            <a href="/" className="text-white text-xl font-bold">MOVERSE</a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6 w-full">
          <NavLink 
          to="/" 
          className={({isActive}) => 
                isActive ? "bg-[#008CFFFF] text-white p-2.5 rounded-full" : "text-[#008CFFFF] text-start p-2.5 transition-all rounded-full hover:bg-[#008CFFFF] hover:text-white text-base"
              }
        >
          <FontAwesomeIcon icon={faHome} /> &nbsp; <span className="pl-1">Home </span>
        </NavLink>
            
            <NavLink 
              to="/movie-list" 
              className={({isActive}) => 
                isActive ? "bg-[#008CFFFF] text-white p-2.5 rounded-full" : "text-[#008CFFFF] text-start p-2.5 transition-all rounded-full hover:bg-[#008CFFFF] hover:text-white text-base"
              }
            >
              <FontAwesomeIcon icon={faVideoCamera} /> &nbsp; <span className="pl-1">Movie List</span>

            </NavLink>

            <NavLink 
              to="/trending" 
              className={({isActive}) => 
                isActive ? "bg-[#008CFFFF] text-white p-2.5 rounded-full" : "text-[#008CFFFF] text-start p-2.5 transition-all rounded-full hover:bg-[#008CFFFF] hover:text-white text-base"
              }
            >
              <FontAwesomeIcon icon={faFire} /> &nbsp; <span className="pl-1">Trending</span>
            </NavLink>

            <NavLink 
              to="/rating" 
              className={({isActive}) => 
                isActive ? "bg-[#008CFFFF] text-white p-2.5 rounded-full" : "text-[#008CFFFF] text-start p-2.5 transition-all rounded-full hover:bg-[#008CFFFF] hover:text-white text-base"
              }
            >
              <FontAwesomeIcon icon={faStar} /> &nbsp; <span className="pl-1">Top Rated</span>
            </NavLink>

            <NavLink 
              to="/anim" 
              className={({isActive}) => 
                 isActive ? "bg-[#008CFFFF] text-white p-2.5 rounded-full" : "text-[#008CFFFF] text-start p-2.5 transition-all rounded-full hover:bg-[#008CFFFF] hover:text-white text-base"
              }
            >
              <FontAwesomeIcon icon={faMasksTheater} /> &nbsp; <span className="pl-1">Animation</span>
            </NavLink>

            <NavLink 
              to="/tv" 
              className={({isActive}) => 
                isActive ? "bg-[#008CFFFF] text-white p-2.5 rounded-full" : "text-[#008CFFFF] text-start p-2.5 transition-all rounded-full hover:bg-[#008CFFFF] hover:text-white text-base"
              }
            >
              <FontAwesomeIcon icon={faTv} /> &nbsp; <span className="pl-1">Tv Show</span>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;
