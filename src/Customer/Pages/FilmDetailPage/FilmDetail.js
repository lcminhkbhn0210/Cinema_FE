import axios from "../../../Components/LoginSignup/axios-instance";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FilmDetailCard from "../../Components/FilmDetailCard";
import { Header } from "antd/es/layout/layout";

function FilmDetail() {
  const [film, setFilm] = useState();
  const { filmId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/film/${filmId}`)
      .then((res) => {
        setFilm(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filmId]);
  return (
    <>
      <Header />
      <div className="mt-28 ml-20">
        <FilmDetailCard film={film} />
      </div>
    </>
  );
}

export default FilmDetail;
