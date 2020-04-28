import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../../config';

export const useHomeFetch = () => {
    const [state, setState] = useState({ movies: [] });
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState(false);

    const fetchMovies = async (endpoint) => {
    seterror(false);
    setLoading(true);

    try {
	const result = await (await fetch(endpoint)).json();
      setState((prev) => ({
        ...prev,
        movies: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      seterror(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
      fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);

    return [{loading, error, state}, fetchMovies];
};
