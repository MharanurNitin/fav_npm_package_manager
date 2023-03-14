import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useSetRecoilState } from "recoil";
import { IsUpdateRequest } from "../global-states";
function UpdatePackage({ npm_package }) {
  const setUpdateRequest = useSetRecoilState(IsUpdateRequest);
  function updatePackage(npm_package) {
    setUpdateRequest(npm_package);
    console.log("Update Package", npm_package);
  }
  return <EditIcon onClick={() => updatePackage(npm_package)} />;
}

export default UpdatePackage;
