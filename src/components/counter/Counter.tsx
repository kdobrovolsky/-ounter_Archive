import { useState } from "react";
import { Button } from "../ui/button/Button";
import { TableCounter } from "../ui/tableCounter/TableCounter";
import  s from "../counter/counter.module.css";

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
    <div className={s.container}>
      <div className={s.counterWrapper}>
        <TableCounter count={count} />
        <div >
          <Button
            title="inc"
            onClick={buttonIncrementCounter}
            disable={incrementDisabled}
            className={incrementDisabled?s.disableStyle:s.button}/>
          <Button
            title="reset"
            onClick={buttonResetCounter}
            disable={resetDisable}
            className={resetDisable?s.disableStyle:s.button}/>
        </div>
      </div>
    </div>
  );
};
