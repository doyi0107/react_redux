import './App.css';
import React, {useState} from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch} from 'react-redux';
import { act } from 'react-dom/test-utils';

function reducer(currentState, action) {
  if(currentState === undefined){
    return{
      number:1
    };
  }
  // 과거의 state를 복제한다. 
  const newState = {...currentState}
  // 그렇게 복제한 객체를 수정하면 불변성을 유지할 수 있다. 
  if(action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
}

const store = createStore(reducer);

function App() {

  return (
    <div id="container">
      <h1>Root </h1>
      <div id="gird">
        <Provider store={store}>
          {/* 이젠 이 안에 있는 component는 store를 사용할 수 있다.  */}
          <Left1 />
          <Right1/>
        </Provider>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1 :</h1>
      <Left2/>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3 />
    </div>
  );
}

function Left3(props) {
  const number = useSelector( (state) => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
  
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
}

function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type='button' value="+" onClick={() => {dispatch({ type: 'PLUS'})}}></input>
    </div>
  );
}

export default App;
