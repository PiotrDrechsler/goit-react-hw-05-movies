import { getQuery } from '../API/Api';
import { useEffect, useState } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setSearchedMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { query } = searchParams;
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newQuery = form.elements.query.value;
    setSearchParams(newQuery !== '' ? { query: newQuery } : {});
    form.reset();
  };

  useEffect(() => {
    if (!query) return;
    getQuery(query).then(setSearchedMovie);
  }, [query]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" defaultValue={query || ''} />
      <button type="submit">Search</button>
      {movies.length === 0 && query ? (
        <div>No results. Please try again.</div>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Movies;
