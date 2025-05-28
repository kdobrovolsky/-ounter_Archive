import  s from "../tableCounter/tableCounter.module.css";

type TableCounter = {
  count: number;
};

export const TableCounter = ({ count }: TableCounter) => {
  const classCounter = count === 5 ? s.counter : s.appCounter;
  return <div className={classCounter}>{count}</div>;
};
