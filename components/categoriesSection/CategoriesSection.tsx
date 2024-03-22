import React from "react";
import books from "../../src/images/books.jpg";
import kitchenUtensils from "../../src/images/kitchen-utensils.jpg";
import householdMaterials from "../../src/images/household-materials.jpg";
import gadgets from "../../src/images/gadgets.jpg";

const CategoriesSection = () => {
  return (
    <div className="mb-14 pt-10 mx-10">
      <div className="text-center">
        <p className="text-4xl mb-2">Featured Categories</p>
        <div className="bg-orange-700 h-1 w-16 mx-auto"></div>
      </div>
      <div className="mt-8 flex gap-20 items-center justify-center">
        <div className="flex flex-col items-center border-2 rounded-lg border-[#0C2953] bg-[#0C2953] text-white">
          <img
            src={books.src}
            alt="Books"
            style={{ width: "250px", height: "250px" }}
          />
          <p>Books</p>
        </div>
        <div className="flex flex-col items-center border-2 rounded-lg border-[#0C2953] bg-[#0C2953] text-white">
          <img
            src={kitchenUtensils.src}
            alt="Kitchen Utensils"
            style={{ width: "250px", height: "250px" }}
          />
          <p>Kitchen Utensils</p>
        </div>
        <div className="flex flex-col items-center border-2 rounded-lg border-[#0C2953] bg-[#0C2953] text-white">
          <img
            src={householdMaterials.src}
            alt="Household Materials"
            style={{ width: "250px", height: "250px" }}
          />
          <p>Household Materials</p>
        </div>
        <div className="flex flex-col items-center border-2 rounded-lg border-[#0C2953] bg-[#0C2953] text-white">
          <img
            src={gadgets.src}
            alt="Gadgets"
            style={{ width: "250px", height: "250px" }}
          />
          <p>Gadgets</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
