// src/App.tsx
import "./App.css";
import { useState } from "react";
import CaptchaDisplay from "./components/CaptchaDisplay";
import ClaimForm from "./components/ClaimForm";
import TestWalletGenerator from "./components/TestWalletGenerator";

function App() {
  const [address, setAddress] = useState("");

  const handleSetAddress = (address: string) => {
    setAddress(address);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Catnet Faucet</h1>
        <CaptchaDisplay />
        <ClaimForm address={address} setAddress={setAddress} />
        {<TestWalletGenerator setAddress={handleSetAddress} />}
      </header>
    </div>
  );
}

export default App;
