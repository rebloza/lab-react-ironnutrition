import { useState } from 'react'
import React from 'react'

function Search(props) {

    const [busqueda, setBusqueda] = useState("")

    const handleBusqueda = (event) => {
        setBusqueda(event.target.value)
        props.filterFoods(event.target.value)
    }

  return (
    <div>
        <h4>Search</h4>
        <label htmlFor="busqueda">Buscar:</label>
        <input type="text" name='busqueda'onChange={handleBusqueda} value={busqueda} />

    </div>
  )
}

export default Search