import React from 'react'
import { useState,useEffect, useRef } from 'react';
import axios from 'axios';
import styles from "./EditProductsDrawer.module.css";
import { message } from "antd";
function EditProductsDrawer(props) {
  const productID = props.productID
  const formRef = useRef();
  const inputLengthRef = useRef();
  const [products, setProducts] = useState()
  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${productID}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateProduct = async () => {
    await axios
      .put(`http://localhost:8080/product/${props.productID}`, products)
      .then((response) => {
        message.success("Update Sucessful");
        props.handleUpdateIsSucces(response.data);
        inputLengthRef.current.value = "";
      })
      .catch((error) => {
        message.error("Update fail");
      });
  };
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    updateProduct();
  };
  const handelChange = (e) => {};

  return (
    <div className="bg-white w-2/5 h-auto m-auto mt-8 z-50 opacity-100 rounded-lg p-5 overflow-auto ">
      <form onSubmit={handleSubmitForm}>
        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Name</label>
          <input onChange={handelChange} className={styles.input} name="name" />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Description</label>
          <input
            onChange={handelChange}
            className={styles.input}
            name="directory"
          />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Image</label>
          <input onChange={handelChange} className={styles.input} name="img" />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Price</label>
          <input onChange={handelChange} className={styles.input} name="des" />
        </div>

        <div className="items-center w-fit m-auto bg-blue-500 rounded-md">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditProductsDrawer

