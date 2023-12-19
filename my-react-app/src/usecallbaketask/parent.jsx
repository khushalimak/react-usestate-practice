import { useState,useCallback } from "react"

import Subject from "./subject"
import Count from "./count"
import Button from "./button"  

const Parent = () => {
   const[marks,setmarks]=useState(50)
   const[average,setaverage]=useState(90)
   const[student,setstudent]=useState(10)

   const incrementmarks =useCallback(()=>{
    setmarks(marks+2);
   } , [marks])
  
   const incrementaverage =useCallback(()=>{
    setaverage(average+2);
   } , [average])
   
   const incrementstudent =useCallback(()=>{
    setstudent(student+5);
   } , [student])

   return(
    <div className="pt-5">
       <Subject/>
       <Count className="" text="marks" count={marks}/>
       <Button  handleClick={incrementmarks}>increment marks</Button>

       <Count text="average" count={average}/>
       <Button handleClick={incrementaverage}>increment average</Button>

       <Count text="student" count={student}/>
       <Button handleClick={incrementstudent}>increment student</Button>
    </div>
    )
}
  export default Parent

