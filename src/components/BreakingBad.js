import useFetch from "./useFetch";
import './breakingbad.css'
import { Link } from "react-router-dom";

const BreakingBad = ({ onDetails }) => {


    const personaje = useFetch()

    return (
        <section className="container">
            <h2>Página principal</h2>
            {
                personaje ? personaje.map(p => {
                    return (

                        <div>
                            <Link to={`/${p.char_id}`} onClick={() => onDetails(p.char_id)}>
                                <div>{p.name}</div>
                                <img width="200" src={p.img} alt={p.name} />
                            </Link>
                        </div>

                    )
                }) : "cargando"
            }
        </section>


    )
}

export default BreakingBad;