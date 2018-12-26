import React, { Component } from 'react';
const wasm = import("../../build/react_weather_bg");

export class App extends Component {
    
        
render() {
return (

    wasm.then(wasm => {
        const App = () => {
          return (
            <div>
              <h1>Hi there</h1>
              <button onClick={wasm.alert('sateesh')}>Run Computation</button>
            </div>
          );
        };
    })

    // <div>
    //            <h1>Hi there</h1>
    // </div>
);
    }
}