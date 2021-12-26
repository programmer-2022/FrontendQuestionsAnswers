import './respuesta.css'

export default function Respuesta({id, getRespuesta, msg}) {

    
    const handleOnClick = e => {
        console.log(e.target.id)
    }

    return (
        <div className="container text-center mb-3">
            <button
                id={id}
                className="btn btn-respuesta"
                onClick={handleOnClick}
            >
            {msg}
            </button>
        </div>
    )
}
