import { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import FoodEntry from './components/FoodEntry/FoodEntry'
import CalorieSummary from './components/CalorieSummary/CalorieSummary'
import GoalSetter from './components/GoalSetter/GoalSetter'
import EditFoodForm from './components/EditFoodForm/EditFoodForm'
import Notification from './components/Notification/Notification'
import ConfirmationModal from './components/ConfirmationModal/ConfirmationModal'

import './App.css'

const LOCAL_STORAGE_FOODS_KEY = 'calorieCounter.foods'
const LOCAL_STORAGE_GOAL_KEY = 'calorieCounter.goal'

const App = () => {
  const [foods, setFoods] = useState(() => {
    const savedFoods = localStorage.getItem(LOCAL_STORAGE_FOODS_KEY)
    return savedFoods ? JSON.parse(savedFoods) : []
  })
  const [goal, setGoal] = useState(() => {
    const savedGoal = localStorage.getItem(LOCAL_STORAGE_GOAL_KEY)
    return savedGoal ? Number(savedGoal) : 2000
  })
  const [editingIndex, setEditingIndex] = useState(null)
  const [notification, setNotification] = useState('')
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const [foodToDeleteIndex, setFoodToDeleteIndex] = useState(null)

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_FOODS_KEY, JSON.stringify(foods))
  }, [foods])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_GOAL_KEY, goal)
  }, [goal])

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood])
    showNotification(`Added: ${newFood.foodName}`)
  }

  const handleDeleteFood = (index) => {
    setFoodToDeleteIndex(index)
    setShowConfirmationModal(true)
  }

  const confirmDelete = () => {
    const deletedFood = foods[foodToDeleteIndex]
    const updatedFoods = foods.filter((_, i) => i !== foodToDeleteIndex)
    setFoods(updatedFoods)
    showNotification(`Deleted: ${deletedFood.foodName}`)
    setShowConfirmationModal(false)
  }

  const cancelDelete = () => {
    setShowConfirmationModal(false)
  }

  const handleEditFood = (index, updatedFood) => {
    const updatedFoods = foods.map((food, i) =>
      i === index ? updatedFood : food
    )
    setFoods(updatedFoods)
    setEditingIndex(null)
    showNotification(`Updated: ${updatedFood.foodName}`)
  }

  const handleSetGoal = (newGoal) => {
    setGoal(newGoal)
    showNotification(`Goal updated to ${newGoal} calories`)
  }

  const showNotification = (message) => {
    setNotification(message)
  }

  const closeNotification = () => {
    setNotification('')
  }

  const totalCalories = foods.reduce((sum, food) => sum + food.calories, 0)

  return (
    <div>
      <Header />
      <FoodEntry onAddFood={handleAddFood} />
      <CalorieSummary foods={foods} />
      <GoalSetter
        goal={goal}
        onSetGoal={handleSetGoal}
        totalCalories={totalCalories}
      />

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
                    <div className="li-buttons">
                      <button onClick={() => setEditingIndex(index)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteFood(index)}>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="noFoods">No foods!</p>
      )}
      <Notification message={notification} onClose={closeNotification} />
    </div>
  )
}

export default App
