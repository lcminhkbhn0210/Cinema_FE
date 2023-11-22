import "./trend.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import axios from "../../Components/LoginSignup/axios-instance";
import TrendCart from "../Components/TrendCart";
function Trend() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:8080/film`)
        .then((response) => {
          setSlides(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <section id="trend" className="trend">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <h4 className="section-title">Coming Soon</h4>
        </div>
        <div className="flex flex-wrap">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={{ Autoplay }}
            className="trendSwiper"
          >
            {slides &&
              slides.length > 0 &&
              slides.map((slide) => {
                return (
                  <SwiperSlide key={slide.id}>
                    <TrendCart slide={slide} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Trend;
