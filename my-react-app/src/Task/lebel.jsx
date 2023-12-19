import { useState } from "react";

const Label=()=>{

    const [count, setcount] = useState(null);
    const [label, setlabel] = useState();
  
    const storedata = (val) => {
      console.log(val.target.value);
      setcount(val.target.value);
      // setlabel(false);
    };
  
    return (
      <div className="h-screen">
        {label ? <h1 className="font-bold  mb-3 ">Store Data : {count}</h1> :null}
        <label className="bg-blue-500 text-black mt-4 p-2 rounded" onClick={() => setlabel(true)}>
          Store
        </label>
        <input
          type="text"
          onChange={storedata}
          placeholder="text"
          className="border border-black ml-3 p-3 focus:outline-none rounded"
        ></input>
      </div>
    );
  }; 
  
  export default Label;

