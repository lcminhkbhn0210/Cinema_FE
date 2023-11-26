import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../LoginSignup/axios-instance";
import { message } from "antd";
import TableAdmin from "../Layouts/TableAdmin";
import Pagination from "../Layouts/Pagination";
import styles from "./Manager.module.css";
import AddEditItem from "./AddEditItem";
import EditProductsDrawer from "../ProductsPages/EditProductsDrawer";
import AddProductsDrawer from "../ProductsPages/AddProductsDrawer";
function Manager() {
  const { typeManager } = useParams();
  const [items, setItems] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isActive, setIsActive] = useState(1);
  const [addEditIsClick, setAddEditIsClick] = useState(false);
  const [isOpen,setIsOpen] = useState(false) // drawer
  const itemsPerPage = 5;

  const handelAddIsSuccess = () => {
    setAddEditIsClick(false);
  }
  const handelAddOnClick = () => {
    setAddEditIsClick(true);
  }
  // drawer
  const drawerToggle = () => {
      setIsOpen(!isOpen)
  }
  const handelEditOnClick = (valueId) =>{
    console.log(valueId)
  }
  const handelBodyOnClick = (e) => {
    if (e.target?.id === "managerBody") {
      setAddEditIsClick(false)
    }
  }
  const handelIsActiveChange = (active) => {
    if (active >= 1 && active <= Math.ceil(items.length / itemsPerPage))
      setIsActive(active);
  }

  const handelDeleteIsSuccess = (itemId) => {
    const itemsCopy = items.filter((el) => el.id !== Number(itemId));
    setItems(itemsCopy);
  };
  const handelIsDeleteIsSuccess = (itemId) => {
    const itemsCopy = items.filter((el) => el.id !== Number(itemId));
    setItems(itemsCopy);
    console.log("id in manager", itemId)
  };
  useEffect(() => {
    const handelFetchItems = async () => {
      await axios
        .get(`http://localhost:8080/${typeManager}`)
        .then((response) => {
          setItems(response.data);
          if (response.data) {
            let tempColumn = [];
            let arr = [];
            for (let i = 0; i < response.data.length; i++) {
              arr = arr.concat(Object.keys(response.data[i]));
            }

            arr = new Set(arr);
            tempColumn = [...arr];
            tempColumn = tempColumn.filter((el) => el !== "bills");
            tempColumn.push("Action")
            setColumns(tempColumn)
          }
        })
        .catch((error) => {
          message.error("Khong co phan hoi tu may chu");
          console.log(error);
        })
    }

    handelFetchItems();
  }, [typeManager]);
  return (
    <>
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-bold italic">
          {typeManager.slice(0, 1).toUpperCase() + typeManager.slice(1)} Manager
        </h2>
        <div className="flex items-center rounded-lg bg-primary p-3 mr-12 text-white hover:scale-125 cursor-pointer transition ease-out duration-700">
          <i className="ti ti-plus mr-2"></i>
          <button onClick={handelAddOnClick} className="border-none">
            Add{typeManager.slice(0, 1).toUpperCase() + typeManager.slice(1)}
          </button>
        </div>
      </div>

      <TableAdmin
        items={items}
        columns={columns}
        itemsPerPage={itemsPerPage}
        isActive={isActive}
        handelDeleteIsSuccess={handelDeleteIsSuccess}
        handelIsDeleteIsSuccess={handelIsDeleteIsSuccess}
        handleEditOnClick={handelEditOnClick}
        typeManager={typeManager}
      />
      <div className="items-center flex justify-end w-4/5 mt-3">
        <Pagination items={items} handelIsActiveChange={handelIsActiveChange} />
      </div>

      <div
        id={"managerBody"}
        onClick={handelBodyOnClick}
        className={`h-full w-full fixed bg-black ${styles.modal} z-40 ${
          addEditIsClick ? "" : "hidden"
        }`}
      >
        {/* <AddEditItem  handelAddIsSuccess={handelAddIsSuccess} /> */}
        <AddProductsDrawer /> 
      </div>
    </>
  );
}

export default Manager;
