import { useState } from 'react';

const useCounter = () => {
   const [counter, setCounter] = useState(0);

   const handleCounterIncrement = () =>
      setCounter((prevCounter) => prevCounter + 1);
   const handleCounterDecrement = () =>
      setCounter((prevCounter) => prevCounter - 1);

   return {
      counter,
      setCounter,
      handleCounterIncrement,
      handleCounterDecrement,
   };
};

export default useCounter;
