import React from "react";
import { Link } from "react-router-dom";

import poster from "../../assets/poster.jpg";

const Poster = ({
  id,
  title,
  release_date,
  duration,
  cover_url,
  phase,
  box_office,
  directed_by,
  type,
  number_seasons,
  number_episodes,
}) => {
  return (
    <div className="border-marvel border-2 shadow-md rounded-md overflow-hidden flex flex-col">
      <div className="relative max-w-full">
        {phase && (
          <span className="rounded-md bg-marvel text-white p-2 absolute top-2 left-2">{`Phase: ${phase}`}</span>
        )}
        {box_office && box_office !== "0" && (
          <span className="rounded-lg bg-green-400 text-white p-2 absolute top-2 right-2 align-middle">
            <span className="align-text-bottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block align-middle"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span className="align-middle">{box_office}</span>
          </span>
        )}
        <img src={cover_url || poster} alt={title} className="min-w-full" />
      </div>

      <div className="py-1 px-2 flex flex-col justify-between flex-1">
        <div className="font-bold ">{title}</div>
        {directed_by && <div>Directed by: {directed_by}</div>}
        {release_date && <div>Release date: {release_date}</div>}
        {!release_date && <div>Coming soon</div>}
        {duration !== null && duration !== 0 && <div>Duration: {duration}</div>}
        {number_seasons && number_seasons !== 0 && (
          <div>Number of seasons: {number_seasons}</div>
        )}
        {number_episodes && number_episodes !== 0 && (
          <div>Number of episodes: {number_episodes}</div>
        )}
        <div className="block text-center my-2 ">
          <Link
            className="block p-4 rounded-md bg-marvel hover:bg-red-800 transition duration-500 ease-in-out text-white border-2 border-red-800 shadow-lg"
            to={`/${type}/${id}`}
          >
            More info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Poster;
