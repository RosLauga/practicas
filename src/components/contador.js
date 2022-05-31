import { Link } from "react-router-dom";
import "./contador.css";

const Contador = () => {

    const showNav = () => {
        let navig = document.getElementById("navig").classList.toggle("shownav")
        console.log(navig)
    }
   
const handleLocation = () => {

}
    

    return (
        <>
            <nav id="navig" className="">
                <ul>
                    <li>
                        <Link to="/">
                        <button
                        value="1"
                        onClick={(e) => {
                        handleLocation(e);
                        }}
                        />
                        <span>Productos</span>
                        </Link>
                    </li>  
                    <li>  
                        <Link to="/">
                        <button
                        value="2"
                        onClick={(e) => {
                        handleLocation(e);
                        }}
                        />
                        <span>Stores</span>
                        </Link>
                    </li>        
                    
                </ul>
            </nav>

            <button onClick={showNav}>+</button>

                  
        </>
    )
}

export default Contador;