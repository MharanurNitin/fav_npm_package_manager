import React from "react";

function Input({ handleChange, value }) {
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="express"
      value={value}
      className="p-2 border-[3px] border-slate-800 outline-0 w-[90%] rounded-md mx-auto text-2xl text-slate-400"
    />
  );
}

export default Input;
