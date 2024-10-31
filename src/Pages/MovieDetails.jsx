import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
import Spinner from '../Components/Spinner'; // Import the Spinner component

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=886d3f4a`);
        
        // Check if the movie was found
        if (res.data.Response === "False") {
          throw new Error(res.data.Error || "Movie not found");
        }

        setMovie(res.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (loading) return <Spinner />; // Display spinner while loading

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; // Display error message
  }

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {movie.Poster && (
          <img src={movie.Poster} alt={movie.Title} className="rounded-lg shadow-lg m-auto" />
        )}
        <div>
          <h1 className="text-5xl font-bold mb-4">{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <a 
            href={`https://www.imdb.com/title/${movie.imdbID}`} 
            className="btn btn-outline mt-4" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on IMDb
          </a>
          {/* Example of internal navigation; adjust the route as needed */}
          <Link to="/" className="btn btn-outline mt-4">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
