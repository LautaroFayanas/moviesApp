import React from 'react'
import { useQuery } from '../components/hooks/useQuery';
import { MoviesGrid } from '../components/MoviesGrid'


export const LandingPage = () => {

  const query = useQuery();
    const search = query.get("search");

  return (
    <> 
    <MoviesGrid key={search} />
    </>
  )
}
