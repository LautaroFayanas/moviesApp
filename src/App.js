import { Routes, Route, Link } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";
import { LandingPage } from "./pages/LandingPage";


function App() {
  return (
    
    <div className="appe">
     <header> 
      <Link className="text-decoration-none text-center  p-5 w-50" to="/"><h3 className="m-auto w-50 text-white "> Yourmovies.com </h3> </Link>
      <hr className="text-white"/>
     </header>
     <main>
      <Routes>
        <Route path="/" element={<LandingPage />}> home </Route>
        <Route path="/movies/:movieID" element={<MovieDetail />} />  
      </Routes>
     </main>
    </div>
  );
}

export default App;
