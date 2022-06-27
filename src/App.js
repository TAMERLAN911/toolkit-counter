import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "./features/cunterReducer";
import {dec} from './features/cunterReducer'
import {res} from './features/cunterReducer'
const App = () => {
  const num = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(inc());
  };

  const handleDec = () => {
    dispatch(dec());
  };

  const handleRes = () => {
    dispatch(res())
  }
  return (
    <div>
      <div>{num}</div>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleRes}>сбросить</button>
    </div>
  );
};

export default App;
