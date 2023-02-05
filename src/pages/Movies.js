import { getQuery } from '../API/Api';
import { useEffect, useState } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setSearchedMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams(query !== '' ? { query: form.elements.query.value } : {});
    form.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) return;
    getQuery(query).then(setSearchedMovie);
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query"></input>
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        query && <div>No results. Please try again.</div>
      )}
    </>
  );
};

export default Movies;
