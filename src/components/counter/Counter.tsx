import { Button } from "../ui/button/Button";
import { TableCounter } from "../ui/tableCounter/TableCounter";
import  s from "../counter/counter.module.css";

type CounterPropsType = {
  buttonIncrementCounter: () => void
  buttonResetCounter: () => void
  count: number
}
const maxValue = 5;
const minValue = 0;
export const Counter = ({buttonIncrementCounter,buttonResetCounter,count}:CounterPropsType) => {
 
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
