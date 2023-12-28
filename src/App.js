// calculatorApp.js
import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import calculatorReducer from "./reducer"; 

// Actions
export const ADD_NUMBER = "ADD_NUMBER";
export const ADD_OPERATOR = "ADD_OPERATOR";
export const CALCULATE_RESULT = "CALCULATE_RESULT";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

const addNumber = (number) => ({ type: ADD_NUMBER, payload: { number } });
const addOperator = (operator) => ({
  type: ADD_OPERATOR,
  payload: { operator },
});
const calculateResult = () => ({ type: CALCULATE_RESULT });
const clearDisplay = () => ({ type: CLEAR_DISPLAY });



// Store
const store = createStore(calculatorReducer);

// App Component
const App = () => {
  const displayValue = useSelector((state) => state.displayValue);
  const dispatch = useDispatch();

  const handleNumberClick = (number) => {
    dispatch(addNumber(number));
  };

  const handleOperatorClick = (operator) => {
    dispatch(addOperator(operator));
  };

  const handleEqualClick = () => {
    dispatch(calculateResult());
  };

  const handleClearClick = () => {
    dispatch(clearDisplay());
  };

  return (
    <div>
      <div>Display: {displayValue}</div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
        <button
          key={number}
          onClick={() => handleNumberClick(number.toString())}
        >
          {number}
        </button>
      ))}
      {["+", "-", "×", "÷", "%"].map((operator) => (
        <button key={operator} onClick={() => handleOperatorClick(operator)}>
          {operator}
        </button>
      ))}
      <button onClick={handleEqualClick}>=</button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
};

// Render
const CalculatorApp = () => (
  <Provider store={store}>
    <App />
    <p className="text-blue-500 text-xl font-bold">tailwindcss 테스트하고 있습니다.</p>
  </Provider>
);

export default CalculatorApp;
