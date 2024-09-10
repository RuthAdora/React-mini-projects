import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://adoraruth:0987654321`@cluster0.4pbpk.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
