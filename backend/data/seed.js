import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import {
  internshipTitles,
  companies,
  locations,
  stipends,
  durations,
} from "./seedHelper.js";
import Internship from "../models/internship.js";

const dbUrl = process.env.MONGODB_URI;
console.log(dbUrl)
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "CONNECTION ERROR"));
db.once("open", () => {
  console.log("DATABASE CONNECTED");
});

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async () => {
  await Internship.deleteMany({});

  for (let i = 0; i < 20; i++) {
    const internship = new Internship({
      title: sample(internshipTitles),
      company: sample(companies),
      location: sample(locations),
      stipend: sample(stipends),
      duration: sample(durations),
    });
    await internship.save();
  }
};

seedDB().then(() => {
  console.log("DB seeded with inetnship");
  mongoose.connection.close();
});
