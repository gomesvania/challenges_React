import { useState } from 'react'

const Toggle = () => {
  const [isOn, setIsOn] = useState(true);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsOn(!isOn);
    setCount(count + 1);
  }
 
  return (
    <div>
      <button onClick={handleClick}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      <p>Você clicou {count} vezes.</p>
    </div>
  );
};

export default Toggle;