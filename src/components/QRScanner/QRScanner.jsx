import React, { useState } from "react";
import "./QRScanner.css";

export default function QRScanner() {
  const [code, setCode] = useState("");

  const handleClear = () => {
    setCode("");
  };

  const handleConfirm = () => {
    console.log("Confirming code:", code);
  };

  return (
    <div className="scanner-container">
      <h2>Please Scan the part QR Code to start</h2>
      <div className="qr-frame">
        <img src="/img3.jpg" alt="qr" width="100%" height="100%" />
      </div>
      <div className="divider">
        <span>Or</span>
      </div>
      <div className="input-section">
        <p>Enter Code printed on QR Code</p>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="code-input"
        />
        <div className="button-group">
          <button onClick={handleClear} className="clear-button">
            Clear All
          </button>
          <button onClick={handleConfirm} className="confirm-button">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
