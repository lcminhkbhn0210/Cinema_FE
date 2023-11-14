import { useEffect, useState, useRef } from "react";
import axios from "../LoginSignup/axios-instance";
import styles from "./AddFilmAdmin.module.css";
import { message } from "antd";

function AddEditAdmin(props) {
  const inputLengthRef = useRef();
  const formRef = useRef();
  const [filmProviders, setFilmProviders] = useState([]);
  const [film, setFilm] = useState({
    name: "",
    des: "",
    rate: 0,
    directory: "",
    img: "",
    filmRating: "P",
    length: "",
    filmProvider: "",
    created: "",
  });

  const handelSubmitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/film", film)
      .then((response) => {
        message.success("Successful");
        props.handelAddIsSuccess(response.data);
      })
      .catch((err) => {
        message.error("Add Fail");
      });
  };

  const handelChange = (e) => {
    let { name, value } = e.target;
    if (name === "filmProvider") value = JSON.parse(value);

    setFilm({
      ...film,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchDataFilmProvider = async () => {
      await axios
        .get("http://localhost:8080/filmProvider")
        .then((response) => {
          setFilmProviders(Object(response.data));
          if (response.data.length > 0) {
            setFilm((preFilm) => {
              return { ...preFilm, filmProvider: response.data[0] };
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchDataFilmProvider();
  }, []);

  return (
    <>
      <div className="bg-white w-2/5 h-auto m-auto mt-8 z-50 opacity-100 rounded-lg p-5 ">
        <form ref={formRef} onSubmit={handelSubmitForm}>
          <div className="flex flex-col p-2 w-2/3">
            <label className="mb-2">Name</label>
            <input
              onChange={handelChange}
              className={styles.input}
              name="name"
            />
          </div>

          <div className="flex flex-col p-2 w-2/3">
            <label className="mb-2">Directory</label>
            <input
              onChange={handelChange}
              className={styles.input}
              name="directory"
            />
          </div>

          <div className="flex flex-col p-2 w-2/3">
            <label className="mb-2">Link Img</label>
            <input
              onChange={handelChange}
              className={styles.input}
              name="img"
            />
          </div>

          <div className="flex flex-col p-2 w-2/3">
            <label className="mb-2">Description</label>
            <input
              onChange={handelChange}
              className={styles.input}
              name="des"
            />
          </div>
          <div className="flex flex-col p-2 w-1/4">
            <label className="mb-2">FilmRating</label>
            <select
              className={styles.input}
              onChange={handelChange}
              name="filmProvider"
            >
              {filmProviders.map((el) => {
                return (
                  <option value={JSON.stringify(el)} key={el?.id}>
                    {el?.name}
                  </option>
                );
              })}
            </select>
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
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddEditAdmin;
