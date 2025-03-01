import { useState } from 'react'

const GoalSetter = ({ totalCalories }) => {
  const [goal, setGoal] = useState(2000)

  const handleGoalChange = (e) => {
    setGoal(Number(e.target.value))
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
            type="text"
            value={goal}
            onChange={handleGoalChange}
            placeholder="Enter your daily calorie goal"
          />
        </label>
      </div>
      <p>{getGoalStatus()}</p>
    </div>
  )
}

export default GoalSetter
