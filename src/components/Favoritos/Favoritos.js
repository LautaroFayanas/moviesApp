import React from 'react'
import { Link } from 'react-router-dom';

export const Favoritos = (props) => {
    // const [fav , setFav] = useState([]);
    // useEffect(() => {
    //     const favsInStorage = localStorage.getItem('favs')
    //     console.log(favsInStorage);
    //     if(favsInStorage !== null){
    //         const favsArray = JSON.parse(favsInStorage)
    //         console.log(favsArray);
    //         setFav(favsArray)
    //     }
    // }, [])
    
  return (
    <div className='container '>

      <h3 className='text-white'> Peliculas Agregadas: {props.favoritos.length} </h3>
      
        <div className='row '>
        {
          props.favoritos.map((oneMovie, idx) => {
            console.log(props.favoritos);
            return (
              <div key={idx} className='col col-lg-3 mb-5 '>
                <div className="card m-auto rounded-3 text-center">
                  <img src={oneMovie.img} className="m-auto card-img-top rounded-3 w-50 " alt="..." />
                  {/* <button
                    onClick={props.addOrRemoveFav}
                    data-movie-id={oneMovie.id  }
                    className='favoritos btn btn-danger'> ❤️ </button> */}
                  <div className="card-body">
                    <h2 className="card-title ">{oneMovie.titulo}</h2>
                    <p className="card-title ">{oneMovie.description.substring(0,100)}...</p>
                    <Link to={'/movies/' + oneMovie.id} className="btn btn-dark">View Movie Detail</Link>
                    <button 
                    data-movie-id={oneMovie.id} 
                    onClick={props.addOrRemoveFav} 
                    className="btn btn-danger mt-2">Remove to favs </button>

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
