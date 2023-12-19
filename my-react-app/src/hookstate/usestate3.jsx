import { useState } from "react";


const Hook = () => {
    // let count = 0;

const [count , setCount] = useState(0);

    const next = () => {
        setCount(count+1)
      }
      const pre = () => {
        setCount(count-1)
      }
       return (
        <>
            <button className="button bg-red-300 rounded-xl p-5 mr-5" onClick={next}>add</button>
            <button className="button bg-red-300 rounded-xl p-5" onClick={pre}>remove</button>
            <div className="button bg-red-300 rounded-xl p-5 mt-5">{count}</div>
        </>
       )
}

export default Hook;