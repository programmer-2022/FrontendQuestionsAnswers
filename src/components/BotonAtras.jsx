import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function BotonAtras({url}) {
    
    const navigate = useNavigate()

    const handleOnClick = e => {
      navigate(url)
    }
  
    return (
        <div style={{position: 'absolute', top: '5px', left: '5px'}}>
          <button onClick={handleOnClick} className="btn fs-1 ms-5 mt-2"><FontAwesomeIcon icon={faArrowLeft} /></button>          
        </div>
    )
}
