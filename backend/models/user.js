import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: {
    type: String,
    default:
      "https://i.pinimg.com/736x/eb/8a/dd/eb8addac91cec1bba36b57ad28729f17.jpg",
  },
  // googleId: {type: String, unique: true, sparse: true},
  phone: { type: String },
  subscription: {
    plan: {
      type: String,
      enum: ["free", "bronze", "silver", "gold"],
    },
    applications: { type: Number, default: 0 },
    expiresAt: { type: Date },
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
