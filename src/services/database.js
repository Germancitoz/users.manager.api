import mongoose from "mongoose";
import Log from "../utils/log.js";

import { databaseConfig } from "../config/index.js";

export const connectDatabase = () => {
  return new Promise(async (resolve, reject) => {
    Log.send("CURRENT", "Connecting to MONGODB server");
    await mongoose.connect(databaseConfig.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    Log.send("SUCCESS", "Connected to MONGODB server");
    resolve();
  });
};
