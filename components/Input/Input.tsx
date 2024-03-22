import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  value: number;
  title: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ value, title, name }) => {
  return (
    <label htmlFor="" className={styles["sidebar-label-container"]}>
      <input type="radio" value={value} name={name} />
      <span
        className={styles.checkmark}
        // style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default Input;
