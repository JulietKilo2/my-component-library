import React from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({ children, customStyles, buttonEvent }) => {
  const handleOnClick = () => {
    buttonEvent && buttonEvent();
  };

  return (
    <button
      onClick={handleOnClick}
      className={styles.customButton}
      style={customStyles}
    >
      {children}
    </button>
  );
};

export default CustomButton;
