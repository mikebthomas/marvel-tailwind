import { getAllSeries } from "../../utils/helpers";
import Poster from "../Poster/Poster";

const Series = () => {
  return (
    <div>
      <h2 className="text-4xl text-marvel">All Series</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {getAllSeries().map((movie) => {
          return <Poster key={movie.id} {...movie} type="series" />;
        })}
      </div>
    </div>
  );
};

export default Series;
