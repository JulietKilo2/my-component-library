import React from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({ children, customStyles }) => {
  return (
    <button className={styles.customButton} style={customStyles}>
      {children}
    </button>
  );
};

export default CustomButton;
