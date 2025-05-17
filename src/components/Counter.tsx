import { useState } from "react";
import { Button } from "./Button";


export const Counter = () => {

  const maxValue = 5
  const minValue = 0

  const [count, setCount] = useState(0)

  const buttonIncrementCounter = () => {
    if(count<5){
      setCount(count+1)
    }
  }

  const buttonDecrementCounter = () => {
    setCount(count-1)
  }

  const buttonResetCounter = () => {
    setCount(0)
  }

  return(
    <div>
    <div>{count}</div>
    <Button title="inc" onClick={buttonIncrementCounter} disable={count>=maxValue} className=""/>
    <Button title="decr" onClick={buttonDecrementCounter} disable={count<=minValue} className=""/>
    <Button title="reset" onClick={buttonResetCounter} disable={count<=minValue} className=""/>
    </div>
  )
  
};
