import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import axios from "../../Components/LoginSignup/axios-instance";
import { useNavigate } from "react-router";

const daysOfWeek = {
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT",
  0: "SUN",
};
const map = [1, 2, 3, 4, 5, 6, 7];
function ShowTimes() {
  const today = new Date();
  let year = today.getFullYear();
  let month = (today.getMonth() + 1).toString().padStart(2, "0");
  let day = today.getDate().toString().padStart(2, "0");

  const [showtimes, setShowTimes] = useState([]);
  const [date, setDate] = useState(year + "-" + month + "-" + day);
  const navigate = useNavigate();

  const handelChangeDateOnClick = (e) => {
    setDate(e.currentTarget.dataset.value);
  };

  const handelShowTimesOnClick = (e) => {
    navigate(`/user/ticket/${e.currentTarget.dataset.value}`);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/showtimes/day?date=${date}T00:00:00`)
      .then((res) => {
        const copyShowtimes = res.data.filter((showtime) => {
          if (showtime.film.id)
            return String(showtime.film?.id) === localStorage.getItem("filmId");
          else return String(showtime?.film) === localStorage.getItem("filmId");
        });
        setShowTimes(copyShowtimes);
      });
  }, [date]);
  return (
    <>
      <Header />
      <div className="content mt-20 ">
        <div>
          <ul className="flex  mt-10 w-1/2 m-auto">
            {map.map((i) => {
              const nextDay = new Date(today);
              nextDay.setDate(today.getDate() + i - 1);
              let nextYear = nextDay.getFullYear();
              let nextMonth = (nextDay.getMonth() + 1)
                .toString()
                .padStart(2, "0");
              let nextDayy = nextDay.getDate().toString().padStart(2, "0");
              let data = nextYear + "-" + nextMonth + "-" + nextDayy;
              return (
                <li
                  onClick={handelChangeDateOnClick}
                  data-value={data}
                  className="bg-blue-500 mr-1 px-5 py-2 flex flex-col text-center shadow-sm cursor-pointer hover:bg-orange-300 rounded-sm transition duration-700"
                  key={data}
                >
                  <span>{daysOfWeek[nextDay.getDay()]}</span>
                  <span>{nextDay.getDate()}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-10 w-1/2 m-auto">
            <ul className="flex  flex-wrap">
              {showtimes.map((showtime) => {
                return (
                  <li
                    onClick={handelShowTimesOnClick}
                    data-value={showtime.id}
                    className="bg-blue-500 mr-1 px-5 py-2 flex flex-col text-center shadow-sm cursor-pointer mb-2"
                    key={showtime.id}
                  >
                    <span>
                      {showtime.filmRoom?.name
                        ? showtime.filmRoom?.name
                        : `P${showtime.filmRoom}`}
                    </span>
                    <span>
                      {showtime?.timestart.slice(11, 19)} -{" "}
                      {showtime?.timeend.slice(11, 19)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowTimes;
