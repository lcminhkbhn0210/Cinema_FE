import styles from "./TableAdmin.module.css";
import { Link } from "react-router-dom";

function TableAdmin(props) {
  return (
    <table
      className={`bg-white text-black rounded-lg w-3/5 m-auto ${styles.table} border-collapse shadow-lg border-none p-4 `}
    >
      <thead className="bg-blue-500 text-white">
        <tr>
          {props.columns.map((el, index) => {
            return (
              <th
                key={el}
                className={`${index === 1 ? "w-1/4 text-left" : ""}`}
              >
                {el.toUpperCase()}
              </th>
            );
          })}
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
              className=" cursor-pointer hover:bg-green-200  transition ease-out duration-700"
            >
              <tr>
                {props.columns.map((element, index) => {
                  if (element !== "Action")
                    return (
                      <td
                        key={element}
                        className={
                          index === 1 ? "text-blue-700 w-1/4 text-left" : ""
                        }
                      >
                        {el[`${element}`]}
                      </td>
                    );
                  else return null;
                })}
                <td className="">
                  <Link className="mr-4">
                    <button className="border-none rounded-md bg-green-400 py-2 px-6 text-white  hover:scale-125 hover:bg-green-500 transition ease-out duration-700">
                      Edit
                    </button>
                  </Link>
                  <Link>
                    <button className="border-none rounded-md bg-red-500 py-2 px-4 text-white  hover:scale-125 hover:bg-red-600 transition ease-out duration-700">
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
  );
}

export default TableAdmin;
