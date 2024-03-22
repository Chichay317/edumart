import React from "react";
import styles from "./CategoryHead.module.css";

interface CategoryHeadProps {
  title: string;
}

const CategoryHead: React.FC<CategoryHeadProps> = ({ title }) => {
  return (
    <div className={styles.heading}>
      <p className={styles["heading-paragraph"]}>{title}</p>
    </div>
  );
};

export default CategoryHead;
