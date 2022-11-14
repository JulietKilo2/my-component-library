import React, { useState } from "react";
import styles from "./CustomTooltip.module.css";

const CustomTooltip = ({ children, label, customStyles }) => {
  const [tooltipToggle, setTooltipToggle] = useState(false);
  const onMouseEnter = () => setTooltipToggle(true);
  const onMouseLeave = () => setTooltipToggle(false);
  return (
    label && (
      <div className={styles.customTooltipOuterWrapper}>
        <div
          className={styles.customTooltipInnerWrapper}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
          <span
            style={customStyles}
            className={
              tooltipToggle
                ? styles.customTooltipVisible
                : styles.customTooltipInvisible
            }
          >
            {label}
          </span>
        </div>
      </div>
    )
  );
};

export default CustomTooltip;
