import React from "react";
import "./App.css";
import { countState, doubleCountState } from "./atom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
function Recoil() {
  const [count, setCount] = useRecoilState(countState);
  let countReset = useResetRecoilState(countState);
  //useRecoilValue => state 값만 가져옵니다!
  //useSetRecoilState => set 함수만 가져옵니다!

  const doubleCount = useRecoilValue(doubleCountState);
  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="recoil">
      <h1>Count:{count}</h1>
      <h1>doubleCount:{doubleCount}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={countReset}>reset</button>
    </div>
  );
}

export default Recoil;
