import React from "react";

function Button({ onClick, children, style }) {
  //   consol;
  return (
    <button
      onClick={onClick}
      style={style}
      className="border-0 outline-0  rounded-md py-2 px-3 text-white cursor-pointer w-fit h-fit text-[20px]"
    >
      {children}
    </button>
  );
}

export default Button;
