import React from "react"


    

// props => properties (type of object)

    // console.log("Props",props);
    //Props = {name :"Apple", color:"green"} 
    // console.log(props.name);
    // props.name = "Mango"
// const Button = (pros)=>{
const Button = ({name,color,price})=>{
    return (
       <div>
           <button>{name}</button>
           <p>It is {color} in Color</p>
           <p>It is cost {price}</p>
       </div>
    )
}

export default Button