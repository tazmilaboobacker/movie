

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text text-5xl font-italic mt-0 animate__animated animate__fadeInDown">Search Movies</h1>
          <p className="text1 py-6">Enter the movie title to search for details</p>
          
          {/* Overview Paragraph */}
          <p className="overview-text text-lg py-4 animate__animated animate__fadeInUp">
            Welcome to MovieFinder, your go-to app for discovering movie details quickly. 
            Whether you're looking for the latest releases or classic favorites, search now 
            to get instant information on your favorite movies.
          </p>

          <form onSubmit={handleSearch}>
            <input id='search'
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-btn btn mt-4 color-white" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero
