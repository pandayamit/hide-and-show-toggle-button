import  './App.css';
import React,{useState} from 'react';

function App() {
const[Status,setStatus]=React.useState(true)

  return (
    <div className="App">
      {
        Status?<h1>Hello Amit</h1>:null
      }
    {/* <h1>Hide and Show Button</h1> */}


    {/* <p> when we perfrom operation of hide and show on two different button </p>
    <button onClick={()=>setStatus(false)}>Hide</button>  
    <button onClick={()=>setStatus(true)}>Show</button>
 */}


<p>when we perform operation of hide and show on same button  (Toggle)</p>
<button onClick={()=>setStatus(!Status)}>Toggle</button>



    </div>
  );
}

export default App;
