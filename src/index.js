import React from 'react';
import reactDOM from 'react-dom';

const wasm = import("../build/react_weather");

wasm.then(wasm => {
  const App = () => {
    return (
      <div>
        <h1>Hi there</h1>
        <button onClick={wasm.alert("Hi")}>Run Computation</button>
      </div>
    );
  };

  
ReactDOM.render(<h1>Hi there</h1>, document.getElementById("root"));
});