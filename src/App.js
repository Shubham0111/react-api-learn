
import './App.css';
import {useState} from "react";


function App() {
  
const [age,setAge]=useState(0);

const increaseAge=()=>{
  setAge(age+1);
}
const decreaseAge=()=>{
  age>0 && setAge(age-1);
}
const setZero=()=>{
 setAge(0);
}
const [inputValue,setinputValue]=useState("");
const changer=(event)=>{
  setinputValue(event.target.value);

}
const[val,setVal]=useState(1);
const alter=()=>{
   if(val===1)
   {
       setVal(0);
   }
   else{
   setVal(1);
   }
}
  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>increase Age</button>
      <button onClick={decreaseAge}>decrease Age</button>
      <button onClick={setZero}>setZero</button>
      <input type="text" onChange={changer}/>
      {inputValue}
      <button onClick={alter}>show/hide</button>
      {val===1  && <h1>My name is Shubham</h1>}
    
    </div>
  );
}
  
export default App;


