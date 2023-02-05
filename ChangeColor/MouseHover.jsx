import React, { useState } from "react";

const yellow = { background: 'yellow' }
const red = { background: 'red' }

const ChangeColor = () => {
    const [color, setColor] = useState(yellow)
    return (
        <div className="App">
            <h1>Background color</h1>
            <div onMouseEnter={() => setColor(red)} style={color}>
                Color change on hover
            </div>
        </div>
    );
}

export default ChangeColor;
