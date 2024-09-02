import  { useEffect, useState } from 'react'
import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'



const Player = () => {

  const navigate=useNavigate();

  const{id}=useParams();

  const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2Y4ZGJlNDNhMGRhNGJhZWEzZTViNjkwNzk1ZTg0YSIsIm5iZiI6MTcyMzI3NDUyMC4zODQ1NTksInN1YiI6IjY2YWM3ZGNlZTE4YjdmODdjN2Y1MzMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qevAetQ845Rgt5hNBoZpWXRhPf17EBmtwsqm0xnNsjg'
    }
  };
  
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  }, [])
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>navigate(-2)}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameBorder="0" width="90%" height="90%" title='Trailer' allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>publish date : {apiData.published_at.slice(0,10)}</p>
        <p> {apiData.name}</p>
        
        <p>Type: {apiData.type}</p>
      </div>
    </div>
  )
}

export default Player