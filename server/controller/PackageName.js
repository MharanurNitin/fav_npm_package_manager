import Packages from "../model/PackageName.js";
import npmKeyword from "npm-keyword";

const searchPackages = async (req, res) => {
  let { name } = req.body;
  let result = await npmKeyword(name);
  res.json(result);
};

const addPackages = async (req, res) => {
  let { name } = req.body;
  const packageName = new Packages({ name: name });
  const result = await packageName.save();
  console.log(result);
};
const getAddedPackages = async (req, res) => {
  const result = await Packages.find({});
  res.send(result);
};

const updatePackageName = async (req, res) => {
  const { name, id } = req.body;

  const result = await Packages.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        name: name,
      },
    },
    {
      new: true,
    }
  );
  console.log(result);
};

const deletePackage = async (req, res) => {
  const { id } = req.body;

  const result = await Packages.findByIdAndDelete({ _id: id });
  if (result === null) {
    res.status(404).send({ message: "Package not found" });
  }
};

export {
  addPackages,
  searchPackages,
  getAddedPackages,
  updatePackageName,
  deletePackage,
};
