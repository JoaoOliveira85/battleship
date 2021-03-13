import React, { ReactElement } from "react";
import { Gameboard } from "components";
import "./App.css";

function App(): ReactElement {
    return (
        <div className="App">
            <h1>Hello, World!</h1>
            <Gameboard />
        </div>
    );
}

export default App;
