import { Link } from 'react-router-dom';
import  './MoviesCard.css'

export const MoviesCards = ({ movie }) => {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (

        <li className='movieCard text-center m-auto text-white p-5'>
            <Link className='text-decoration-none text-white' to={"/movies/" + movie.id}> 
            <img className='rounded-5' src={imageUrl} alt={movie.title} />
            <hr/>
            <div className='titleMovie'>{movie.title}</div>
            <div>Views: {movie.vote_count}</div>
            </Link>
            
        </li>
    )
}
