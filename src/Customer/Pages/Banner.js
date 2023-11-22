import "./banner.css";
import { useState, useEffect } from "react";
import axios from "../../Components/LoginSignup/axios-instance";
import MovieContent from "../Components/MovieContent";
import MovieDate from "../Components/MovieDate";
import PlayBtn from "../Components/PlayBtn";
import MovieSwiper from "../Components/MovieSwiper";

function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:8080/film`)
        .then((response) => {
          setMovies(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const handleSlideChange = (id) => {
    const newMovie = movies.map((movie) => {
      movie.active = false;
      if (movie.id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovie);
  };

  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={movie.bgImg}
              alt="Background"
              className={`bgImg ${movie.active ? "active" : ""}`}
            />
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                <div className="lg:w-1/2 md:w-full p-4">
                  <MovieContent movie={movie} />
                </div>
                <div className="lg:w-1/2 md:w-full p-4">
                  <MovieDate movie={movie} />
                  <PlayBtn movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}

      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  );
}

export default Banner;
