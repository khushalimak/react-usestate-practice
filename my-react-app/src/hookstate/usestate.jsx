import { useState } from "react"


const UseStates = () => {

     const [count , setCount] = useState(0);

     function handleIncrement(){
          setCount(count+1);
     }

     function handleDecrement(){
          setCount(count-1)
     }

  return (
    <div className="">
      <button className="button bg-red-500 rounded-xl p-4 mr-5" onClick={handleIncrement}>Increments</button>
      <button className="button  bg-red-500 rounded-xl p-4 mr-5" onClick={handleDecrement}>Decerement</button>
      <button className="button  bg-red-500 rounded-xl p-4 mr-5" onClick={() => setCount(count+1)}>Increments</button>
      <button className="button  bg-red-500 rounded-xl p-4 mr-5" onClick={() => setCount(count-1)}>Decerement</button>
      <div className="button  bg-red-500 rounded-xl p-4 mr-5 mt-5">{count}</div>
    </div>
  )
}

export default UseStates