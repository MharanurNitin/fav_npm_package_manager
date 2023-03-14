import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";
function AddPackage() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [searchResults, setSearchResult] = useState([]);
  const [textAreaValue, setTextAreaValue] = useState("");

  function handleTextArea(e) {
    setTextAreaValue(e.target.value);
  }
  async function handleSubmit() {
    navigate("/");
    let result = await axios.post("http://localhost:3000/add", {
      name: selectedPackage,
      description: textAreaValue,
    });
  }
  async function handleChange(e) {
    setInput(e.target.value);
    let result = await axios.post("http://localhost:3000/search", {
      name: e.target.value,
    });
    setSearchResult(result.data);
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-5/6 p-3 flex flex-col  min-h-[300px]  m-auto rounded-md gap-4">
        <h1 className="text-2xl ml-[5%] text-slate-400">
          Add your Fav packages
        </h1>
        <Input handleChange={handleChange} value={input} />
        {input.length > 2 && searchResults.length > 0 && (
          <div className="flex flex-col w-[90%] mx-auto ">
            <div className="max-h-[195px] overflow-y-scroll ">
              <h3 className="search text-xl text-center">Results</h3>
              {searchResults?.map((el, index) => {
                return (
                  <div className="flex gap-1 items-center" key={index}>
                    <input
                      type="radio"
                      name="radio_group"
                      value={el.name}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      className="border border-red-500 p-1 text-2xl"
                    />
                    <span className="text-lg pl-2">{el.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="textarea">
              <h2>Why this is you favorite</h2>
              <TextArea handleTextArea={handleTextArea} value={textAreaValue} />
            </div>
            <div className="flex justify-end">
              <Button
                onClick={handleSubmit}
                style={{ backgroundColor: "sky-blue", color: "white" }}
              >
                submit
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddPackage;
