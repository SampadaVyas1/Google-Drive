import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.innerContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png"
          alt=""
          height={50}
        />
        <p className={styles.label}>Google drive</p>
      </div>
    </div>
  );
};

export default Header;
