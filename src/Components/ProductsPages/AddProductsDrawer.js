import React from 'react'
import { useState, useRef} from 'react';
import axios from 'axios';
import styles from "./EditProductsDrawer.module.css";
import { message } from "antd";
function AddProductsDrawer(props) {
  const formRef = useRef();
  const [products,setProducts] = useState({
    name: "",
    des: "",
    amount: "",
    img: "",
    price: "",
    type: "SELL"
  })

  const handelSubmitForm = async (e) => {
    e.preventDefault()
    await axios
      .post("http://localhost:8080/product", products)
      .then((response) => {
        message.success("Successful")
      })
      .catch((err) => {
        message.error("Fail")
      });
  }

  const handelChange = (e) => {
    let { name, value } = e.target;
    setProducts({
      ...products,
      [name]: value,
    });
  }
  return (
    <div className="bg-white w-2/5 h-auto m-auto mt-8 z-50 opacity-100 rounded-lg p-5 overflow-auto ">
      <form ref={formRef} onSubmit={handelSubmitForm}>
        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Name</label>
          <input onChange={handelChange} className={styles.input} name="name" />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Description</label>
          <input onChange={handelChange} className={styles.input} name="des"/>
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Amount</label>
          <input onChange={handelChange} className={styles.input} name="amount"/>
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Image</label>
          <input onChange={handelChange} className={styles.input} name="img" />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Price</label>
          <input onChange={handelChange} className={styles.input} name="price" />
        </div>
        
        <div className="items-center w-fit m-auto bg-blue-500 rounded-md">
          <button type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddProductsDrawer

