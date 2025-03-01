import { useState } from 'react'

const GoalSetter = ({ totalCalories }) => {
  const [goal, setGoal] = useState(2000)

  const handleGoalChange = (e) => {
    setGoal(Number(e.target.value))
  }

  const getTotalStatus = () => {
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
}

export default GoalSetter
