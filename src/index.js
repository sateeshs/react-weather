import React from 'react';
import ReactDOM from 'react-dom';
import App from './reapp/App';
//import { wasmMemory } from "../build/react_weather_bg";
//console.log(wasmMemory);

/*
(async () => {
  const fetchPromise = fetch('react_weather_bg.wasm');
  const module = await WebAssembly.compileStreaming(fetchPromise);
  const instance = await WebAssembly.instantiate(module);
  //const result = instance.exports.fibonacci(42);
  console.log(instance);
})();


*/

let HelloWorld = () => {
  return <h1>Hello there World!</h1>
}


  
ReactDOM.render(<HelloWorld/>, document.getElementById("root"));