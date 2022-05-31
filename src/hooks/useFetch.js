import { useEffect, useState } from "react";


const useFetch = () => {
   
const [personaje, setPersonaje] = useState() 

useEffect( () => {
     
    fetch(`localhost:3000/products`)
    .then(data => data.json())
    .then(info => setPersonaje(info)) 

})   

    return personaje

}


export default useFetch;

