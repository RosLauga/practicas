import { useEffect, useState } from "react";


const useFetch = (id = 1) => {
   
const [personaje, setPersonaje] = useState() 

useEffect( () => {
     
    fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
    .then(data => data.json())
    .then(info => setPersonaje(info)) 

},[id])   

    return personaje

}


export default useFetch;

