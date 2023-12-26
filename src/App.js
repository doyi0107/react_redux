import './App.css';
import React, {useState} from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch} from 'react-redux';

function reducer(currentState, action) {
  // reducer는 현재 state값과 어떻게 바꿀 것인지에 대한 action값 2개를 인자로 받는다. 
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

  // return한 값이 새로운 state값이 된다. 
  return newState;
}

const storei = createStore(reducer);
// createStore 는 전역 상태(state) 를 가지고 있는 store 객체를 생성하는 함수이다. 
// 그리고 store 는 getState, subscribe, dispatch API 를 제공한다.

function App() {

  return (
    <div id="container">
      <h1>Root </h1>
      <div id="gird">
        <Provider store={storei}>
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
  // useSelector()는 함수를 인자값으로 받는다. 
  const number = useSelector( (state) => state.number);
  return (
    <div>
      {/* prop사용하지 않고 무선으로 연결한 형태이다. */}
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
      {/* plus라고 하는 action을 전달한다. */}
      <input type='button' value="+" onClick={() => {dispatch({ type: 'PLUS'})}}></input>
    </div>
  );
}

export default App;
