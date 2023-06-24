import { useEffect, useState } from "react";

let nombre = "Isabella"
export default function Hora(){
    const [hora, setHora] = useState();

    useEffect(()=>{

        setTimeout(()=>{
            setHora(new Date().toLocaleString())
        }, "10000");
    });

    const actualizarHOra = ()=>{
        setTimeout(()=>{
            setHora(new Date().toLocaleString())
        }, "10000");
    }
    return (
        <div>{hora}</div>
    )

}