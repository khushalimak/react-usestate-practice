import { useState } from "react"

const UseState_2 = () => {

     const [age , setAge] = useState(18);
     const [name , setName] = useState("Vivek");
     const [name1 , setNames] = useState("Vivek");
     const [todos , setTodos] = useState("Daily Worked Assign To Vivek!");

     function setAges(){
          setAge(age + 1)
     }

     function setNames1(){
          setName("Rajat")
     }
     function setNames2(){
          setNames("Jaydip")
     }

     function viewTodos(){
          setTodos("Daily Worked Assign To Jaydip!")
          setTodos("Daily Worked Assign To Rajat!")
          setTodos("Daily Worked Assign To Ranjit!")
     }

     function Reset(){
          setAge(18)
          setName("Vivek")
          setNames("Vivek")
          setTodos("Daily Worked Assign To Vivek!")
     }

  return (
    <div className=" mt-40">
      <button className="button bg-red-400 p-7 mr-8 rounded-xl border-black " onClick={setAges}>{age}</button>
      <button className="button bg-red-400 p-7 mr-8 rounded-xl border-black" onClick={setNames1}>{name}</button>
      <button className="button bg-red-400 p-7 mr-8 rounded-xl border-black" onClick={setNames2}>{name1}</button>
      <button className="button bg-red-400 p-7 mr-8 rounded-xl border-black" onClick={viewTodos}>{todos}</button>
      <button className="button bg-red-400 p-7 mr-8 rounded-xl border-black" onClick={Reset}>Reset</button>
    </div>
  )
}

export default UseState_2