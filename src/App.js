// calculatorApp.js
import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import calculatorReducer from "./reducer"; 
import Recoil from "./recoil";
import { RecoilRoot } from "recoil";
import "./App.css"

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

  // class="bg-[#50d71e] w-60 size-full"
// class="mx-8 ..." 
  return (
    <div
      id="wrap"
      class=" mx-auto grid justify-center items-center flex h-screen "
    >
      <div
        id="center"
        class="h-200px w-300"
      >
        <div class="grid justify-center m-8 text-3xl">
          Display: {displayValue}
        </div>
        <div class="" id="button_wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button
              class="w-15 h-15 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              key={number}
              onClick={() => handleNumberClick(number.toString())}
            >
              {number}
            </button>
          ))}
          {["+", "-", "×", "÷", "%"].map((operator) => (
            <button
              class="w-15 h-15 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              key={operator}
              onClick={() => handleOperatorClick(operator)}
            >
              {operator}
            </button>
          ))}
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-15 h-15"
            onClick={handleEqualClick}
          >
            =
          </button>
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-13 h-15"
            onClick={handleClearClick}
          >
            C
          </button>
        </div>
      </div>

      <RecoilRoot>
        <Recoil />
      </RecoilRoot>
    </div>
  );
};

// Render
const CalculatorApp = () => (
  <Provider store={store}>
    <App />

  </Provider>
);

export default CalculatorApp;
