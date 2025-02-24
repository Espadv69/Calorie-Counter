import { useState } from 'react'

import Header from './components/Header/Header'
import FoodEntry from './components/FoodEntry/FoodEntry'

const App = () => {
  const [foods, setFoods] = useState([]) // State to store food data

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
