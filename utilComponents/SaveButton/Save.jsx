import React from "react";
import { AiOutlineSave } from "react-icons/ai";

const Save = () => {
  return (
    <button
      type="submit"
      className="flex items-center gap-2 border border-[#0C2953] bg-[#0C2953] py-2 px-8 rounded-lg"
    >
      <AiOutlineSave style={{ color: "white" }} />
      <span className="text-white text-base font-medium">Submit</span>
    </button>
  );
};

export default Save;
