// Calculator.js
import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";

// Reducer
const calculatorReducer = (state = { result: 0, currentInput: "" }, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "choose":
       if (state.currentInput !== "" && state.currentInput == NaN) {  }
    case "ADD":
        newState.result = state.result + parseFloat(state.currentInput);
        newState.currentInput = "";
      
      break;
    case "SUBTRACT":
      newState.result = state.result - parseFloat(state.currentInput);
      newState.currentInput = "";
      break;
    case "MULTIPLY":
      newState.result = state.result * parseFloat(state.currentInput);
      newState.currentInput = "";
      break;
    case "DIVIDE":
      newState.result = state.result / parseFloat(state.currentInput);
      newState.currentInput = "";
      break;
    case "CLEAR":
      newState.result = 0;
      newState.currentInput = "";
      break;
    case "UPDATE_CURRENT_INPUT":
      newState.currentInput += action.payload;
      break;
    default:
      break;
  }

  return newState;
};

// Action creators
const 숫자선택 = () => ({ type: "choose" });
const add = () => ({ type: "ADD" });
const subtract = () => ({ type: "SUBTRACT" });
const multiply = () => ({ type: "MULTIPLY" });
const divide = () => ({ type: "DIVIDE" });
const clear = () => ({ type: "CLEAR" });
const updateCurrentInput = (value) => ({
  type: "UPDATE_CURRENT_INPUT",
  payload: value,
});

// Calculator component
function Calculator() {
  const result = useSelector((state) => state.result);
  const currentInput = useSelector((state) => state.currentInput);
  const dispatch = useDispatch();

  const handleNumberClick = (value) => {
    dispatch(updateCurrentInput(value.toString()));
  };

  const handleOperationClick = (operation) => {
    switch (operation) {
      case "✔️":
        dispatch(숫자선택());
        break;
      case "+":
        dispatch(add());
        break;
      case "-":
        dispatch(subtract());
        break;
      case "*":
        dispatch(multiply());
        break;
      case "/":
        dispatch(divide());
        break;
      case "clear":
        dispatch(clear());
        break;
      default:
        break;
    }
  };

  const handleClearClick = () => {
    dispatch(clear());
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <p>Result: {result}</p>
        <p>Current Input: {currentInput}</p>
      </div>
      <div>
        {/* Number buttons */}
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleNumberClick(0)}>0</button>

        {/* Operation buttons */}
        <button onClick={() => handleOperationClick("+")}>+</button>
        <button onClick={() => handleOperationClick("-")}>-</button>
        <button onClick={() => handleOperationClick("*")}>*</button>
        <button onClick={() => handleOperationClick("/")}>/</button>
        <button onClick={() => handleOperationClick("*")}>*</button>
        <button onClick={() => handleOperationClick("✔️")}>✔️</button>

        {/* Clear button */}
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
}

const store = createStore(calculatorReducer);

// App component (unchanged from previous example)
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Calculator />
      </Provider>
    </div>
  );
}
