import { message } from "antd";
import { useState, useEffect, useRef } from "react";
import axios from "../LoginSignup/axios-instance";
import styles from "./EditFilmAdmin.module.css";

function EditFilmAdmin(props) {
  const filmId = props.filmId;
  const formRef = useRef();
  const inputLengthRef = useRef();
  const [film, setFilm] = useState({});
  const updateFilm = async () => {
    await axios
      .put(`http://localhost:8080/film/${props.filmId}`, film)
      .then((response) => {
        message.success("Update Sucessful");
        props.handleUpdateIsSucces(response.data);
        inputLengthRef.current.value = "";
      })
      .catch((error) => {
        message.error("Update fail");
      });
  };

  const handelSubmitForm = (e) => {
    e.preventDefault();
    updateFilm();
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFilm({
      ...film,
      [name]: value,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/film/${filmId}`)
      .then((response) => {
        setFilm(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filmId]);

  return (
    <div className="bg-white w-2/5 h-auto m-auto mt-16 z-50 opacity-100 rounded-lg  p-4">
      <form ref={formRef} onSubmit={handelSubmitForm}>
        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Name</label>
          <input
            onChange={handelChange}
            className={styles.input}
            name="name"
            defaultValue={film?.name}
          />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Directory</label>
          <input
            onChange={handelChange}
            className={styles.input}
            name="directory"
            defaultValue={film?.directory}
          />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Link Img</label>
          <input
            onChange={handelChange}
            className={styles.input}
            name="img"
            defaultValue={film?.img}
          />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Description</label>
          <input
            onChange={handelChange}
            className={styles.input}
            name="des"
            defaultValue={film?.des}
          />
        </div>

        <div className="flex flex-col p-2 w-1/4">
          <label className="mb-2">FilmRating</label>
          <select
            className={styles.input}
            onChange={handelChange}
            name="filmRating"
          >
            <option value="P">P</option>
            <option value="C13">C13</option>
            <option value="C16">C16</option>
            <option value="C18">C18</option>
          </select>
        </div>

        <div className="flex flex-col p-2 w-1/4">
          <label className="mb-2">Created</label>
          <input
            type="date"
            className={styles.input}
            onChange={handelChange}
            name="created"
          />
        </div>
        <div className="flex flex-col p-2 w-1/5">
          <label className="mb-2">Length</label>
          <input
            defaultValue={film?.length}
            className={styles.input}
            type="number"
            min={0}
            onChange={handelChange}
            ref={inputLengthRef}
            name="length"
          />
        </div>

        <div className="items-center w-fit m-auto bg-blue-500 rounded-md">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditFilmAdmin;
