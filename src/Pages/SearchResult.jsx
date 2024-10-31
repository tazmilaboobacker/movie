import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
import Spinner from '../Components/Spinner';

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();    
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=886d3f4a`);
        setMovies(res.data.Search || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Results for "{query}"</h2>
      {loading ? (
        <Spinner />
      ) : (
        movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <div key={movie.imdbID} className="card bg-base-100 shadow-xl">
                <figure><img src={movie.Poster} alt={movie.Title} /></figure>
                <div className="card-body">
                  <h2 className="card-title">{movie.Title}</h2>
                  <p>{movie.Year}</p>
                  <p>{movie.imdbID}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/movie/${movie.imdbID}`} className="btn btn-outline">Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center result text-xl">No movies found for "{query}".</p>
        )
      )}
    </div>
  );
};

export default SearchResults;
