import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import styles from "./EditProductsDrawer.module.css";
import { message } from "antd";
function AddProductsDrawer(props) {
  const [allProducts,setAllProduct] = useState([])
  const [products,setProducts] = useState({
    id: "",
    name: "",
    des: "",
    img:"",
    price: ""
  })

  useEffect(() => {
    const fetchDataProduct = async () => {
      await axios
        .get("http://localhost:8080/product")
        .then((response) => {
          setAllProduct(Object(response.data));
          if (response.data.length > 0) {
            setProducts((preProduct) => {
              return { ...preProduct, products: response.data[0] };
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchDataProduct();
  }, []);
  console.log("allproduct",allProducts )
  console.log("product",products)
  const handelSubmitForm = async (e) => {
    e.preventDefault()
    await axios
      .post("http://localhost:8080/product", products)
      .then((response) => {
        message.success("Successful")
        props.handelAddIsSuccess(response.data)
      })
      .catch((err) => {
        message.error("Fail")
      });
  }


  

  const handelChange = (e) => {};

  return (
    <div className="bg-white w-2/5 h-auto m-auto mt-8 z-50 opacity-100 rounded-lg p-5 overflow-auto ">
      <form onSubmit={handelSubmitForm}>
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddProductsDrawer

