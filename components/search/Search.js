import React from "react";
import styles from "./Search.module.css";

const Search = (props) => {
  return (
    <div className={` ${styles.searchDiv}  `}>
      <div className="w-half">
        <input
          type="text"
          value={props.searchString}
          //   onClick={handleClick}
          placeholder="Search by beer name eg:Misspent Youth"
          //   onBlur={handleBlur}
          onChange={(e) => props.setSearchString(e.target.value)}
          className={`${styles.searchInput} outline-none border dark:bg-gray-500 dark:placeholder:text-gray-300 w-4/5 group border-transparent`}
        />
      </div>
      {/* {searchString ? (
      <div className="bg-transparent cursor-pointer rounded-full hover:bg-gray-100">
        <CloseIcon
          onClick={clearValue}
          className="text-theme-orange hover:text-theme-orange "
        />
      </div>
    ) : (
      <SearchIcon className="text-theme-orange  dark:text-blue-300 cursor-pointer  transform  active:text-blue-600 hover:text-theme-orange" />
    )} */}
    </div>
  );
};

export default Search;
