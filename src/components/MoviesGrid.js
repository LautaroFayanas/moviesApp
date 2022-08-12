import React, { useEffect, useState } from 'react'
import { MoviesCards } from './MoviesCards'
import './MoviesCard.css'
import { Spinner } from './Spinner/Spinner';
import { get } from '../Fetch/fetch';
import { useQuery } from './hooks/useQuery';
import InfiniteScroll from 'react-infinite-scroll-component'


export const MoviesGrid = () => {

    const [movies , setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page , setPage] = useState(1);
    const [hasMore , setHasMore] = useState(true);

    const query = useQuery();
    const search = query.get("search");


    useEffect(() => {
        setLoading(true);
        const searchURL = search ? 
        "/search/movie?query=" + search + "&page=" + page
        : "/discover/movie?page=" + page;

        get(searchURL).then((data) => {
            setMovies((prevMovie) => prevMovie.concat(data.results))
            setHasMore(data.page < data.total_pages);
            setLoading(false);
        })
        
    }, [search , page]);


    return (
        <InfiniteScroll 
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage((prevPage) => prevPage + 1)} 
        loader={<Spinner />}> 
        
            <ul className='moviesGrid '>
                {movies.map((movie) => {
                    return <MoviesCards key={movie.id} movie={movie} />
                })}
            </ul>
        
        </InfiniteScroll>
    )
}
