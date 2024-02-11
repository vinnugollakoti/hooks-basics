import { useContext } from "react";
import { useState } from "react";
import {background} from './App'
import Vinnu1 from "./Vinnu1";
function Vinnu() {
    const [count,setcount]= useState(0);
    const bacg=useContext(background)
    const themeStyle = {
        backgroundColor: bacg?"black":"grey",
        color:bacg?"grey":"black",
        padding:"2rem",
        margin:"2rem"
      }
   return(
    <div style={themeStyle}>
    <Vinnu1 />
    <h2>likes: {count}</h2>
    <button onClick={()=>{setcount(count+1)}}>like</button>
    </div>
   ) 
   }
export default Vinnu;