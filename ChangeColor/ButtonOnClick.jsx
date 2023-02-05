import React, { useState } from "react";
import "./Style.css";
const App = () => {
const [style, setStyle] = useState("cont");

const changeStyle = () => {
	console.log("you just clicked");

	setStyle("cont2");
};
return (
	<>
	<div className="App">CHANGE CSS STYLING WITH ONCLICK EVENT</div>
	<div className={style}>
		<button className="button" onClick={changeStyle}>
		Click me!
		</button>
	</div>
	</>
);
};
export default App;
