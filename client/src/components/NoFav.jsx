import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function NoFav() {
  const navigate = useNavigate();
  function navigateToAddPackage() {
    navigate("/add");
  }
  return (
    <>
      <h1>Welcome to Favorite NPM packages</h1>
      <div className="w-5/6 p-4 border-slate-500 border h-80 flex justify-center items-center flex-col box-border">
        <p className="mb-8">you don't have any favs yet.please add.</p>
        <Button onClick={navigateToAddPackage}>Add fav</Button>
      </div>
    </>
  );
}

export default NoFav;
