import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Link href="/">
      <div className={`header container-full mx-auto  `}>
        <span>Beer Shop 🍻</span>
      </div>
    </Link>
  );
};

export default Header;
