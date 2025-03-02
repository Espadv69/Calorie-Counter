import { useState } from 'react'
import './EditFoodForm.css'

const EditFoodForm = ({ food, onSave, onCancel }) => {
  const [foodName, setFoodName] = useState(food.foodName)
  const [calories, setCalories] = useState(food.calories)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!foodName.trim() || /\d/.test(foodName)) {
      setError('Please enter a valid food name without numbers.')
      return
    }

    if (!calories || isNaN(calories) || calories < 0) {
      setError('Please enter a valid number of calories (positive number).')
      return
    }

    onSave({ foodName, calories: Number(calories) })
    setError('')
  }

  return (
    <form className="edit-food-form" onSubmit={handleSubmit}>
      <label>
        Food Name:
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="Enter a new Food Name"
        />
      </label>
      <label>
        Calories:
        <input
          type="text"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Enter new calories"
        />
      </label>
      <div className="buttons-form">
        <button>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
    </form>
  )
}

export default EditFoodForm
