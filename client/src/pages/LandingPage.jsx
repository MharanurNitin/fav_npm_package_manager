import React, { useEffect, useState } from "react";
import axios from "axios";
import HasFav from "../components/HasFav";
import NoFav from "../components/NoFav";
import { favPackages } from "../global-states";
import { useRecoilValue } from "recoil";
function LandingPage() {
  const favPacks = useRecoilValue(favPackages);
  console.log("landing page", favPacks);
  return (
    <div className="w-screen border-green-500 border-8  h-screen flex flex-col items-center">
      {favPacks?.length > 0 ? <HasFav /> : <NoFav />}
    </div>
  );
}

export default LandingPage;
