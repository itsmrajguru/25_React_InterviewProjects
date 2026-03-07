import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";


function QRCodeGenerator() {
    const [name, setName] = useState("___")
    const [qrInput, setQrInput] = useState("___")
    /* the Onchange() is changingn qr on every new word
    so we are creating a seperate state ,and render the state , once we click onclick() */

    function handleGenerateQRButton(getName) {
        setQrInput(getName)
    }
    return (
        <div>
            <h1>QR Code Generator</h1>
            <div style={{ display: "flex", gap: "20px" }}>
                <input
                    type="text"
                    name="qrName"
                    id="qrName"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <button onClick={() => handleGenerateQRButton(name)}>Generate QR</button>
            </div>
            <div style={{ marginTop: "30px" }}>
                <QRCodeCanvas
                    value={qrInput} size={200} />
            </div>
            <div>
                <p style={{
                    marginTop: "15px",
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#ff5722",
                    letterSpacing: "1px",
                    background: "linear-gradient(90deg, #ff5722, #ff9800)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "1px 1px 4px rgba(0,0,0,0.2)"}} > QR Generated for { qrInput }</p>
        </div>
        </div >
    );
}

export default QRCodeGenerator;