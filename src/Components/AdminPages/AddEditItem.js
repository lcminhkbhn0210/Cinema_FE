import { message } from "antd";
import styles from "./AddEditItem.module.css";

function AddEditItem(props) {
  const handelChange = (e) => {};
  const handelSubmit = (e) => {
    e.preventDefault();
    props.handelAddIsSuccess();
    message.success("Success");
  };
  return (
    <div className="bg-white w-2/5 h-auto m-auto mt-8 z-50 opacity-100 rounded-lg p-5 overflow-auto ">
      <form onSubmit={handelSubmit}>
        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Name</label>
          <input onChange={handelChange} className={styles.input} name="name" />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">PhoneNumber</label>
          <input
            onChange={handelChange}
            className={styles.input}
            name="directory"
          />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Email</label>
          <input onChange={handelChange} className={styles.input} name="img" />
        </div>

        <div className="flex flex-col p-2 w-2/3">
          <label className="mb-2">Description</label>
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

export default AddEditItem;
