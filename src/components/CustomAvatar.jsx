import React from "react";
import styles from "./CustomAvatar.module.css";

const CustomAvatar = ({ imgSrc, altText, customStyles }) => {
  return (
    <img
      className={styles.customAvatar}
      style={{ customStyles }}
      src={imgSrc || ""}
      alt={altText || ""}
    />
  );
};

export default CustomAvatar;
