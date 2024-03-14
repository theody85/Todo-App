import "./App.css";
import useQueryPopular from "./hooks/useQueryPopular";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { popularMovies, isLoading } = useQueryPopular();

  return (
    <>
      <Navbar />
      <div>
        <h1 className="title">Popular Movies</h1>
        <div>
          {isLoading ? (
            <div>Loading...</div>
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
    </>
  );
}

export default App;
