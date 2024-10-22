import React,{useState,useEffect} from 'react'
import "../assets/css/Detail.css"
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
function Detail() {
    const {movieId} = useParams();
    const [detail, setDetail] = useState([])
    useEffect(() => {
       const fetchDetail = async () =>{
            try {
                const response = await fetch(`https://moverse-api.vercel.app/api/movie-details/${movieId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  const result = await response.json();
                  setDetail(result);
            } catch (error) {
                console.error('Error fetching popular movies:', error); 
                
            }
       }
       fetchDetail()
    },[movieId])

    const getTahun = (dateString) => {
        const date = new Date(dateString);
        return date.getFullYear();
    };
  return (
    <div className="detail-container container bg-black min-w-full flex items-center" style={{ minHeight:'100vh' }}>
    <div className="flex flex-none m-4">
        <img src={detail.imageUrl} alt="" className="w-[300px] h-auto rounded-md"/>
        <div className="flex flex-grow flex-col pl-3">
        <p className="text-start text-white text-4xl font-bold">{detail.title}</p>
        <p className="text-start text-white text-xl max-w-fit bg-gray-800 p-2 mt-2 rounded-md "><FontAwesomeIcon icon={faClock} className="text-[#65B5E7]" /> {detail.duration || '-'}&nbsp;  <FontAwesomeIcon icon={faStar} className="text-[#65B5E7]" />{detail.rating?.value || '-'} &nbsp; <FontAwesomeIcon icon={faCalendarAlt} className="text-[#65B5E7]" /> {getTahun(detail.releaseDate || '-')}</p>
        <div className="flex">

        {(detail.genre || '').split(',').map((genreItem, index) => (
          <p
              key={index}
              className="text-start text-white text-xl my-2 mx-1 bg-gray-700 px-2 py-1 rounded"
          >
              {genreItem.trim()}
          </p>
      ))}
        </div>

        <p className="text-start text-white text-xl max-w-2xl">{detail.description || '-'}</p>
        </div>
    </div>
    </div>
  )
}

export default Detail