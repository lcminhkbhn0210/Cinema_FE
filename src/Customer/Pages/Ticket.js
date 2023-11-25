import { useEffect } from "react";
import { useState } from "react";
import axios from "../../Components/LoginSignup/axios-instance";
import { useNavigate, useParams } from "react-router";
import styles from "./ticket.module.css";

function Ticket() {
  const [tickets, setTickets] = useState([]);
  const { showTimesId } = useParams();
  const [bookedTickets, setBookedTickets] = useState([]);
  const navigate = useNavigate();

  const handelOnClickTicket = (e) => {
    const ticket = tickets[e.target.value];
    if (ticket.sold === false) {
      if (bookedTickets.includes(ticket)) {
        e.target.classList.remove("bg-red-600");
        setBookedTickets(
          bookedTickets.filter((bookedTicket) => bookedTicket.id !== ticket.id)
        );
      } else {
        e.target.classList.add("bg-red-600");
        setBookedTickets([...bookedTickets, ticket]);
      }
    }
  };

  const handelBookTicket = () => {
    const listTicketId = bookedTickets.map((bookTicket) => {
      return bookTicket.id;
    });
    const listBuyProductId = [8, 9];
    const data = {
      listTicketId: listTicketId,
      listBuyProductId: listBuyProductId,
      userAccount: JSON.parse(localStorage.getItem("user")).userDTO.username,
    };
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/user/voucher");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/ticket/${showTimesId}`)
      .then((res) => {
        setTickets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [showTimesId]);
  return (
    <>
      <div className={`${styles.content} bg-white p-10`}>
        <div className="mb-6">
          <h1 className="text-center text-4xl">Màn hình</h1>
        </div>
        <div>
          <ul className="flex flex-wrap justify-around w-3/4 m-auto">
            {tickets.length > 0 &&
              tickets.map((ticket, index) => {
                return (
                  <li
                    onClick={handelOnClickTicket}
                    value={index}
                    className={`border-black border-2 mr-2 p-2 mb-2 rounded-md cursor-pointer ${
                      ticket.des === "NORMAL" && ticket.sold === false
                        ? "bg-gray-400"
                        : ""
                    } ${
                      ticket.des === "VIP" && ticket.sold === false
                        ? "bg-orange-500"
                        : ""
                    } ${ticket.sold === true ? "bg-gray-700" : ""}`}
                    key={ticket.id}
                  >
                    {ticket.name}
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          <ul className="flex  justify-center mt-4">
            <li className=" border-black border-2 mr-2 p-2 mb-2 rounded-md bg-gray-400 text-white">
              Ghế tiêu chuẩn
            </li>
            <li className=" border-black border-2 mr-2 p-2 mb-2 rounded-md bg-red-600 text-white">
              Ghế đang chọn
            </li>
            <li className=" border-black border-2 mr-2 p-2 mb-2 rounded-md bg-orange-500 text-white">
              Ghế vip
            </li>
            <li className=" border-black border-2 mr-2 p-2 mb-2 rounded-md bg-gray-700 text-white">
              Ghế đã được đặt
            </li>
          </ul>
        </div>
        <div className="text-center mt-3">
          <button
            onClick={handelBookTicket}
            className={`rounded-md border-2 border-black px-5 bg-red-500 py-2 ${
              bookedTickets.length === 0 ? "hidden" : ""
            }`}
          >
            Book
          </button>
        </div>
      </div>
    </>
  );
}

export default Ticket;
