import React, { useState } from 'react';
import { useEffect } from 'react';

const useeffect = () => {
  const [count, setCount] = useState(0)

 //!runs everytime if passed without dependencyy
//  useEffect(() => {
//   console.log('This runs everytime on mount');
// });

  //! If you want to run the effect only once (like componentDidMount), pass an empty array [] as the second argument.
  // useEffect(() => {
  //   console.log('This runs only once on mount');
  // }, []);

  // !If you pass dependencies in the array, the effect will run only when those dependencies change.
  useEffect(() => {
    console.log('This runs everytime only when count is changed mount');
  },[count]);
  


  const increase = () => {
    setCount(count + 1)
  }


  return (
    <>
     <div>count : {count}    
    </div>
    <div>    <button onClick={increase}> Increase </button>
</div>
    </>
   
  )
}

export default useeffect