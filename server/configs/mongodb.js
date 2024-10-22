// import mongoose from "mongoose";

// const connectDB = async () => {
//   mongoose.connection.on("connected", () => {
//     console.log("DB connected");
//   });
//   await mongoose.connect(`${process.env.MONGODB_URL}/bg-removal`);
// };
// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/bg-removal`
    );
    console.log(
      `DB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
export default connectDB;
