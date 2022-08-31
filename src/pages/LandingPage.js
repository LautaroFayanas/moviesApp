import React from 'react'
import { useQuery } from '../components/hooks/useQuery';
import { MoviesGrid } from '../components/MoviesGrid';
import './MovieDetailCss/MovieDetail.css'

export const LandingPage = () => {

  const query = useQuery();
    const search = query.get("search");

  return (
      <MoviesGrid key={search} />
  )
}
