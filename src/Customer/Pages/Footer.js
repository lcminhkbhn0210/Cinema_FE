import FooterNavItem from "../Components/FooterNavItem";
import "./footer.css";

function Footer() {
  const usefulLinks = [
    "Home",
    "Movies",
    "My List",
    "Terms of service",
    "Privacy Policy",
  ];
  const locations = ["Quang Thua", "Ha Nam", "Ha Noi", "Bac Giang", "Nam Dinh"];
  return (
    <footer id="footer" className="footer text-white">
      <div className="footer-top">
        <div className="container">
          <div className="gap-y-4 flex justify-between">
            <div className="footer-info w-1/2 ml-20">
              <a href="/user" className="logo flex align-center">
                <span>Cinema</span>
              </a>
              <p>
                Rạp chiếu phim là không gian hội tụ của những cảm xúc, nơi mà
                hình ảnh và âm thanh hòa quyện tạo nên trải nghiệm điện ảnh đích
                thực. Với không gian rộng lớn và màn hình chất lượng cao, rạp
                chiếu phim không chỉ là nơi trình chiếu những bộ phim nổi tiếng
                mà còn là điểm đến của những chuyến phiêu lưu tinh thần.
              </p>
              <div className="social-links mt-3">
                <a href="/user" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="/user" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="/user" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="/user" className="youtube">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>
            <div className=" footer-links">
              <h4>Useful links</h4>
              <ul>
                {usefulLinks.map((link) => {
                  return <FooterNavItem key={link} name={link} />;
                })}
              </ul>
            </div>

            <div className=" footer-links">
              <h4>Our Cinemas</h4>
              <ul>
                {locations.map((location) => {
                  return <FooterNavItem name={location} key={location} />;
                })}
              </ul>
            </div>

            <div className=" footer-contact text-center text-md-start ">
              <h4>Contact Use</h4>
              <p>
                Street Name <br />
                City Name, State 2023
                <br />
                Viet Nam <br />
                <br />
                <strong>Phone:</strong> 0919469733
                <br />
                <strong>Email:</strong> lcminhthpt2000@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex align-content-center flex-col">
        <div className="copyright">
          &copy; Copyright{""}
          <strong>
            <span>Cinema Technology</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits text-center">
          Designed by <a href="/user">Cinima Technology</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
