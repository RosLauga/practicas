import { useEffect, useState } from "react";


const useFetch = () => {

    const [personaje, setPersonaje] = useState()

    useEffect(() => {

        fetch(`https://www.breakingbadapi.com/api/characters/`)
            .then(data => data.json())
            .then(info => setPersonaje(info))
    }, [])

    return personaje

}


export default useFetch;

