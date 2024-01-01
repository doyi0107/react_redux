import React from "react";
import "./App.css";
import { countState, doubleCountState } from "./atom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
function Recoil() {
  const [count, setCount] = useRecoilState(countState);
  let countReset = useResetRecoilState(countState);

  const doubleCount = useRecoilValue(doubleCountState);
  //useRecoilValue => state 값만 가져옵니다!
  //useSetRecoilState => set 함수만 가져옵니다!
  
  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div id="recoil" class="mt-[-200px] ">
      <h1 class="text-2xl">Count:{count}</h1>
      <h1 class="text-2xl">doubleCount:{doubleCount}</h1>
      <div id="recoil_button_wrap" class="mt-[50px]">
        <button
          class="text-2xl  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={plus}
        >
          +
        </button>
        <button
          class="text-2xl  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded"
          onClick={minus}
        >
          -
        </button>
        <button
          class="text-2xl  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={countReset}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Recoil;
