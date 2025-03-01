import { useState } from 'react'

const GoalSetter = ({ goal, onSetGoal, totalCalories }) => {
  const [newGoal, setNewGoal] = useState(goal)
  const [error, setError] = useState('')

  const handleGoalChange = (e) => {
    setNewGoal(Number(e.target.value))
  }

  const handleSaveGoal = () => {
    if (!newGoal || isNaN(newGoal) || newGoal < 0) {
      setError('Please enter a valid number of calories (positive number).')
      return
    }

    onSetGoal(newGoal)
    setError('')
  }

  const getGoalStatus = () => {
    if (totalCalories < goal) {
      return `You have ${
        goal - totalCalories
      } calories left to reach your goal.`
    } else if (totalCalories === goal) {
      return 'You have reached your daily calorie goal!'
    } else {
      return `You have exceeded your goal by ${totalCalories - goal} calories.`
    }
  }

  return (
    <div className="goalSetter">
      <h2>Set Your Daily Calorie Goal</h2>
      <div className="form-goal">
        <label>
          Daily Goal:
          <input
            type="number"
            value={newGoal}
            onChange={handleGoalChange}
            placeholder="Enter your daily calorie goal"
          />
        </label>
        <button onClick={handleSaveGoal}>Save Goal</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>{getGoalStatus()}</p>
    </div>
  )
}

export default GoalSetter
