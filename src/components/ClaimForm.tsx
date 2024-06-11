// src/components/ClaimForm.tsx
import { useState, FormEvent } from "react";
import axios from "axios";

import config from "../config";

const ClaimForm = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("0.001");
  const [captcha, setCaptcha] = useState("");
  const [message, setMessage] = useState("");

  const handleClaim = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const url = `${config.backend.url}/claim/${address}/${amount}/${captcha}`;
      const response = await axios.get(url);
      setMessage(`Success: ${response.data}`);
    } catch (error: any) {
      const message = error.response?.data?.message || "An unexpected error occurred";
      setMessage(`Error: ${message}`);
    }
  };

  return (
    <form onSubmit={handleClaim}>
      <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Bitcoin Address" required />
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} min="0.001" max="0.1" step="0.001" required />
      <input type="text" value={captcha} onChange={e => setCaptcha(e.target.value)} placeholder="Enter Captcha" required />
      <button type="submit">Claim Bitcoin</button>
      <p>{message}</p>
    </form>
      );
};

export default ClaimForm;
