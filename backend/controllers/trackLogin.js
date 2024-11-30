import LoginHistory from "../models/loginHistory.js";

export const trackLogin = async (req, res) => {
  try {
    const { browser, os, deviceType, ip, userId } = req.body;

    const loginInfo = new LoginHistory({
      userId: userId,
      browser: browser,
      os: os,
      deviceType: deviceType,
      ipAddress: ip,
    });

    await loginInfo.save();

    res.status(200).json({ message: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
