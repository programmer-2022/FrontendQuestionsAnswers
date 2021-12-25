import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { helpHttp } from '../helpers/helpHttp'
import Swal from 'sweetalert2'
import './preguntas.css'

import Categories from '../components/Categories'

export default function Preguntas() {

    const form = useRef()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [selectVal, setSelectVal] = useState("Seleccione Categoría")
    const [error, setError] = useState(null)

    const api = helpHttp()
    const url = 'http://localhost:5000/api/questions'

    const onHandleSubmit = (body, e) => {
      if(body !== null) {
        if(selectVal === 'Seleccione Categoría') {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor seleccione una categoría',
            showConfirmButton: false,
            timer: 1000     
          })
          return
        }

        if(body.radioValue === null) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor marque una respuesta correcta',
            showConfirmButton: false,
            timer: 1000   
          })
          return
        }

        if(body.pregunta == "" && body.respuesta1 == "" && body.respuesta2 == ""
          && body.respuesta3 == "" && body.respuesta4 == "") {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor rellene la información',
            showConfirmButton: false,
            timer: 1000          
          })
          return
        }
        
        const model= {
          questionText : body.pregunta,
          answerOptions : [
                { answerText : body.respuesta1, isCorrect : (body.radioValue === "1") ? true : false, category : selectVal },
                { answerText : body.respuesta2, isCorrect : (body.radioValue === "2") ? true : false, category : selectVal },
                { answerText : body.respuesta3, isCorrect : (body.radioValue === "3") ? true : false, category : selectVal },
                { answerText : body.respuesta4, isCorrect : (body.radioValue === "4") ? true : false, category : selectVal }
            ]        
        }        
        //Enviar datos al backend
        createData(model)
      }      
    }

    const createData = (data) => {
      
      let options = {
          body: data, 
          headers: {"content-type": "application/json"}
      }
      
      api.post(url, options).then((res) => {
          if(!res.err) {
              let msg = res.message

              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: msg,
                  showConfirmButton: false,
                  timer: 1000
              })
              console.log();
          } else {
              setError(res)
          }         
      })       
    }

    const selectValue = value => {
      setSelectVal(value)
    }

    return (
        <>
          <div className="container preguntas">
            <div className="my-5 text-center">
              <h1>Editor de Preguntas</h1>
              <p className="fs-5">En esta sección deberá ingresar una pregunta y 4 opciones de 
                respuesta, también deberá seleccionar la categoría a la cuál pertenece
                (nivel de dificultad) y marcar la respuesta correcta mediante el control de radio.
              </p>
            </div>

            <form ref={form} onSubmit={handleSubmit(onHandleSubmit)}>	
              <div className="form-group mb-4">
                <textarea 
                  type="text" 
                  className="form-control py-3 fs-4"                  
                  placeholder="Ingrese pregunta (max-caracteres - 150)" 
                  autoComplete="off"
                  maxLength="150"
                  {...register("pregunta")}
                />
              </div>

              <div className="form-group mb-4 d-flex justify-content-between">
                <div className="flex-fill">
                  <input
                    type="text" 
                    className="form-control py-3 fs-4"
                    placeholder="Ingrese opción de respuesta corta (max-caracteres - 80)"
                    autoComplete="off"
                    maxLength="80"
                    {...register("respuesta1")}
                  />
                </div>
                <div className="contenedor-radio my-auto">
                  <input 
                    type="radio"
                    value="1"
                    {...register("radioValue")}
                  />
                </div>
              </div>

              <div className="form-group mb-4 d-flex justify-content-between">
                <div className="flex-fill">
                  <input 
                    type="text" 
                    className="form-control py-3 fs-4"                 
                    placeholder="Ingrese opción de respuesta corta (max-caracteres - 80)"
                    autoComplete="off"
                    maxLength="80"
                    {...register("respuesta2")}
                  />
                </div>
                <div className="contenedor-radio my-auto">
                  <input 
                      type="radio"
                      value="2"
                      {...register("radioValue")}
                    />
                </div>
              </div>

              <div className="form-group mb-4 d-flex justify-content-between">
                <div className="flex-fill">
                  <input 
                    type="text" 
                    className="form-control py-3 fs-4"                  
                    placeholder="Ingrese opción de respuesta corta (max-caracteres - 80)"
                    autoComplete="off"
                    maxLength="80"
                    {...register("respuesta3")}
                  />
                </div>
                <div className="contenedor-radio my-auto">
                  <input 
                      type="radio"
                      value="3"
                      {...register("radioValue")}
                    />
                </div>
              </div>
              
              <div className="form-group mb-4 d-flex justify-content-between">
                <div className="flex-fill">
                  <input 
                    type="text" 
                    className="form-control py-3 fs-4"                  
                    placeholder="Ingrese opción de respuesta corta (max-caracteres - 80)"
                    autoComplete="off"
                    maxLength="80"
                    {...register("respuesta4")}
                  />
                </div>
                <div className="contenedor-radio my-auto">
                  <input 
                      type="radio"
                      value="4"
                      {...register("radioValue")}
                    />
                </div>
              </div>

              <div className="form-group mb-4 select-categorias">
                <Categories selectValue={selectValue}/>
              </div>

              <div className="mt-2">
                <button type="submit" className="btn btn-success py-3 fs-4" style={{ backgroundColor: '#575551', width: '95%'}}>GUARDAR</button>
              </div>
            </form>
          </div>
        </>
    )
}
