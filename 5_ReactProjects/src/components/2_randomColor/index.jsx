import { useState } from "react";

function GenerateRandomColor() {
    const [selected, setSelected] = useState("hex")
    const [color, setColor] = useState("#212121")


    //Genarate Random Key
    function GenerateRandomKey(length) {
        return Math.floor(Math.random() * length)
    }
    function handleCreatehexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#"

        for (let i = 0; i < 6; i++) {
            hexColor += hex[GenerateRandomKey(hex.length)]
        }
        setColor(hexColor)
    }

    function handleCreatergbColor() {
        const r = GenerateRandomKey(256)
        const g = GenerateRandomKey(256)
        const b = GenerateRandomKey(256)

        setColor(`rgb(${r},${g},${b})`);
    }
    return (
        <div style={{
            width: "90%",
            height: "100vh",
            background: color,
            margin: "0 auto"
        }}>
            <h1 style={{ color: "#212121" }}>Random Color Changer</h1>
            <button onClick={() => setSelected("hex")}>Create HEX color</button>
            <button onClick={() => setSelected("rgb")}>Create RGB color</button>
            <button onClick={() => selected === "hex" ? handleCreatehexColor() : handleCreatergbColor()}>Generate random color</button>

            <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#212121",
                    fontSize: "20px",
                    marginTop: "50px",
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                {selected==="hex"?<h3>HEX Color : {color}</h3>:<h3>RGB Color: {color}</h3>}
            </div>
        </div>
    );
}

export default GenerateRandomColor;