import mongoose from "mongoose";

const packageNameSchema = new mongoose.Schema({
  name: String,
});
export default mongoose.model("packagenames", packageNameSchema);
