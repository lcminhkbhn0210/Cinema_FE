import { useState, useEffect } from "react";
import Pagination from "../Layouts/Pagination";
import axios from "../LoginSignup/axios-instance";
import TableAdmin from "../Layouts/TableAdmin";
import AddEditAdmin from "./AddEditAdmin";
import styles from "./FilmManagerAdmin.module.css";
function FilmManagerAdmin() {
  const columns = [
    "id",
    "name",
    "rate",
    "directory",
    "length",
    "created",
    "filmRating",
    "Action",
  ];
  const itemsPerPage = 5;
  const [films, setFilms] = useState([]);
  const [isActive, setIsActive] = useState(1);
  const [addIsClick, setAddIsClick] = useState(false);

  const handelAddIsSuccess = (film) => {
    films.push(film);
    setFilms(films);
  };

  const handelAddFilmOnClick = () => {
    setAddIsClick(true);
  };

  const handelBodyOnClick = (e) => {
    if (e.target.id === "filmBody") setAddIsClick(false);
  };
  const handelIsActiveChange = (active) => {
    if (active >= 1 && active <= Math.ceil(films.length / itemsPerPage))
      setIsActive(active);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/film")
      .then((response) => {
        setFilms(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-bold italic">Film Manager</h2>
        <div
          onClick={handelAddFilmOnClick}
          className="flex items-center rounded-lg bg-primary p-3 mr-12 text-white hover:scale-125 cursor-pointer transition ease-out duration-700"
        >
          <i className="ti ti-plus mr-2"></i>
          <button className="border-none">AddFilm</button>
        </div>
      </div>
      <TableAdmin
        items={films}
        isActive={isActive}
        itemsPerPage={itemsPerPage}
        columns={columns}
      />

      <div className="items-center flex justify-end w-4/5 mt-3">
        <Pagination items={films} handelIsActiveChange={handelIsActiveChange} />
      </div>
      <div
        id={"filmBody"}
        onClick={handelBodyOnClick}
        className={`h-full w-full fixed bg-black ${styles.modal} z-40 ${
          addIsClick ? "" : "hidden"
        }`}
      >
        <AddEditAdmin handelAddIsSuccess={handelAddIsSuccess} />
      </div>
    </div>
  );
}

export default FilmManagerAdmin;
