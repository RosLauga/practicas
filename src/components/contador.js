import useCounter from "../hooks/useContador";


const Contador = () => {

const counter1 = useCounter(1)


    return (
        <>
            <button onClick={counter1.suMar}>+</button>
            <p>{counter1.counter}</p>
            <button onClick={counter1.resTar}>-</button>
                  
        </>
    )
}

export default Contador;