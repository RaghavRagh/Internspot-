import axios from "axios";
import UAParser from "ua-parser-js";

const parser = new UAParser();
const uaResult = parser.getResult();
const deviceInfo = {
  browser: uaResult.browser.name,
  os: uaResult.os.name,
  deviceType: uaResult.device.type || "desktop",
};

// console.log(deviceInfo)

export const sendDeviceInfo = async () => {
  const userInfo = localStorage.getItem('userInfo');
  const userInfoObj = JSON.parse(userInfo);
  const userId = userInfoObj._id;
  
  try {
    const token = localStorage.getItem("token");
    if (!token) return;

    const ipResponse = await axios.get('https://api.ipify.org?format=json');
    const ip = ipResponse.data.ip;

    const fullDeviceInfo = { ...deviceInfo, ip, userId };

    // console.log("fullDeviceInfo = ", fullDeviceInfo)

    await axios.post(
      // "https://internspot-backend.vercel.app/device-info",
      "https://13.203.31.33/device-info",
      fullDeviceInfo,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error("Error sending device info", error);
  }
};
