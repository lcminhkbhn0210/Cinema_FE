import React from 'react'
import { useState,useEffect, useRef } from 'react';
import axios from 'axios';
import styles from "./EditProductsDrawer.module.css";
import { message } from "antd";

function EditProductsDrawer(props) {
  const productID = props.productID
  const formRef = useRef()
  const [products, setProducts] = useState({
    type:'SELL'
  })

  useEffect(() => {
    if(productID !== 0){
      axios
      .get(`http://localhost:8080/product/${productID}`)
      .then((response) => {
        const copyProducts = response.data;
        copyProducts["type"] = "SELL";
        setProducts(copyProducts);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, []);
  console.log("proid",productID)
  const updateProduct = async () => {
    await axios
      .put(`http://localhost:8080/product/${props.productID}`, products)
      .then((response) => {
        message.success("Update Sucessful");
        props.closeDrawer(false)
      })
      .catch((error) => {
        message.error("Update fail");
        console.log(error)
      });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    updateProduct();
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setProducts({
      ...products,
      [name]: value,
    });  console.log("data",products)
  };

  return (
    <div 
      // className="bg-white w-3/6 h-auto m-auto mt-8 z-50 opacity-100 rounded-lg p-5 overflow-auto "
      className={`${styles.draweredit}`}
    >
      <form ref={formRef} onSubmit={handleSubmitForm} id='subform' >
        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Name</label>
          <input onChange={handelChange} className={styles.input} name="name" defaultValue={products?.name}/>
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Description</label>
          <input
            onChange={handelChange}
            className={styles.input}
            name="des"
            defaultValue={products?.des}
          />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Amount</label>
          <input onChange={handelChange} className={styles.input} name="amount"/>
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Image</label>
          <input onChange={handelChange} className={styles.input} name="img" defaultValue={products?.img}/>
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Price</label>
          <input onChange={handelChange} className={styles.input} name="price" defaultValue={products?.price}/>
        </div>

        <div className="items-center w-fit m-auto bg-blue-500 rounded-md">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditProductsDrawer

