import './cardpersonaje.css'

const CardPersonaje = ({ detail }) => {

    const [charac] = detail
    console.log(detail)
    return (
        <>
            <div className="cardcharacter">
                <h1>Nombre y Apellido: {charac.name}</h1>
                <img width="150" src={charac.img} alt="imagen" />
                <span>Cumpleaños: {charac.birthday}</span>
                <span>Status: {charac.status}</span>
            </div>
        </>
    )
}

export default CardPersonaje;