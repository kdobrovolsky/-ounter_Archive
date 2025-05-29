import { ChangeEvent, useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { SettingsCounter } from "./components/settingsCounter/SettingsCounter";


export function App() {
  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState<number>(10)
  const [startValue, setStartValue] = useState<number>(0)

  const HandleButtonIncrement = () => {
    if (count < maxValue) {
      setCount(prev=>prev+1);
    }
  };

  const HandleButtonReset = () => {
    setCount(startValue);
  };

  const onChangeMaxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
      const value = +e.currentTarget.value;
      setMaxValue(value)
  }

  const onChangeStartValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    setStartValue(value)
}

  const isInvalid = startValue>= maxValue 

 

  return(
    <div>
       <Counter 
       buttonIncrementCounter={HandleButtonIncrement}
       buttonResetCounter={HandleButtonReset}
       count={count}
       isInvalid = {isInvalid}
       maxValue={maxValue}
       startValue ={startValue}
       />
       <SettingsCounter
       onChangeMaxValueHandler = {onChangeMaxValueHandler}
       onChangeStartValueHandler={onChangeStartValueHandler}
       isInvalid = {isInvalid}
       />
    </div>
  )
  
}
