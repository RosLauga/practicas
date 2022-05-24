import useCounter from "../hooks/useContador";
import useFetch from "../hooks/useFetch";
import Contador from "./contador";

const BreakingBad = () => {

const {counter, suMar, resTar} = useCounter()
const personaje = useFetch(counter) 



    return (
        personaje?
        <>       
        <h3>
        {personaje[0].name}
        </h3>
        <img 
        src={personaje[0].img}
        alt="Sin imagen"
        width="200"
        />
            <button onClick={suMar}>+</button>
            <p>{counter}</p>
            <button onClick={resTar}>-</button>
        </>
        :"Cargando..."
    )
}

export default BreakingBad;