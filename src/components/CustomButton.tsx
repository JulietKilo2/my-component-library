import React, { FC } from "react";
import styles from "./CustomButton.module.css";

interface Params {
  /**
   * button input value
   */
  label: string | number;
  /**
   * button text color
   */
  textColor?: string;
  /**
   * button background color
   */
  backgroundColor?: string;
  /**
   * button border radius
   */
  radius?: number;
}

const CustomButton: FC<Params> = ({
  label,
  textColor,
  backgroundColor,
  radius,
}) => {
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
