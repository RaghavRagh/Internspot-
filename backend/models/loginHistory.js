import mongoose from "mongoose";

const loginHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  browser: { type: String, required: true },
  os: { type: String, required: true },
  deviceType: { type: String, required: true },
  ipAddress: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const LoginHistory = mongoose.model("LoginHistory", loginHistorySchema);
export default LoginHistory;