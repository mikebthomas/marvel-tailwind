import marvelMovies from "../data/marvel-movies";
import marvelSeries from "../data/marvel-series";

const getAllMovies = () => {
  return marvelMovies;
};

const getAllSeries = () => {
  return marvelSeries;
};

const sortByDateAsc = (a, b) => {
  if (!a.release_date && b.release_date) return 1;
  if (!b.release_date && a.release_date) return -1;
  const date_a = new Date(a.release_date);
  const date_b = new Date(b.release_date);
  if (date_a < date_b) return -1;
  if (date_a > date_b) return 1;
  return 0;
};

const released = (acc, m) => {
  if (!m.release_date) return acc;
  const today = new Date();
  const date = new Date(m.release_date);
  if (date < today) return acc.concat(m);
  return acc;
};

const notReleased = (acc, m) => {
  const today = new Date();
  if (!m.release_date) return acc.concat(m);
  const date = new Date(m.release_date);
  if (date > today) return acc.concat(m);
  return acc;
};

const getMoviesReleased = () => {
  const movies = marvelMovies?.reduce(released, [])?.sort(sortByDateAsc);
  return movies;
};

const getMoviesByPhase = (phase) => {
  const movies = marvelMovies
    ?.filter((m) => parseInt(m.phase, 10) === parseInt(phase, 10))
    ?.sort(sortByDateAsc);
  return movies;
};

const getSeriesReleased = () => {
  return marvelSeries?.reduce(released, [])?.sort(sortByDateAsc);
};

const getMoviesNotReleased = () => {
  return marvelMovies?.reduce(notReleased, []).sort(sortByDateAsc);
};

const getSeriesNotReleased = () => {
  return marvelSeries?.reduce(notReleased, []).sort(sortByDateAsc);
};

const getSeriesByPhase = (phase) => {
  const movies = marvelSeries
    ?.filter((m) => parseInt(m.phase, 10) === parseInt(phase, 10))
    ?.sort(sortByDateAsc);
  return movies;
};

const getSeries = (id) => {
  return marvelSeries.find((s) => parseInt(s.id, 10) === parseInt(id, 10));
};

const getMovie = (id) => {
  return marvelMovies.find((m) => parseInt(m.id, 10) === parseInt(id, 10));
};

export {
  getAllMovies,
  getAllSeries,
  getMoviesReleased,
  getMoviesByPhase,
  getMoviesNotReleased,
  getSeriesReleased,
  getSeriesNotReleased,
  getSeriesByPhase,
  getSeries,
  getMovie,
};
