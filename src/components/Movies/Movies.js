import { getAllMovies } from "../../utils/helpers";
import Poster from "../Poster/Poster";

const Movies = () => {
  return (
    <div>
      <h2 className="text-4xl text-marvel">All movies</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {getAllMovies().map((movie) => {
          return <Poster key={movie.id} {...movie} type="movies" />;
        })}
      </div>
    </div>
  );
};

export default Movies;
