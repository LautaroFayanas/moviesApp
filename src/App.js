import { Routes, Route, Link, NavLink } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";
import { LandingPage } from "./pages/LandingPage";
import { Favoritos } from "./components/Favoritos/Favoritos";
import { useEffect, useState } from "react";
import { Search } from "./components/Search/Search";




function App() {

  const [favoritos , setFavoritos] = useState([]);

    useEffect(() => {
        const favsInStorage = localStorage.getItem('favs')

        if(favsInStorage !== null){
            const favsArray = JSON.parse(favsInStorage)
            setFavoritos(favsArray)
        }
    }, [])

  
  const addOrRemoveFav = (e) => {

    const favMovies = localStorage.getItem('favs');
    let movieInFav;
    if (favMovies === null) {
      movieInFav = [];
      console.log(movieInFav);
    } else {
      movieInFav = JSON.parse(favMovies)
    }

    const btn = e.currentTarget;
    let img = document.querySelector('img').src;
    let titulo = document.querySelector('h2').innerText;
    let description = document.querySelector('p').innerText;
    const dataFav = {
      img,
      titulo,
      description,
      id: btn.dataset.movieId
    }

    let movieInArray = movieInFav.find(oneMovie => {
      return oneMovie.id === dataFav.id
    });

    if (!movieInArray) {
      movieInFav.push(dataFav)
      localStorage.setItem('favs', JSON.stringify(movieInFav))
      console.log('se agrego');
      setFavoritos(movieInFav)
    } else {
      let movieLeft = movieInFav.filter(oneMovie => {
        return oneMovie.id !== dataFav.id
      })
      localStorage.setItem('favs', JSON.stringify(movieLeft))
      setFavoritos(movieLeft)
      console.log('se elimino');
    }

  }

  return (

    <div className="appe">
      <header >
      <Link to={'/Favoritos'} className='text-decoration-none mx-5  text-white'> Ir a Favoritos ❤️</Link>
        <Link className="text-decoration-none text-center " to="/"><h3 > Yourmovies.com </h3> </Link>
        <Search />
        <hr className="text-white" />
      </header>
      <main>
        <Routes> 
          <Route path="/" element={<LandingPage favoritos={favoritos}/>}>  </Route>
          <Route path="/movies/:movieID" element={<MovieDetail favoritos={favoritos} addOrRemoveFav={addOrRemoveFav} />} />
          <Route path="/Favoritos" element={  <Favoritos favoritos={favoritos} addOrRemoveFav={addOrRemoveFav}  /> }>  </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
