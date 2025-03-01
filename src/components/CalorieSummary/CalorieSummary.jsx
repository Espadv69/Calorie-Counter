import './CalorieSummary.css'

const CalorieSummary = ({ foods }) => {
  const totalCalories = foods.reduce((sum, food) => sum + food.calories, 0)

  return (
    <div className="calorie-summary">
      <h2>Calorie Summary</h2>
      <p>Total Calories Consumed: {totalCalories}</p>
    </div>
  )
}

export default CalorieSummary
