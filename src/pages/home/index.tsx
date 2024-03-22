import React, { useState, useEffect } from "react";
import homePage from "../../images/homepage.jpg";
import styles from "./HomePageIndex.module.css";
import FeaturesSection from "../../../components/featuresSection/FeaturesSection";
import CategoriesSection from "../../../components/categoriesSection/CategoriesSection";
import AccordionSection from "../../../components/accordionSection/AccordionSection";

const HomePageIndex = () => {
  const [headings, setHeadings] = useState([
    "Elevate your student experience with Edu",
    "The heartbeat of student commerce: Edu",
  ]);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) =>
        prevIndex === headings.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [headings]);

  return (
    <>
      <div className={styles.homepageContainer}>
        <img
          src={homePage.src}
          alt="Homepage Background"
          className={styles.homepageImage}
        />
        <div className={styles.overlay}>
          <h1 className={`${styles.overlayHeading} ${styles.slideIn}`}>
            <span className={styles.slideContent}>
              {headings[currentHeadingIndex]}
            </span>
            <span className={`text-orange-700 ${styles.slideIn}`}>Mart</span>.
          </h1>
          <p className={`${styles.overlayParagraph} ${styles.slideIn}`}>
            EduMart is your gateway to a vibrant marketplace buzzing with deals
            on textbooks, gadgets, and more. Make every purchase a smart one,
            and turn your no-longer-needed items into extra cash.
          </p>
        </div>
      </div>
      <FeaturesSection />
      <CategoriesSection />
      <AccordionSection />
    </>
  );
};

export default HomePageIndex;
