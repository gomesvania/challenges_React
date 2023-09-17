import { useState } from 'react'

const Toggle = () => {
  const [isOn, setIsOn] = useState(true);
  // const [isToggled, setIsToggled] = useState(false);
  
  // useEffect(() => {
  //   console.log('isToggled mudou para: ', isToggled)
  // }, [isToggled]);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Toggle;