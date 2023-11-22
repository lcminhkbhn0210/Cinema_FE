import "./card.css";

function Card(props) {
  return (
    <div className="movie-card mr-2">
      <img src={props.movie.img} alt="Preview" className="img-fluid" />
      <p>
        {props.movie.length} | {props.movie.des}
      </p>
      <div className="content">
        <h4>{props.movie.name}</h4>
        <div className="card-icons">
          <ion-icon name="add-outline"></ion-icon>
          <ion-icon name="play-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Card;
