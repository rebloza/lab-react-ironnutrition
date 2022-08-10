import foods from './foods.json'
import { useState } from "react"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import './App.css';

function App() {

  const [ food, setFoods ] = useState(foods)
  const [ visibleFoods, setvisibleFoods] = useState(foods)

  const addNewFoodTolist = (food1) => {
    setFoods([...food, food1])
    setvisibleFoods([...visibleFoods, food1])
  }

  const filterFoods = (busqueda) => {
    
    const filterArr = food.filter((eachFoods) => {
      return eachFoods.name.includes(busqueda)
    
    })
    setvisibleFoods(filterArr)

  }

  const deleteFoods = (name) => {

    const filterArr = visibleFoods.filter((eachFoods)=>{
      return eachFoods.name !== name

    })
    setvisibleFoods(filterArr)
  }

  return (

    <div className="App">

      <AddFoodForm addNewFoodTolist={addNewFoodTolist} />
        <hr />

      <Search filterFoods={filterFoods} />
      <hr />

      <h1>Food List</h1>

    {visibleFoods.map((eachfood, index)=> {

      return (
      
        <FoodBox key={eachfood.name+index} alimentos={eachfood} deleteFoods={deleteFoods} />
         
      )


    } )}
    </div>
  );
}

export default App;
