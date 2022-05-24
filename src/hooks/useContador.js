import { useState } from "react"

const useCounter = () => {

    
       const [counter, setCounter] = useState(1)
    
        const suMar = () => {
            setCounter(counter+1)
        }
        
        const resTar = () => {
            setCounter(counter-1)
        }
    
        return {
            counter,
            suMar,
            resTar
        } 


}

export default useCounter;