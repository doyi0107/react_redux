// calculatorApp.js
import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// Actions
const ADD_NUMBER = "ADD_NUMBER";
const ADD_OPERATOR = "ADD_OPERATOR";
const CALCULATE_RESULT = "CALCULATE_RESULT";
const CLEAR_DISPLAY = "CLEAR_DISPLAY";

const addNumber = (number) => ({ type: ADD_NUMBER, payload: { number } });
const addOperator = (operator) => ({
  type: ADD_OPERATOR,
  payload: { operator },
});
const calculateResult = () => ({ type: CALCULATE_RESULT });
const clearDisplay = () => ({ type: CLEAR_DISPLAY });

// Reducer
const calculatorReducer = (
  state = { displayValue: "", operator: null, prevValue: null },
  action
) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        displayValue:
          state.displayValue === ""
            ? action.payload.number
            : state.displayValue + action.payload.number,
      };
    case ADD_OPERATOR:
      return {
        ...state,
        operator: action.payload.operator,
        prevValue: state.displayValue,
        displayValue: "0",
      };
      
    case CALCULATE_RESULT:
      const prev = parseFloat(state.prevValue);
      const current = parseFloat(state.displayValue);
      let result;

      switch (state.operator) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "×":
          result = prev * current;
          break;
        case "÷":
          result = prev / current;
          break;
        case "%":
          result = (prev / 100) * current;
          break;
        default:
          result = current;
      }

      return {
        ...state,
        displayValue: result.toString(),
        operator: null,
        prevValue: null,
      };
    case CLEAR_DISPLAY:
      return {
        displayValue: "",
        operator: null,
        prevValue: null,
      };
    default:
      return state;
  }
};

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
  </Provider>
);

export default CalculatorApp;
