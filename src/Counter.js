import { increment, decrement } from "./store";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  //получаем значение счетчика из состояния
  const counterValue = useSelector((state) => state.counter.value);

  //получаем функции для выполнения действий
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Toolkit Counter</h3>
      <p>Count: {counterValue}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter