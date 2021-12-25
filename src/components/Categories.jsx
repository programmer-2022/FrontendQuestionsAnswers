import { useState } from 'react'
import './categories.css'

export default function Categories({selectValue}) {

    const categories = [
        { category: "Fácil" },
        { category: "Medio" },
        { category: "Difícil" },
        { category: "Experto" },
        { category: "Extremo" }
    ]

    let [category, setCategory] = useState("Seleccione Categoría")

    let handleCategoryChange = (e) => {
        setCategory(e.target.value)
        selectValue(e.target.value)
    }
      
    return (
        <>
            <select onChange={handleCategoryChange} className="select-categoria fs-4"> 
                <option value="Seleccione Categoría"> -- Seleccione Categoría -- </option>
                {categories.map((c, idx) => <option key={idx} value={c.category}>{c.category}</option>)}
            </select>
        </>
    )
}
