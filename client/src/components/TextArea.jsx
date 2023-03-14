import React from "react";

function TextArea({ handleTextArea, value }) {
  return (
    <textarea
      className="w-full border border-slate-500 p-2 text-lg"
      onChange={handleTextArea}
      value={value}
      required
    />
  );
}

export default TextArea;
