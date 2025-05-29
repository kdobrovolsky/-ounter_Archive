import { useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { SettingsCounter } from "./components/settingsCounter/SettingsCounter";


export function App() {
  const [count, setCount] = useState(0);

  const HandleButtonIncrement = () => {
    if (count < 5) {
      setCount(prev=>prev+1);
    }
  };

  const HandleButtonReset = () => {
    setCount(0);
  };

  return(
    <div>
       <Counter 
       buttonIncrementCounter={HandleButtonIncrement}
       buttonResetCounter={HandleButtonReset}
       count={count}
       />
       <SettingsCounter/>
    </div>
  )
  
}
