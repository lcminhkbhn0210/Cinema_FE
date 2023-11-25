import Banner from "../Banner";
import Footer from "../Footer";
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
      <Footer />
    </div>
  );
}

export default Home;
