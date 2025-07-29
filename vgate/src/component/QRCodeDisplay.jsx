// src/components/QRCodeDisplay.jsx
import React, { useState } from 'react';
import axios from 'axios';

function QRCodeDisplay({ studentId }) {
  const [qrImage, setQrImage] = useState('');

  const generateQR = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/generate-qr/${studentId}`);
      setQrImage(res.data.qrImage);
    } catch {
      alert('QR generation failed');
    }
  };

  return (
    <div>
      <h3>QR Code</h3>
      <button onClick={generateQR}>Generate QR Code</button><br />
      {qrImage && <img src={qrImage} alt="QR Code" />}
    </div>
  );
}

export default QRCodeDisplay;
