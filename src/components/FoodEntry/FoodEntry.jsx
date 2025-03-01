import { useState } from 'react'
import './FoodEntry.css'

const FoodEntry = ({ onAddFood }) => {
  const [foodName, setFoodName] = useState('') // State to handle input value
  const [calories, setCalories] = useState('') // State to handle input value
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent form submission
    if (foodName && calories) {
      onAddFood({ foodName, calories: Number(calories) }) // Pass data to parent component
      setCalories('') // Reset input value
      setFoodName('') // Reset input value
    }
  }

  return (
    <form className="formFood" onSubmit={handleSubmit}>
      <label>
        Food Name
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="Enter food name"
        />
      </label>
      <label>
        Calories
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Enter calories"
        />
      </label>
      <button>Add Food</button>
    </form>
  )
}

export default FoodEntry
