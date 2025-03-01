import { useState } from 'react'

const GoalSetter = () => {
  const [goal, setGoal] = useState(2000)

  const handleGoalChange = (e) => {
    setGoal(Number(e.target.value))
  }
}

export default GoalSetter
