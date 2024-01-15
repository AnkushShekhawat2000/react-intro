 import React from "react";
// import ReactDOM from "react-dom";
import "./style.css";
import Button from "./Components/Button.js"

// jxs (99.99% HTML, +20% js)
const Hello=()=>{
   let a = 10;
   let h1Style ={textAlign:"center", border:"2px solid green"};
    return (
        <div className="hello">
             {/* <h1 style = {{textAlign:"center", border:"2px solid green"}}>Hello world, {a}</h1>  */}
             
             <h1 style ={h1Style}>Hello world, {a}</h1> 
              
             <p>{2+3+4+5}</p>   
            <p>Hey how are you!</p>
            {/* <button>Apple</button>
            <button>Orange</button>
            <button>Banana</button> */}
            
            <Button 
            name="Apple" 
            color="green"
            price="100"    
            />
            <Button
                name="Banana"
                color="Yellow"
                price="60"
            />
            <Button
                name="mango"
                color="yellow"
                price="30"
            />
            

        </div>
       
     )
}

export default Hello

// ReactDOM.render(<Hello/>, document.getElementById("root"));


























