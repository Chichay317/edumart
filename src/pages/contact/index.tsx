import React from "react";
import questions from "../../../src/images/questions2.jpg";
import styles from "./contact.module.css";

const ContactUs = () => {
  return (
    <>
      <div className="flex gap-6 bg-[#0C2953]">
        <img
          src={questions.src}
          style={{ width: "50%", height: "100vh" }}
          alt="Questions"
        />
        <div className="flex flex-col justify-center">
          <p className="text-5xl font-semibold mb-2 text-white">Let's Talk!</p>
          <p className="text-xl medium mb-10 text-white">
            Say something to us 😍.
          </p>

          <div>
            <form>
              <div className={styles.contactFormGroup}>
                <label className={styles.contactFormLabel} htmlFor="text">
                  First Name
                </label>
                <input
                  type="text"
                  className={styles.contactFormInput}
                  required
                />
              </div>

              <div className={styles.contactFormGroup}>
                <label className={styles.contactFormLabel} htmlFor="text">
                  Last Name
                </label>
                <input
                  type="text"
                  className={styles.contactFormInput}
                  required
                />
              </div>

              <div className={styles.contactFormGroup}>
                <label className={styles.contactFormLabel} htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  className={styles.contactFormInput}
                  required
                />
              </div>

              <div className={styles.contactFormGroup}>
                <label className={styles.contactFormLabel} htmlFor="text">
                  Issue / Comment
                </label>
                <textarea
                  className={styles.contactFormInput}
                  style={{ width: "500px", height: "150px" }}
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#0C2953] hover:text-[#CCD4DF] px-6 text-lg py-2 rounded-xl text-white"
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
