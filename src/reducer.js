import {
  ADD_NUMBER,
  ADD_OPERATOR,
  CALCULATE_RESULT,
  CLEAR_DISPLAY,
} from "./App";

const calculatorReducer = (
  state = { displayValue: "", operator: null, prevValue: null },
  action
) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        displayValue: state.displayValue === "" ? action.payload.number : 
         state.displayValue + action.payload.number,
      };

      // 연산자를 눌렀을 때 수행됨
    case ADD_OPERATOR:
      return {
        ...state,
        operator: action.payload.operator,
        // 처음 누른 값
        prevValue: state.displayValue ,
        displayValue: "",
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

export default calculatorReducer;
