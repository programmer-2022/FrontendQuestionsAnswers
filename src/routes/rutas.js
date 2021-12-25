import React from 'react'
import {Route, Routes} from "react-router-dom"

import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Setup from '../pages/Setup'
import IniciarJuego from '../pages/IniciarJuego'
import Preguntas from '../pages/Preguntas'

const Rutas = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/menu" element={<Menu/>} />
            <Route exact path="/setup" element={<Setup/>} />
            <Route exact path="/juego" element={<IniciarJuego/>} />
            <Route exact path="/crear" element={<Preguntas/>} />
        </Routes>
    )
}

export default Rutas