import { useState } from 'react'

import Header from './components/Header/Header'
import FoodEntry from './components/FoodEntry/FoodEntry'
import CalorieSummary from './components/CalorieSummary/CalorieSummary'
import GoalSetter from './components/GoalSetter/GoalSetter'
import EditFoodForm from './components/EditFoodForm/EditFoodForm'

const App = () => {
  const [foods, setFoods] = useState([]) // State to store food data
  const [editingIndex, setEditingIndex] = useState(null)

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]) // Update food data
  }

  const handleDeleteFood = (index) => {
    const confirm = window.confirm('Are you sure you want to delete this food?')
    if (confirm) {
      const updatedFoods = foods.filter((_, i) => i !== index)
      setFoods(updatedFoods)
    }
  }

  const handleEditFood = (index, updatedFood) => {
    const updatedFoods = foods.map((food, i) =>
      i === index ? updatedFood : food,
    )
    setFoods(updatedFoods)
    setEditingIndex(null)
  }

  const totalCalories = foods.reduce((sum, food) => sum + food.calories, 0)

  return (
    <div>
      <Header />
      <FoodEntry onAddFood={handleAddFood} />
      <CalorieSummary foods={foods} />
      <GoalSetter totalCalories={totalCalories} />

      {foods.length !== 0 ? (
        <div className="food-container">
          <h2>Food List</h2>
          <ul>
            {foods.map((food, index) => (
              <li key={index}>
                {editingIndex === index ? (
                  <EditFoodForm
                    food={food}
                    onSave={(updatedFood) => handleEditFood(index, updatedFood)}
                    onCancel={() => setEditingIndex(null)}
                  />
                ) : (
                  <>
                    {food.foodName} - {food.calories} calories
                    <button onClick={() => setEditingIndex(index)}>Edit</button>
                    <button onClick={() => handleDeleteFood(index)}>
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No foods!</p>
      )}
    </div>
  )
}

export default App
