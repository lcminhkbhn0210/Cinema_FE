import Button from "./Button";
import "./moviecontent.css";

function MovieContent(props) {
  const handleBookOnClick = () => {
    props.handleBookOnClick(props.movie.id);
  };
  return (
    <div className={`content ${props.movie.active ? "active" : ""}`}>
      <img
        src={props.movie.titleImg}
        alt="Movie Title"
        className="movie-title"
      />
      <h4>
        <span>{props.movie.created.slice(0, 4)}</span>
        <span>
          <i>{props.movie.filmRating}</i>
        </span>
        <span>{props.movie.length}p</span>
        <span>{props.movie.des}</span>
      </h4>
      <p>
        Trải qua thế giới đầy bí ẩn và hiểm nguy, bộ phim kể về cuộc phiêu lưu
        của nhân vật chính, một người hùng trẻ tên là Lê Minh. Cuộc sống của anh
        ta bị chao đảo khi phát hiện ra một lực lượng tà ác đang âm mưu xâm
        chiếm thế giới và hủy diệt mọi sinh linh.
      </p>
      <div className="button">
        <Button
          onClick={handleBookOnClick}
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Book"
          color="#ff3700"
          bgColor="#ffff"
        />
        <Button
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="My list"
        />
      </div>
    </div>
  );
}

export default MovieContent;
