import mongoose from "mongoose";
const URI =
  "mongodb+srv://fav_npm_package_manager:MERNSTACKPROJECTS@cluster0.2x0n1ww.mongodb.net/fav_npm_package_manager?retryWrites=true&w=majority";
mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
