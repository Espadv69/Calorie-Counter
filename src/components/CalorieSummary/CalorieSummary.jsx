const CalorieSummary = ({ foods }) => {
  const totalCalories = foods.reduce((sum, food) => sum + food.calories, 0)
}

export default CalorieSummary
