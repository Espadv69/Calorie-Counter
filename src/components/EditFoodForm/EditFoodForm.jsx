import { useState } from 'react'

const EditFoodForm = ({ food, onSave, onCancel }) => {
  const [foodName, setFoodName] = useState(food.foodName)
  const [calories, setCalories] = useState(food.calories)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ foodName, calories: Number(calories) })
  }

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  )
}

export default EditFoodForm
