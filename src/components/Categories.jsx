import React, { useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'

export default function Categories() {

    const api = helpHttp()
    const url = 'http://localhost:5000/api/categories'

    const categories = [
        { category: "Easy" },
        { category: "Medium" },
        { category: "Hard" },
        { category: "Expert" },
        { category: "Insane" }
    ]

    let [category, setCategory] = useState("Seleccione Categoría")

    let handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }
      
    return (
        <>
            <select onChange={handleCategoryChange}> 
                <option value="Seleccione Categoría"> -- Seleccione Categoría -- </option>
                {categories.map((c) => <option value={c.category}>{c.category}</option>)}
            </select>
        </>
    )
}
