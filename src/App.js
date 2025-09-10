import React, { useRef, useState } from "react";
import QRCode from "qrcode";
import "./App.css";

export default function App() {
  const [url, setUrl] = useState("");
  const [dataUrl, setDataUrl] = useState(""); // holds generated PNG data URL
  const [status, setStatus] = useState("idle"); // idle | generating | done | error
  const [alert, setAlert] = useState("");
  const downloadRef = useRef(null);
  const inputRef = useRef(null);

  // Show alert message temporarily
  function showAlert(msg) {
    setAlert(msg);
    setTimeout(() => {
      setAlert("");
    }, 5000);
  }

  // Generate QR code
  async function generateFor(text) {
    setStatus("generating");
    try {
      const options = {
        errorCorrectionLevel: "H",
        type: "image/png",
        width: 800,
        margin: 1,
      };

      // Generate QR code as Data URL
      const d = await QRCode.toDataURL(text, options);
      setDataUrl(d);
      setStatus("done");
    } catch (err) {
      console.error("QR code generation failed", err);
      setStatus("error");
      showAlert("QR code generation failed! Please try again.");
    }
  }
  const handleSubmit = (e) => {
    e && e.preventDefault();
    if (!url.trim()) {
      showAlert("Please enter a valid URL or text");
      return;
    }
  };
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="urlInput">Enter the link</label>
        <input
          id="urlInput"
          type={url}
          value={url}
          ref={InputRef}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
        />
        <div className="buttons">
          <button type="submit">Generate QR</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
          <button type="button" onClick={handleDownload}>
            Download
          </button>
        </div>
      </form>
      <div className="status">
        {status === "generating"
          ? "Generating..."
          : status === "done"
          ? "QR ready"
          : "Ready"}
      </div>
      <div className="qr-area" aria-live="polite">
        {/* SPEC: area must use <img src="" alt="qr-code"> */}
        {dataUrl ? (
          <img id="qr-code" alt="qr-code" src={dataUrl} />
        ) : (
          <div className="placeholder">QR will appear here</div>
        )}
      </div>
      <a ref={downloadRef} style={{ display: "none" }} aria-hidden="true">
        hidden
      </a>
      {alert && (
        <div role="alert" aria-live="assertive" className="alert">
          {alert}
        </div>
      )}
    </div>
  );
}
