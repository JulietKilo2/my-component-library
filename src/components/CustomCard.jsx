import React from "react";
import styles from "./CustomCard.module.css";

const CustomCard = ({ children, customStyle }) => {
  return (
    <div className={styles.customCard} style={customStyle || {}}>
      {children}
    </div>
  );
};

export default CustomCard;
