import { useState } from 'react'

import Header from './components/Header/Header'
import FoodEntry from './components/FoodEntry/FoodEntry'
import CalorieSummary from './components/CalorieSummary/CalorieSummary'

const App = () => {
  const [foods, setFoods] = useState([]) // State to store food data

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]) // Update food data
  }

  return (
    <div>
      <Header />
      <FoodEntry onAddFood={handleAddFood} />
      <CalorieSummary foods={foods} />

      <div className="food-container">
        <h2>Food List</h2>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>
              {food.foodName} - {food.calories} calories
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
