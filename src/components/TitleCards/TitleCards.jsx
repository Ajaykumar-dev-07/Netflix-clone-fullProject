import  { useEffect } from 'react'
import './TitleCards.css'
import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {

const[apiData,setApiData]=useState([])
const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2Y4ZGJlNDNhMGRhNGJhZWEzZTViNjkwNzk1ZTg0YSIsIm5iZiI6MTcyMjU4MjU1OC40ODk4NSwic3ViIjoiNjZhYzdkY2VlMThiN2Y4N2M3ZjUzMzA4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.cj5fNEPiTvsgw06_dzlYWTXaBYiIfFyRR-BV5XfUY6Q'
    }
  };
  
  
  
  const handleWheel=(e)=>{
   e.preventDefault();
   cardsRef.current.scrollLeft += e.deltaY 
  }
 useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${category? category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

   cardsRef.current.addEventListener("wheel",handleWheel);
 }, [])
  return (
    <div className='title-cards'>
      <h2>{title ? title:"Popular on Netflix"}</h2>

      <div className="cards-list" ref={cardsRef}>
        {apiData.map((card,index) => (
          <Link to={`/player/${card.id}`} className="card"  key={index} >
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.title}</p>
          </Link>
        ))}
    </div>
    </div>
  )
}
TitleCards.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string
};
export default TitleCards

