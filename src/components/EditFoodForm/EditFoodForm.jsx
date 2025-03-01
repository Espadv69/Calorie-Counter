import { useState } from 'react'

const EditFoodForm = ({ food, onSave, onCancel }) => {
  const [foodName, setFoodName] = useState(food.foodName)
  const [calories, setCalories] = useState(food.calories)
}

export default EditFoodForm
