import './App.css';
import React, {useState} from 'react';

function App() {
  const [number,setNumber] = useState(1);

  return (
    <div id='container'>
      <h1>root</h1>
        <Left1 doyi = {number}/>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1 : {props.doyi}</h1>
      <Left2 />
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>Left3</h1>
    </div>
  );
}

export default App;
