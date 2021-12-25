import React from 'react'
import './menu.css'

export default function Menu() {
    return (
        <div>
            <div className="div-menu">
                <h1>MENU PRINCIPAL</h1>
            </div>
            <div className="saludo-hola">
                <h2>Hola,</h2>
            </div>
            <div className="nickname">
                <h2>Nickname_99</h2>
            </div>
            <div className="div-square"></div>

            <div className="contenedor-botones">
                <div className="div-botones">
                    <button>Iniciar Juego</button>
                </div>
                <div className="div-botones">
                    <button>Crear Preguntas</button>
                </div>
                
                <div className="div-botones">
                    <button>Marcadores</button>
                </div>
                <div className="div-botones">
                    <button>Acerca de</button>
                </div>
                <div className="div-botones">
                    <button>Salir del Juego</button>
                </div>
            </div>
        </div>
    )
}