import { getMoviesNotReleased } from "../../utils/helpers";
import Poster from "../Poster/Poster";

const Main = () => {
  return (
    <div>
      <h2 className="text-4xl text-marvel">What to expect next?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {getMoviesNotReleased().map((movie) => {
          return <Poster key={movie.id} {...movie} type="movies" />;
        })}
      </div>
    </div>
  );
};

export default Main;
