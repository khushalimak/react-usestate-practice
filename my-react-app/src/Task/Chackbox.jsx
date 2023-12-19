import { useState } from "react"; 
 
const Checkbox = () => { 
  const [Checked, setChecked] = useState(); 
  const checked = () => { 
    setChecked(!Checked); 
  }; 
 
  return ( 
    <div className=""> 
      <input className="ml-16  " type="checkbox"  id="checkbox"  checked={Checked} onClick={checked} /> 
      <h1 className=" mt-5 "> {Checked ? "  Clicked " : "no Clicked "} </h1> 
    </div> 
  ); 
}; 
 
export default Checkbox;
