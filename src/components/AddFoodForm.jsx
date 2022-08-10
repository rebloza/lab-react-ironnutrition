import React from 'react'
import { useState } from "react"

function AddFoodForm(props) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleName = (event) => {
        let inputValue = event.target.value 
        setName(inputValue)
    }

    const handleImage = (event) => {
        let inputValue1 = event.target.value 
        setImage(inputValue1)
    }

    const handleCalories = (event) => {
        let inputValue2= event.target.value 
        setCalories(Number(inputValue2))
    }

    const handleServings = (event) => {
        let inputValue3 = event.target.value 
        setServings(Number(inputValue3))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const foodToAdd = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }
       props.addNewFoodTolist(foodToAdd)

       setName("")
       setImage("")
       setCalories(0)
       setServings(0)
    }

  return (
    <div>
        <h1>Add Food Entry</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleName} value={name}/>
            <br />
            <label htmlFor="image">Image</label>
            <input type="text"  name="image" onChange={handleImage} value={image}/> 
            <br />
            <label htmlFor="calories">Calories</label>
            <input type="number" name="calories" onChange={handleCalories} value={calories}/>
            <br />
            <label htmlFor="servings">Servings</label>
            <input type="number" name="servings" onChange={handleServings} value={servings}/>
            <br />
            <button>Create</button>


        </form>
    </div>
  )
}

export default AddFoodForm