import React, { useState } from 'react'
import Categories from './Categories'

export default function Questions() {
    
    return (
        <div>
            <h1>Preguntas</h1>
            <div className="bg-danger">hola</div>
            <form action="">
                <input type="text" value="" placeholder="Ingrese pregunta" />
                <br/>
                <input type="text" value="" placeholder="Escriba opción de respuesta 1" />
                <br/>
                <hr/>
                <input type="text" value="" placeholder="Escriba opción de respuesta 2" />
                <br/>
                <input type="text" value="" placeholder="Escriba opción de respuesta 3" />
                <br/>
                <input type="text" value="" placeholder="Escriba opción de respuesta 4" />
                <br/>
            </form>

            <Categories />
        </div>
    )   
    
}