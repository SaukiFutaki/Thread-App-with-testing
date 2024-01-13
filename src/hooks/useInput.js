import { useState } from "react";



function useInput() {
  const [value, setValue] = useState('');

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  return [value, handleValueChange, setValue];
}

export default useInput;
