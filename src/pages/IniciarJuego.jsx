import { useState, useEffect, useRef } from 'react'

import BotonAtras from '../components/BotonAtras'
import Respuesta from '../components/Respuesta'
import './iniciarjuego.css'

export default function IniciarJuego() {

    const [contadorPreguntas, setContadorPreguntas] = useState(1)
    const [total, setTotal] = useState(25)
    const [porcentaje, setPorcentaje] = useState("0%")

    const getRespuesta = (res) => {
        
    }
    
    const progressBar = useRef()

    const timerAnimation = () => {
        // let i = 0
        // while(i <= 10) {
        //     setTimeout(() => {
        //         i += 1
        //         //setPorcentaje(`${i}%`)
        //         console.log(i)
        //     }, 1000)
        // }
    }

    return (
        <>
            {/* <button onClick={timerAnimation}>Play</button> */}
            {/* <BotonAtras url="/menu" /> */}
            <div className="container text-center div-pregunta">
                <p style={{color: '#000'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, id.</p>
            </div>

            <div className="container py-3 div-tiempo">
                <div className="progress">
                    <div 
                        ref={progressBar}
                        className="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar" 
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100" 
                        style={{width: '100%'}}>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <Respuesta id="1" getRespuesta={getRespuesta} msg="Hola respuesta" />
                <Respuesta id="2" getRespuesta={getRespuesta} msg="Hola respuesta" />
                <Respuesta id="3" getRespuesta={getRespuesta} msg="Hola respuesta" />
                <Respuesta id="4" getRespuesta={getRespuesta} msg="Hola respuesta" />
            </div>
     
            <div className="container text-center div-contador-preguntas mt-5">
                <p><small>{contadorPreguntas}/{total}</small></p>
            </div>        
        </>
    )
}
