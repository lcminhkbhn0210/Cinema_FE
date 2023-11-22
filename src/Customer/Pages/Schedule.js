import { useState, useEffect } from "react";
import axios from "../../Components/LoginSignup/axios-instance";
import "./schedule.css";
import Card from "../Components/Card";
function Schedule() {
  const filterList = [
    {
      id: 1,
      name: "All",
      active: true,
    },
    {
      id: 2,
      name: "Sieu anh hung",
      active: false,
    },
    {
      id: 3,
      name: "Phieu Luu",
      active: false,
    },
    {
      id: 4,
      name: "Kinh Di",
      active: false,
    },
    {
      id: 5,
      name: "Hanh Dong",
      active: false,
    },
    {
      id: 6,
      name: "Tinh Cam",
      active: false,
    },
  ];

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:8080/film`)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleFilterMovies = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (category === filter.name) filter.active = true;
        return filter;
      })
    );
    if (category === "All") {
      setMovies(data);
    } else {
      const filteredMovies = data.filter((movie) => movie.des === category);
      setMovies(filteredMovies);
    }
  };

  return (
    <section id="schedule" className="schedule">
      <div className="container mx-auto">
        <div className="flex w-full">
          <h4 className="section-title">Opening in this Week</h4>
        </div>
        <div className="flex w-full">
          <ul className="filters">
            {filters.map((filter) => {
              return (
                <li
                  onClick={() => {
                    handleFilterMovies(filter.name);
                  }}
                  className={`${filter.active ? "active" : ""} rounded-md`}
                  key={filter.id}
                >
                  {filter.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-5 flex flex-wrap">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
