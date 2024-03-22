import React from "react";
import { FaRegEdit } from "react-icons/fa";

const Edit = ({ onClick }) => {
  return (
    <div className="flex items-center gap-2 border border-[#0C2953] bg-[#0C2953] py-2 px-8 rounded-lg">
      <FaRegEdit style={{ color: "white" }} />
      <button className="text-white text-base font-medium" onClick={onClick}>
        Edit
      </button>
    </div>
  );
};

export default Edit;
