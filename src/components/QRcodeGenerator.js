import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './QRcodeGenerator.css';

function QRcodeGenerator() {
    const [qrCodeData, setQrCodeData] = useState("");

    return (
        <div className="parent">
            <QRCode value={qrCodeData} /><br/>
            <input type="text" value={qrCodeData} onChange={e => setQrCodeData(e.target.value)} />
        </div>
    );
}

export default QRcodeGenerator;
