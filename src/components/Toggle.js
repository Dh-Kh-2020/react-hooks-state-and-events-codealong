import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const bgColor = isOn ? '#f00' : '#fff';

  const handleClick = () => {
    setIsOn((isOn) => !isOn);
  }

  return  <button onClick={handleClick} style={{backgroundColor: bgColor}}> 
            {isOn ? 'ON' : 'OFF' } 
          </button>;
}

export default Toggle;
