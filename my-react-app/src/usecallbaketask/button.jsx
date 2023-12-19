import React from "react";
const Button = ({handleClick , children}) => {

     console.log(`Rendering button - ` , children);
  return (
    <div>
      <button className="button pt-5 pb-5 bg-green-600 border border-lime-700 text-lime-700  bg-center font-bold text-3xl" onClick={handleClick}>
          {children}
      </button>
    </div>
  )
}






export default React.memo(Button)