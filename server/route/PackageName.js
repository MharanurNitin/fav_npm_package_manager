import express from "express";
import {
  addPackages,
  searchPackages,
  getAddedPackages,
  updatePackageName,
  deletePackage,
} from "../controller/PackageName.js";
const router = express.Router();

router.post("/add", addPackages);
router.post("/search", searchPackages);
router.get("/addedPackages", getAddedPackages);
router.patch("/updatePackageName", updatePackageName);
router.delete("/deletePackage", deletePackage);
export default router;
