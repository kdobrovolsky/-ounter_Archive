import { useState, useEffect } from "react";
import { Button } from "../ui/button/Button";
import s from "../settingsCounter/settingsCounter.module.css";
import { ChangeEvent } from "react";

type SettingsCounterProps = {
  onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  setToLocalStorageHandler: () => void;
  maxValue: number;
  startValue: number;
};

export const SettingsCounter = ({
  onChangeMaxValueHandler,
  onChangeStartValueHandler,
  setToLocalStorageHandler,
  maxValue,
  startValue
}: SettingsCounterProps) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    validateValues();
  }, [maxValue, startValue]);

  const validateValues = (): boolean => {
    if (startValue >= maxValue) {
      setError("Start value cannot be greater or equal to max value");
      return false;
    }
    if (startValue < 0) {
      setError("Start value cannot be negative");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSetClick = () => {
    if (validateValues()) {
      setToLocalStorageHandler();
    }
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.counterWrapper}>
          <div className={s.inputWrapper}>
            <div className={s.inputStyle}>
              <label>maxValue:</label>
              <input 
                type="number" 
                onChange={onChangeMaxValueHandler} 
                value={maxValue}
                className={error ? s.errorInput : ''}
              />
            </div>
            <div className={s.inputStyle}>
              <label>startValue:</label>
              <input 
                type="number" 
                onChange={onChangeStartValueHandler}
                value={startValue}
                className={error ? s.errorInput : ''}
              />
            </div>
          </div>
          
          {error && <div className={s.errorMessage}>{error}</div>}
          
          <div className={s.buttonWrapper}>
            <Button
              title="SET" 
              onClick={handleSetClick} 
              className={s.button} 
              disable={!!error}
            />
          </div>
        </div>
      </div>
    </div>
  );
};