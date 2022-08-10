import React from 'react'

function FoodBox(props) {
 console.log(props)
  const handleDelete = () => {
   props.deleteFoods(props.alimentos.name)
  }

  return (
    <div>
        {props.alimentos.name}
        <div>
        <img src={props.alimentos.image} height={60} alt="food" />
        </div>
        <div>
        <p>Calories: {props.alimentos.calories}</p>
        <p>Servings: {props.alimentos.servings}</p>
        <b>Total Calories: {props.alimentos.calories * props.alimentos.servings} kcal</b>
        <br />
        <button onClick={handleDelete} >Delete</button>
        </div>
        <hr />
    </div>
  )
}

export default FoodBox