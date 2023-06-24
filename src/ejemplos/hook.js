import { useEffect, useState } from "react";


export default function Hook(){
    const[user, setUser] =  new useState("Escribe tu nombre");
return(
    <div>
        <input type = 'text' onChange={(e)=>{
             console.log(e.target.value);
            setUser(e.target.value);
    
           }}/>
        <p>{user}</p>
    
        </div>
        );
    }        
