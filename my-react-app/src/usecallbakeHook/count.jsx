import React from "react";

const Count = ({text , count}) => {

     console.log(`Rendering ${text}`);
  return (
    <div>
          <div className="button pt-5 text-2xl font-bold border  text-border-500 text-orange-500 " >
               {text} - {count}
          </div>
    </div>
  )

  
}



export default React.memo(Count)