import React from 'react';
import "./styles.scss";
import QRScan from "./qr-reader/qr-reader.component";

export default function App() {
  return (
    <div className="App">
      <h1>Hello QR Code Reader</h1>
      <QRScan />
    </div>
  );
}
