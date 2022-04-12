import { useEffect, useState } from 'react';

const useCounter = (initialCount = 0) => {
   const [counter, setCounter] = useState(initialCount);

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
