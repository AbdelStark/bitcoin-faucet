// src/App.tsx
import "./App.css";
import CaptchaDisplay from "./components/CaptchaDisplay";
import ClaimForm from "./components/ClaimForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catnet Faucet</h1>
        <CaptchaDisplay />
        <ClaimForm />
      </header>
    </div>
  );
}

export default App;
