import React from "react";
import styles from "./Price.module.css";
import Input from "../Input/Input";

interface PriceProps {
  onSelectPriceRange: (price: number | null) => void;
}

const Price: React.FC<PriceProps> = ({ onSelectPriceRange }) => {
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove commas and then parse the integer
    const selectedPrice =
      event.target.value === ""
        ? null
        : parseFloat(event.target.value.replace(/,/g, ""));

    onSelectPriceRange(selectedPrice);
  };

  return (
    <div>
      <h2 className="text-xl mt-10 mb-6">Price</h2>

      <label className={styles["sidebar-label-container"]}>
        <input
          type="radio"
          value=""
          name="test2"
          onChange={handlePriceChange}
        />
        <span className={styles.checkmark}></span>All
      </label>

      <label className={styles["sidebar-label-container"]}>
        <input
          type="radio"
          value={3000}
          name="test2"
          onChange={handlePriceChange}
        />
        <span className={styles.checkmark}></span>₦0 - ₦3000
      </label>

      <label className={styles["sidebar-label-container"]}>
        <input
          type="radio"
          value={6000}
          name="test2"
          onChange={handlePriceChange}
        />
        <span className={styles.checkmark}></span>₦3000 - ₦6000
      </label>

      <label className={styles["sidebar-label-container"]}>
        <input
          type="radio"
          value={9000}
          name="test2"
          onChange={handlePriceChange}
        />
        <span className={styles.checkmark}></span>₦6000 - ₦9000
      </label>

      <label className={styles["sidebar-label-container"]}>
        <input
          type="radio"
          value={12000}
          name="test2"
          onChange={handlePriceChange}
        />
        <span className={styles.checkmark}></span>₦9000 - ₦12,000
      </label>

      <label className={styles["sidebar-label-container"]}>
        <input
          type="radio"
          value={13000}
          name="test2"
          onChange={handlePriceChange}
        />
        <span className={styles.checkmark}></span>Over ₦12,000
      </label>
    </div>
  );
};

export default Price;
