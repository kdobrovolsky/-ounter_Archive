type TableCounter = {
  count: number;
};

export const TableCounter = ({ count }: TableCounter) => {
  const classCounter = count === 5 ? "counter" : "app-counter";
  return <div className={classCounter}>{count}</div>;
};
