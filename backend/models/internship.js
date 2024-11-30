import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  stipend: { type: String, required: true },
  duration: { type: String, required: true },
});

const Internship = mongoose.model("Internship", internshipSchema);
export default Internship;