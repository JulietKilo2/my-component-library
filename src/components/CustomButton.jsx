import React from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({ label, textColor, backgroundColor, radius }) => {
  return (
    <button
      className={styles.customButton}
      style={{
        color: textColor || "black",
        backgroundColor: backgroundColor || "white",
        borderRadius: radius || "2px",
      }}
    >
      {label}
    </button>
  );
};

export default CustomButton;
