import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '../components/hooks/useQuery';
import { MoviesGrid } from '../components/MoviesGrid'
import { Search } from '../components/Search/Search';


export const LandingPage = () => {

  const query = useQuery();
    const search = query.get("search");

  return (
    <> 
      <MoviesGrid key={search} />
    </>
  )
}
