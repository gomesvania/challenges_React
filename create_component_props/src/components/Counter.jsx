import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log('count', count);
  console.log('setCount', setCount);
  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  );
};

export default Counter;