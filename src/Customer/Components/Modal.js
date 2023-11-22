import "./modal.css";

function Modal(props) {
  return (
    <div className={`movieModal ${props.status ? "active" : ""}`}>
      <div className="modalClose" href="/user" onClick={props.toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <iframe
        width="1280"
        height="720"
        src={"https://www.youtube.com/embed/TxPNrwbuxN0"}
        title={`${props.movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
