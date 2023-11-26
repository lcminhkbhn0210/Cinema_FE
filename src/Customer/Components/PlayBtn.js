import Modal from "./Modal";
import "./playBtn.css";
import { useState } from "react";

function PlayBtn(props) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div
      className={`trailer flex align-items-center justify-center mb-14 ${
        props.movie.active ? "active" : ""
      }`}
    >
      <button className="playBtn cursor-pointer" onClick={toggleModal}>
        <ion-icon name="play-outline"></ion-icon>
      </button>
      <p>Watch Trailer</p>
      {props.movie.active && (
        <Modal movie={props.movie} toggleModal={toggleModal} status={modal} />
      )}
    </div>
  );
}

export default PlayBtn;
