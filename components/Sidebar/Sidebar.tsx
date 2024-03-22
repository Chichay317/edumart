// Import necessary libraries and components
import React from "react";
import styles from "./Sidebar.module.css";
import { FaBookOpen } from "react-icons/fa6";
import Price from "../Price/Price";

interface SidebarProps {
  onSelectPriceRange: (price: number | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectPriceRange }) => {
  return (
    <section className={styles.sidebar}>
      <div className={styles["logo-container"]}>
        <FaBookOpen className={styles["logo-container-icon"]} />
      </div>

      <Price onSelectPriceRange={onSelectPriceRange} />
    </section>
  );
};

export default Sidebar;
