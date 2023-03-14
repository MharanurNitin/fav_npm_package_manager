import axios from "axios";
import React, { useEffect } from "react";
import { favPackages } from "../global-states";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeletePackage from "./DeletePackage";
import EditIcon from "@mui/icons-material/Edit";
import { useRecoilState } from "recoil";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import UpdatePackage from "./UpdatePackage";

function HasFav() {
  const [favPacks, setFavPacks] = useRecoilState(favPackages);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/add");
  }

  async function getFavPackage() {
    let result = await axios.get("http://localhost:3000/addedPackages");
    setFavPacks(result.data);
  }
  useEffect(() => {
    getFavPackage();
  }, []);
  return (
    <>
      <div className="flex justify-between w-[90%]  items-center mt-10">
        <h1 className="text-3xl">Welcome to Favorite NPM packages</h1>
        <Button onClick={handleClick}>add favs</Button>
      </div>

      <div className="w-[90%] h-fit flex flex-col justify-center items-center border mt-20">
        <div className="w-full flex border-b ">
          <div className="w-1/2 border-r p-2 text-2xl">Package Name</div>
          <div className="w-1/2 p-2 text-2xl">Action</div>
        </div>
        {favPacks?.map((el, index) => (
          <div className="w-full flex border-b " key={index}>
            <div className="w-1/2 border-r p-2 text-xl">{el.name}</div>
            <div className="w-1/2 p-2 flex gap-12">
              <RemoveRedEyeOutlinedIcon />
              <UpdatePackage npm_package={el} />
              <DeletePackage packageDetails={el} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HasFav;
