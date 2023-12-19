import React from "react";

const Count = ({text , count}) =>{
     console.log(`Rendering ${text}`);
     return (
        <div>
              <div className="button border bg-slate-500 border-black pt-5 pb-5 text-3xl font-bold pl-10 pr-10 mx-5 mt-5 mb-5">
                   {text} - {count}
              </div>
        </div>
      )
}
export default React.memo (Count)