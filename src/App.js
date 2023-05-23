
import './App.css';
import {useEffect, useState} from "react";
import Axios from 'axios';

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const changeMode= (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };


  return (
    <div className="App">
      <h1>Generate an excuse</h1>
     <button onClick={()=>changeMode('party')}>Party</button>
     <button onClick={()=>changeMode('family')}>Family</button>
     <button onClick={()=>changeMode('office')}>Office</button>
     <p>{generatedExcuse}</p>
    </div>
  );
}
  
export default App;


