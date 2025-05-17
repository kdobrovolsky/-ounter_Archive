import { useState } from "react";
import { Button } from "./Button";
import { TableCounter } from "./TableCounter";

//выносим константы чтобы не было лишнего перерендринга
const maxValue = 5;
const minValue = 0;
export const Counter = () => {
  const [count, setCount] = useState(0);

  const buttonIncrementCounter = () => {
    if (count < 5) {
      setCount(prev=>prev+1);
    }
  };

  const buttonResetCounter = () => {
    setCount(0);
  };

  const incrementDisabled= count >= maxValue
  const resetDisable = count <= minValue

  return (
    <div className="container">
      <div className="app">
        <TableCounter count={count} />
        <div className="button-wrapper">
          <Button
            title="inc"
            onClick={buttonIncrementCounter}
            disable={incrementDisabled}
            className="button"/>
          <Button
            title="reset"
            onClick={buttonResetCounter}
            disable={resetDisable}
            className="button"/>
        </div>
      </div>
    </div>
  );
};
