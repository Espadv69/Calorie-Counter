import { useState } from 'react'
import './FoodEntry.css'

const FoodEntry = ({ onAddFood }) => {
  const [foodName, setFoodName] = useState('') // State to handle input value
  const [calories, setCalories] = useState('') // State to handle input value

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent form submission
    if (foodName && calories) {
      onAddFood({ foodName, calories: Number(calories) }) // Pass data to parent component
      setCalories('') // Reset input value
      setFoodName('') // Reset input value
    }
  }
}

export default FoodEntry
