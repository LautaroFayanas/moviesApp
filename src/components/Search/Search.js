import './Search.css'
import { useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { useQuery } from '../hooks/useQuery';

export const Search = () => {

  const query = useQuery();
  const search = query.get("search");

  const [searchText , setSearchText] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    setSearchText(search || "")
  }, [search]);

  const handleSubmit = (e) =>{
    e.preventDefault()
    navigate("/?search=" + searchText)
    
  }
  

  return (
    <div className='text-center'>
        <form onSubmit={handleSubmit}>
            <input 
            placeholder='search movie'
            className='rounded-2 putIn text-center m-auto' 
            type="text" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} />
          
        </form>
    </div>
  )
}
