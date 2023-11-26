import styles from "./TableAdmin.module.css"
import { Link } from "react-router-dom"
import axios from "../LoginSignup/axios-instance"
import { message } from "antd"
import { useEffect, useState } from "react"
import EditProductsDrawer from "../ProductsPages/EditProductsDrawer"
import EditShowtimesDrawer from "../ShowtimesPage/EditShowtimesDrawer"
import EditFilmAdmin from "../AdminPages/EditFilmAdmin"

function TableAdmin(props) {
  const [itemId, setItemId] = useState(0);
  const handleClose = (status) => {
    setIsOpen(status)
  }
  const [isOpen,setIsOpen] = useState(false) // drawer
  const [typeDrawTable,setTypeDrawTable] = useState(0)
  const typeDT = [
    <EditFilmAdmin/>,
    <EditProductsDrawer productID={itemId} closeDrawer={handleClose}/>,
    <EditShowtimesDrawer />
  ]

  const deleteItem = async (id) => [
    await axios
      .delete(`http://localhost:8080/${props.typeManager}/${id}`)
      .then((response) => {
        props.handelIsDeleteSuccess(response.data?.id)
        props.handelIsDeleteIsSuccess(response.data?.id)
        message.success("Xoa thanh cong");
        
        console.log("id",itemId)
      })
      .catch((error) => {
        message.error("Xoa that bai")
        console.log(error)
      }),
  ];
  const handelDeleteOnClick = (e) => {
    const userConfirm = window.confirm("Ban co muon xoa khong?")
    if (userConfirm) {
      deleteItem(e.target.value);
    }
  };

  const handelEditOnClick = (e) => {
    setItemId(e.target.value)
    drawerToggle()
  }

  const drawerToggle = () => {
    setIsOpen(!isOpen)
    // onTypeManager()
  }
  useEffect(() => {
    onTypeManager()
  })

  const onTypeManager = () =>{
    if (props.typeManager === 'product'){setTypeDrawTable(1)}
    else if (props.typeManager === 'showtimes'){setTypeDrawTable(2)}

    else {setTypeDrawTable(0)}
  }
  return (
    <div className={`${styles.containers}`}>
    <table
      className={`bg-white text-black rounded-lg w-3/5 ml-28 ${styles.table} border-collapse shadow-lg border-none p-4 overflow-x-scroll w-auto`}
    >
      <thead className="bg-blue-500 text-white">
        <tr className="">
          {props.items.length > 0
            ? props.columns.map((el) => {
                return <th key={el}>{el.toUpperCase()}</th>;
              })
            : null}
        </tr>
      </thead>
      {props.items.map((el, index) => {
        if (
          index >= (props.isActive - 1) * props.itemsPerPage &&
          index < props.isActive * props.itemsPerPage
        ) {
          return (
            <tbody
              key={el.id}
              className=" cursor-pointer hover:bg-gray-200  transition ease-out duration-700"
            >
              <tr className="">
                {props.columns.map((element, index) => {
                  if (element !== "Action")
                    return (
                      <td
                        key={element}
                        className={
                          index === 1 ? "text-blue-700 w-1/4 text-left" : ""
                        }
                      >
                        {(() => {
                          if (
                            element === "authorities" &&
                            props.typeManager === "user"
                          ) {
                            let userAuthorities = "";
                            for (let i = 0; i < el[element].length; i++) {
                              userAuthorities =
                                userAuthorities +
                                "," +
                                el[element][i]["authority"];
                            }
                            return userAuthorities.trim().slice(1);
                          } else if (
                            (element === "customer" &&
                              props.typeManager === "bill") ||
                            (element === "employee" &&
                              props.typeManager === "bill")
                          ) {
                            const userId = el[element]?.id
                              ? el[element]?.id
                              : el[element];
                            return userId;
                          } else if (
                            element === "sellDate" &&
                            props.typeManager === "bill"
                          ) {
                            return el[element].slice(0, 10);
                          } else {
                            if (typeof el[element] === "object")
                              return JSON.stringify(el[element]);
                            return el[element];
                          }
                        })()}
                      </td>
                    );
                  else return null;
                })}
                <td className="">
                  <Link className="mr-4">
                    <button
                      onClick={handelEditOnClick}
                      value={el.id}
                      className="border-none rounded-md bg-green-400 py-2 px-6 text-white  hover:scale-125 hover:bg-green-500 transition ease-out duration-700"
                    >
                      Edit
                    </button>
                  </Link>
                  <Link>
                    <button
                      onClick={handelDeleteOnClick}
                      value={el.id}
                      className="border-none rounded-md bg-red-500 py-2 px-4 text-white  hover:scale-125 hover:bg-red-600 transition ease-out duration-700"
                    >
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        } else return null;
      })}
    </table>
      <div >
        <div>{isOpen && <div onClick={drawerToggle} 
        className={`h-full w-full fixed bg-black ${styles.modal} z-10`}
        ></div>}
        </div>
        <span className={`${styles.editdrawer}`}>
            {isOpen && typeDT[typeDrawTable]}
        </span>
      </div>
    </div>
  );
}

export default TableAdmin;
