import React, { useState, useRef} from 'react'
import { useNavigate  } from "react-router-dom"
import { useForm } from 'react-hook-form'

import 'normalize.css'
import './home.css'

export default function Home() {

    const form = useRef();
	const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onHandleSubmit = (body, e) => {
        if(body !== null) {
            localStorage.setItem('nickname', body.nickname)
            navigate('/menu')
        }
    }

    let nickname = localStorage.getItem('nickname')
    if(nickname !== null) localStorage.clear()    

    return (
        <>
            <div className="container word-container">
                <div>T</div>
                <div>R</div>
                <div>I</div>
                <div>V</div>
                <div>I</div>
                <div>A</div>     
            </div>

            <div className="container field-container">
                <div className="container mt-5">
                    <form ref={form} onSubmit={handleSubmit(onHandleSubmit)}>	
                        <div className="text-center">
                            <div className="input-div">
                                <input type="text" 
                                    placeholder="Ingrese su Nickname" 
                                    autoComplete="off"
                                    maxLength="20"
                                {...register("nickname", {required: true})}
                                />
                                {errors.nickname && <span className="text-danger">(*) <small>Campo obligatorio</small></span>}
                            </div>
                            <div className="mt-2">
                                <button type="submit" className="btn btn-start w-75">COMENZAR</button>
                            </div>
                        </div>
                    </form>
                </div>                
            </div>
        </>
    )
}
