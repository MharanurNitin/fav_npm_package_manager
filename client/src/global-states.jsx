import axios from "axios";
import { atom } from "recoil";

let data;
async function getFavPackages() {
  let result = await axios.get("http://localhost:3000/addedPackages");
  return (data = result.data);
}

export const favPackages = atom({
  key: "favPackages",
  default: getFavPackages(),
});

export const IsUpdateRequest = atom({
  key: "isUpdateRequest",
  default: false,
});
