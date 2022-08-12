import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { get } from '../Fetch/fetch';
import '../components/MoviesCard.css'
import { Spinner } from '../components/Spinner/Spinner';


export const MovieDetail = () => {

  const {movieID} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    setLoading(true);

    get("/movie/" + movieID).then((data) => {
          setLoading(false);
            setMovies(data) 
        })  
  }, [movieID]);

  if(loading){
    return <Spinner/>
  }

  if(!movie){
    return null
  }

  const imgUrl = "https://image.tmdb.org/t/p/w400" + movie.poster_path;
  return (
    <div className='justify-content-center 
     m-auto text-white d-flex divContainer'> 
    <img className='rounded-5 m-5 ' src={imgUrl} alt={movie.title} />
      <div className='w-50 p-5 mt-5'>
        <h2> {movie.title}</h2>
        <hr />
        <p> <strong>Description : </strong> {movie.overview}</p>
        <hr />
        <p> <strong>Len : </strong> {movie.original_language}  </p> 
        <hr />
        <p> <strong>Vot : </strong> {movie.vote_average}  </p>  
        <hr />
        <p> <strong>Data : </strong> {movie.release_date}  </p> 
        <button className='btn btn-primary mt-5'>View Movie</button>
        <button className='btn btn-primary mt-5 mx-3'>Add to favorite</button>
      </div>
    </div>
  )
}