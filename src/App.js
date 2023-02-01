import logo from './logo.svg';
import './App.css';
import redrose from "./redrose.jpg"
import whiterose from "./whiterose.png"
import {useState} from "react"
function App() {

const [change, setChange]= useState(true)

  const clickHandler = ( )=>{
  setChange(prevVal => !prevVal )
 }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div   onClick={clickHandler}>
      { change ? (<img  className="rose" src={whiterose}/>) : (<img className="rose" src={redrose}/>)}
    </div>
    </div>
  );
}

export default App;
