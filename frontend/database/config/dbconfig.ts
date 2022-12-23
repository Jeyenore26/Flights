import mongoose from "mongoose";

const MongoDb = "mongodb://localhost/earthdatabase";

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MongoDb);
    console.log("Connected to the database");
  } catch (err) {
    console.log("Error connecting to database");
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
