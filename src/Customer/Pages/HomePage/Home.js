import Banner from "../Banner";
import Header from "../Header";
import Main from "../Main";
import "./home.css";
import "swiper/css";
function Home() {
  return (
    <div className="bg-black h-screen">
      <Header />
      <Banner />
      <Main />
    </div>
  );
}

export default Home;
