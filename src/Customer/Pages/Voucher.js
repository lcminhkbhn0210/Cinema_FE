import { useEffect, useState } from "react";
import axios from "../../Components/LoginSignup/axios-instance";
import { Header } from "antd/es/layout/layout";

function Voucher() {
  const handleVoucherOnClick = async (e) => {
    await axios
      .delete(
        `http://localhost:8080/vouchers/voucherCustomer/${e.currentTarget.dataset.value}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(
        "http://localhost:8080/paypal/payment",
        JSON.parse(localStorage.getItem("data"))
      )
      .then((response) => {
        const arrString = response.data.links[1].href.split("=");
        localStorage.removeItem("paypal_order_id");
        localStorage.setItem("paypal_order_id", arrString[1]);
        window.location.replace(response.data.links[1].href);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [vouchers, setVouchers] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/vouchers/voucherCustomer?username=${
          JSON.parse(localStorage.getItem("user")).userDTO.username
        }`
      )
      .then((res) => {
        console.log(res.data);
        setVouchers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="w-max m-auto bg-white p-10 mt-24 rounded-md">
        <ul>
          {vouchers.length > 0 &&
            vouchers.map((voucher) => {
              return (
                <li
                  data-value={voucher.id}
                  onClick={handleVoucherOnClick}
                  className="px-8 py-4 bg-orange-500 mb-4 cursor-pointer"
                  key={voucher.id}
                >
                  {voucher.voucher.name}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default Voucher;
