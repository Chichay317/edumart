import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const FeaturesSection = () => {
  return (
    <div className="my-16 mx-10 flex items-center gap-10 justify-center">
      <div className="flex flex-col items-center gap-1 justify-center text-center">
        <AiOutlineSafety
          style={{ width: "70px", height: "70px", color: "#0C2953" }}
        />
        <p>Safe Transactions</p>
        <p>Our advanced encryption keeps your payment details safe.</p>
      </div>
      <div className="flex flex-col items-center gap-1 justify-center text-center">
        <IoSearch style={{ width: "70px", height: "70px", color: "#0C2953" }} />
        <p>Smart Search</p>
        <p>Utilize our powerful search filters to narrow down your options.</p>
      </div>
      <div className="flex flex-col items-center gap-1 justify-center text-center">
        <MdOutlineFavoriteBorder
          style={{ width: "70px", height: "70px", color: "#0C2953" }}
        />
        <p>Wishlist Functionality</p>
        <p>
          {" "}
          Keep track of your favorite listings and make informed decisions.
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
