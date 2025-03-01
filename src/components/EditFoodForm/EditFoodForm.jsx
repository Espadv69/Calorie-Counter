import { useState } from 'react'

const EditFoodForm = ({ food, onSave, onCancel }) => {
  const [foodName, setFoodName] = useState(food.foodName)
  const [calories, setCalories] = useState(food.calories)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ foodName, calories: Number(calories) })
  }
}

export default EditFoodForm
