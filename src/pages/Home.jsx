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
            navigate('/menu')
        }
    }

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

            <div className="container text-center" style={{
                width: '500px',
                height: '200px',
                marginTop: '50px',
                padding: '10px',
                borderRadius: '10px',
                opacity: .9
            }}>
                <div className="container mt-5">
                    <form ref={form} onSubmit={handleSubmit(onHandleSubmit)}>	
                        <div>
                            <div>
                                <input type="text" 
                                className="form-control" 
                                placeholder="Type your Nickname" 
                                autoComplete="off"
                                maxLength="20"
                                {...register("nickname", {required: true})}
                                />
                                {errors.nickname && <span className="text-danger">(*) <small>Campo obligatorio</small></span>}
                            </div>
                            <div className="mt-2">
                                <button type="submit" className="btn start w-100">START</button>
                            </div>
                        </div>
                    </form>
                </div>                
            </div>
        </>
    )
}
