import styles from "./Pagination.module.css";
import { useState } from "react";

function Pagination(props) {
  const itemsPerPage = 5;
  const pageNumbers = [];
  const [isActive, setIsActive] = useState(1);
  const handelOnClickNextPage = () => {
    if (isActive < pageNumbers.length) setIsActive(isActive + 1);
    props.handelIsActiveChange(isActive + 1);
  };

  const handelOnClickPrePage = () => {
    if (isActive > 1) setIsActive(isActive - 1);
    props.handelIsActiveChange(isActive - 1);
  };
  const handelOnClickPagiable = (e) => {
    setIsActive(Number(e.target.value));
    props.handelIsActiveChange(Number(e.target.value));
  };
  for (let i = 1; i <= Math.ceil(props.items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <button
        onClick={handelOnClickPrePage}
        className={`${styles.btn__pre} rounded-s-lg  font-bold shadow-sm text-yellow-400`}
      >{`<`}</button>
      {pageNumbers.length >= 5
        ? pageNumbers.map((el, index) => {
            if (
              index === isActive - 1 ||
              index === isActive ||
              index === pageNumbers.length - 2 ||
              index === pageNumbers.length - 1
            )
              return (
                <button
                  onClick={handelOnClickPagiable}
                  value={el}
                  className={` p-3 ${
                    styles.btn__pagination
                  } text-center shadow-sm  font-bold ${
                    isActive === el ? `${styles.active}` : ""
                  }`}
                  key={index}
                >
                  {index + 1}
                </button>
              );

            if (
              isActive > pageNumbers.length - 2 &&
              (index === 0 || index === 1)
            )
              return (
                <button
                  onClick={handelOnClickPagiable}
                  value={el}
                  className={` p-3 ${
                    styles.btn__pagination
                  } text-center shadow-sm  font-bold ${
                    isActive === el ? `${styles.active}` : ""
                  }`}
                  key={index}
                >
                  {index + 1}
                </button>
              );

            if (index === pageNumbers.length - 3)
              return (
                <button
                  value={el}
                  className={` p-3 ${styles.btn__pagination} text-center shadow-sm  font-bold `}
                  key={index}
                >
                  {"..."}
                </button>
              );
            return null;
          })
        : pageNumbers.map((el, index) => {
            return (
              <button
                onClick={handelOnClickPagiable}
                value={el}
                className={` p-3 ${
                  styles.btn__pagination
                } text-center shadow-sm  font-bold ${
                  isActive === el ? `${styles.active}` : ""
                }`}
                key={index}
              >
                {index + 1}
              </button>
            );
          })}
      <button
        onClick={handelOnClickNextPage}
        className={`${styles.btn__next} rounded-e-md shadow-sm font-bold text-yellow-400`}
      >{`>`}</button>
    </>
  );
}

export default Pagination;
