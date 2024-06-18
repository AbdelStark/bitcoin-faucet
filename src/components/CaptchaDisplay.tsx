// src/components/CaptchaDisplay.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";

import config from "../config";

const CaptchaDisplay = () => {
  const [captchaSvg, setCaptchaSvg] = useState("");

  const fetchCaptcha = async () => {
    try {
      const response = await axios.get(`${config.backend.url}/captcha`, {
        responseType: "text",
      });
      setCaptchaSvg(response.data);
    } catch (error) {
      console.error("Error fetching captcha:", error);
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  return (
    <div className="captcha-container">
      {parse(captchaSvg)}
      <button onClick={fetchCaptcha}>Refresh Captcha</button>
    </div>
  );
};

export default CaptchaDisplay;
