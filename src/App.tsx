// App.tsx
import { ChangeEvent, useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { SettingsCounter } from "./components/settingsCounter/SettingsCounter";

export function App() {
  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [startValue, setStartValue] = useState(0);

  const HandleButtonIncrement = () => {
    if (count < maxValue) {
      setCount(prev => prev + 1);
    }
  };

  const HandleButtonReset = () => {
    setCount(startValue);
  };

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    setMaxValue(value);
  };

  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    setStartValue(value);
  };

  const setToLocalStorageHandler = () => {
    localStorage.setItem('counterValue', JSON.stringify({ maxValue, startValue }));
    setCount(startValue);
  };

  const validateValues = (): boolean => {
    return startValue < maxValue && startValue >= 0;
  };

  return (
    <div>
      <Counter 
        buttonIncrementCounter={HandleButtonIncrement}
        buttonResetCounter={HandleButtonReset}
        count={count}
        maxValue={maxValue}
        startValue={startValue}
        isInvalid={!validateValues()}
      />
      <SettingsCounter
        onChangeMaxValueHandler={onChangeMaxValueHandler}
        onChangeStartValueHandler={onChangeStartValueHandler}
        setToLocalStorageHandler={setToLocalStorageHandler}
        maxValue={maxValue}
        startValue={startValue}
      />
    </div>
  );
}