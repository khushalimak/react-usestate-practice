import React from "react";

const Subject = () =>{
    console.log ("rendering subject ");
    return(
        <div>
         <h1 className="font-bold text-2xl">subject-react</h1>
        </div>
    )
}
export default React.memo(Subject)