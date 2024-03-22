import React from "react";
import styles from "./spinner.module.scss";

interface SpinnerProps {
  size?: number;
  color?: string;
}

interface SpinnerStyle {
  "--size"?: string;
  "--color"?: string;
}

export default function Spinner({ size = 24, color = "black" }: SpinnerProps) {
  const spinnerStyle: SpinnerStyle = {
    "--size": size + "px",
    "--color": color,
  };

  return (
    <div className={styles.spinner} style={spinnerStyle as React.CSSProperties}>
      {Array(12)
        .fill(null)
        .map((_, index) => {
          return <div key={index} />;
        })}
    </div>
  );
}
