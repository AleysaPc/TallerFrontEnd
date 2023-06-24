import { useEffect, useState } from "react";

let nombre = "Isabella";
export  default function Array(){

    const [data, setData] =new useState([]);

useEffect(()=> {
    getServicio()
  });

  const getServicio = function(){
    //Todo llamar al servicio rest
    //setData(await callservice("localhost:8080/user/list"))
    setTimeout(()=>{
      setData([1,2,3,4,5,6]);  
    },"10000");
  }
  //Java Scritp con html, iterar
  return (
    <div>
        {
          data.map((x)=>
          <p>{x}</p>
          )}
    </div>
  )
}