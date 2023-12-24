import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../context/counterSlice';

const CountRedux = () => {
  // trabalhamos com variáveis pois o estado está sendo gerenciado pelo Redux
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <p>Initial value: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CountRedux;