import { useEffect, useState } from "react";
import styles from "./paypal.module.css";
import axios from "../../Components/LoginSignup/axios-instance";
import { useNavigate } from "react-router";
function PayPal() {
  const [paypalResponse, setPaypalResponse] = useState({});
  const navigate = useNavigate();
  const handleAcceptOnClick = () => {
    navigate("/user");
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/paypal/success?token=${localStorage.getItem(
          "paypal_order_id"
        )}`
      )
      .then((response) => {
        console.log(response.data);
        setPaypalResponse(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div
        className={`${styles.content} bg-white m-auto w-fit p-10 rounded-xl mt-10`}
      >
        <div className="text-center">
          <h4 className="text-sm">{paypalResponse?.code}</h4>
          <h1 className="text-4xl">{paypalResponse.filmName}</h1>
          <h4>{paypalResponse.cinema} Screen</h4>
          <span>18/04/2019</span>
          <h1 className="text-4xl">20:00</h1>
          <h4 className="text-sm">~22:20</h4>
        </div>
        <div className="text-center">
          <button
            onClick={handleAcceptOnClick}
            className={`${styles.btn} rounded-md px-4 py-2 mt-4 bg-orange-400`}
          >
            Xac nhan
          </button>
        </div>
      </div>
    </>
  );
}

export default PayPal;
