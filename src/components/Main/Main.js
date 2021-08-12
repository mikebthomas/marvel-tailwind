import { getMoviesNotReleased } from "../../utils/helpers";

const Main = () => {
  return (
    <div>
      <h2 className="">What to expect next?</h2>
      <div className="">
        {getMoviesNotReleased().map((movie) => {
          return <div>{movie.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Main;
