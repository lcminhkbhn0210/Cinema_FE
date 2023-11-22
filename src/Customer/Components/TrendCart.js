import "./trendcart.css";
function TrendCart(props) {
  return (
    <div className="trend-card">
      <img className="img-fluid" src={props.slide.img} alt="" />
      <button href="/user">
        Add to calendar <ion-icon name="calendar-outline"></ion-icon>
      </button>
    </div>
  );
}
export default TrendCart;
