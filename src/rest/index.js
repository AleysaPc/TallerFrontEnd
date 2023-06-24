import { useEffect, useState } from "react";

export default function Rol(){
    const [data, setData] =new useState("No existe valor");
    const [dataArr, setDataArr] =new useState([]);
   
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(async(res)=>{
            const resJson = await res.json();
            console.log("resJson",resJson) 
            setData(resJson.location_area_encounters);
        })

        fetch("https://pokeapi.co/api/v2/pokemon/ditto",{method:'Get'}).then(async(res)=>{
            const resJson = await res.json();
            console.log("resJson",resJson)
            setDataArr(resJson.abilities);
        })
    })

    return(
        <div>
            Resultado {data}
            <br/><hr/>
            <table>
                <thead>
                    <tr>
                    <th>nro</th>
                    <th>slot</th>
                    <th>hidden</th>
                    </tr>
                </thead>
                <tbody>
                     {dataArr.map((x,i)=>
                     <tr>
                        <td>{i}</td>
                        <td>{x.slot}</td>
                        <td>{x.is_hidden?"si":"no"}</td>
                    </tr>
                     )}
                </tbody>
            </table>
            
        </div>

    )
}