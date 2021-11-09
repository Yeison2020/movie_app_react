import React from "react";
const IMG_IPA = "https://image.tmdb.org/t/p/w1280";
const Movies = ({ title, poster_path, overview, vote_average }) => {
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div className="movie">
      <img src={IMG_IPA + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movies-over">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movies;
