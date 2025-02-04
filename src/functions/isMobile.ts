import { UAParser } from "ua-parser-js";

export function isMobileDevice() {
  const parser = new UAParser();
  const deviceType = parser.getDevice().type; // 'mobile', 'tablet', or undefined
  return deviceType === "mobile" || deviceType === "tablet";
}
