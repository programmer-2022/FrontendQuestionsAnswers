import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './menu.css'

export default function Menu() {

    const [nickname, setNickname] = useState("Usuario")
    const navigate = useNavigate()
    
    useEffect(() => {
        let _nickname = localStorage.getItem('nickname')
        if(nickname !== null) setNickname(_nickname)      
    }, [])

    const handleOnClick = (e) => {
        const id = e.target.id
        let path  = ''

        switch(id) {
            case 'iniciar-juego':
                path = '/juego'
                break
            case 'crear-preguntas':
                path = '/crear'
                break
        }
        navigate(path)
    }

    return (
        <div>
            <div className="div-menu">
                <h1>MENU PRINCIPAL</h1>
            </div>
            <div className="saludo-hola">
                <h2>Hola,</h2>
            </div>
            <div className="nickname">
                <h2>{nickname}</h2>
            </div>

            <div className="div-square"></div>

            <div className="contenedor-botones">
                <div className="div-botones">
                    <button id="iniciar-juego" onClick={handleOnClick}>Iniciar Juego</button>
                </div>
                <div className="div-botones">
                    <button id="crear-preguntas" onClick={handleOnClick}>Crear Preguntas</button>
                </div>                
                <div className="div-botones">
                    <button id="marcadores" onClick={handleOnClick}>Marcadores</button>
                </div>
                <div className="div-botones">
                    <button id="acerca-de" onClick={handleOnClick}>Acerca de</button>
                </div>
                <div className="div-botones">
                    <button id="salir-juego" onClick={handleOnClick}>Salir del Juego</button>
                </div>
            </div>
        </div>
    )
}