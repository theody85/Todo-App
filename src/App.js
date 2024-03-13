import { useState } from "react";
import "./App.css";
import useQueryPopular from "./hooks/useQueryPopular";

function App() {
  // const [set, setState] = useState()
  const { popularMovies, isLoading, setIsLoading } = useQueryPopular();

  return (
    <div>
      Popular Movies
      <div>
        {isLoading ? (
          <div>Loading </div>
        ) : (
          <div className="popular-movies">
            {popularMovies.map((movie, index) => {
              return (
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={`${index}`}
                  />
                  <h1>{movie.title}</h1>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
