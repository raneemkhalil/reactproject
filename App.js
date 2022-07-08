"use strict";

import Button from "./Button.js";

function App(){
    return (
        <Button name="+" />
    );
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);