import "./moviedate.css";

const formatDate = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

function MovieDate(props) {
  return (
    <div className={`date ${props.movie.active ? "active" : ""}`}>
      <h2>{`On ${props.movie.created.slice(9, 10)}TH ${
        formatDate[Number(props.movie.created.slice(5, 7))]
      }`}</h2>
    </div>
  );
}

export default MovieDate;
