import { Header } from "antd/es/layout/layout";
import axios from "../../Components/LoginSignup/axios-instance";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./cinema.module.css";
import { useNavigate, useParams } from "react-router";

function Cinema() {
  const [cinemas, setCinemas] = useState([]);
  const navigate = useNavigate();
  const { filmId } = useParams();

  const handleOnClick = () => {
    navigate(`/user/showtimes/${filmId}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/cinema")
      .then((res) => {
        setCinemas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Header />
      <div
        className={`container ${styles.content} flex mt-28 m-auto justify-center `}
      >
        <ul>
          {cinemas.length > 0 &&
            cinemas.map((cinema) => {
              return (
                <li
                  onClick={handleOnClick}
                  key={cinema.id}
                  className={`px-12 py-3 bg-orange-500 text-white mb-4 rounded-sm text-center cursor-pointer hover:bg-white hover:text-black`}
                >
                  {cinema.location}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
export default Cinema;
