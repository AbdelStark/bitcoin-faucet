// src/App.tsx
import "./App.css";
import CaptchaDisplay from "./components/CaptchaDisplay";
import ClaimForm from "./components/ClaimForm";
import TestWalletGenerator from "./components/TestWalletGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catnet Faucet</h1>
        <CaptchaDisplay />
        <ClaimForm />
        <TestWalletGenerator />
      </header>
    </div>
  );
}

export default App;