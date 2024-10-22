import React,{useState,useEffect} from 'react'
import "../assets/css/Detail.css"
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faL, faStar } from '@fortawesome/free-solid-svg-icons';
function Detail() {
    const {movieId} = useParams();
    const [detail, setDetail] = useState([])
    const [loading,setLoading] = useState(true);
    
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
                
            }finally{
              setLoading(false)
            }
          }
       fetchDetail();
    },[movieId])

    const getTahun = (dateString) => {
        const date = new Date(dateString);
        return date.getFullYear();
    };
  return (
    <div className="detail-container container bg-black min-w-full flex items-center overflow-hidden" style={{ maxWidth:'100%' ,minHeight:'100vh' }}>
    <div className="flex flex-none m-4" style={{ minWidth:'100%'}}>
    {
  loading ? (
    <div className="flex flex-col" style={{ minWidth: '100%' }}>
  {/* Skeleton for Title */}
  <div className="w-1/2 h-10 bg-gray-700 rounded-md mx-auto mb-4"></div>

  {/* Skeleton for Video Frame */}
  <div className="container w-full flex justify-center" style={{ minWidth: '100%', height: '700px' }}>
    <div className="w-[80%] h-full bg-gray-700 rounded-md"></div>
  </div>

  {/* Skeleton for Image and Details */}
  <div className="flex mt-8">
    {/* Skeleton for Image */}
    <div className="w-[300px] h-[450px] bg-gray-700 rounded-md ml-8"></div>

    {/* Skeleton for Text and Details */}
    <div className="flex flex-grow flex-col pl-3">
      {/* Skeleton for Title */}
      <div className="w-3/4 h-8 bg-gray-700 rounded-md mb-2"></div>

      {/* Skeleton for Duration, Rating, Release Date */}
      <div className="w-2/3 h-6 bg-gray-700 rounded-md mb-2"></div>

      {/* Skeleton for Genre */}
      <div className="flex">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="w-20 h-6 bg-gray-700 rounded-md mx-1"></div>
        ))}
      </div>

      {/* Skeleton for Description */}
      <div className="w-full h-6 bg-gray-700 rounded-md my-2"></div>
      <div className="w-full h-6 bg-gray-700 rounded-md my-2"></div>
      <div className="w-3/4 h-6 bg-gray-700 rounded-md my-2"></div>
    </div>
  </div>
</div>

  ) : (
          <div className="flex flex-col" style={{ minWidth:'100%' }}>
          <p className="text-center text-white text-4xl font-bold m-4">Nonton {detail.title}</p>
          <div className="container w-full flex justify-center" style={{ minWidth:'100%',height:'700px' }}>
        <iframe
          src={ detail.videoUrl }
          frameBorder="0"
          style={{ width: '80%', height: 'auto' }}
        ></iframe>
      </div>
            
      <div className="flex mt-8">
        
      <img src={detail.imageUrl} alt="" className="w-[300px] h-auto rounded-md ml-8" />
      <div className="flex flex-grow flex-col pl-3">
        <p className="text-start text-white text-4xl font-bold">{detail.title}</p>
        <p className="text-start text-white text-xl max-w-fit bg-gray-800 p-2 mt-2 rounded-md">
          <FontAwesomeIcon icon={faClock} className="text-[#65B5E7]" /> {detail.duration || '-'}
          &nbsp; <FontAwesomeIcon icon={faStar} className="text-[#65B5E7]" />
          {detail.rating?.value || '-'} &nbsp; 
          <FontAwesomeIcon icon={faCalendarAlt} className="text-[#65B5E7]" /> {getTahun(detail.releaseDate || '-')}
        </p>
        <div className="flex">
          {(detail.genre || '').split(',').map((genreItem, index) => (
            <p key={index} className="text-start text-white text-xl my-2 mx-1 bg-gray-700 px-2 py-1 rounded">
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

    </div>
    </div>
  )
}

export default Detail