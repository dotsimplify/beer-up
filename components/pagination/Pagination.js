import React from "react";
import Link from "next/link";
import styles from "./Pagination.module.css";

const Pagination = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= 13; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={`${styles.paginationDiv}`}>
      <div className={`${styles.secondPaginationDiv}`}>
        <div className={`${styles.newpage}  `}>
          {pageNumbers.map((number) => {
            return (
              <Link href={`/?page=${number}`}>
                <div
                  key={number}
                  className={`${
                    Number(props.currentPage) === number
                      ? styles.active
                      : styles.transparent
                  } flex-center ${
                    styles.individualNumber
                  }  hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  bg-gray-700 text-white mx-1`}
                >
                  {number}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
