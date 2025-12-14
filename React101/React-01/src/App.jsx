import React from 'react'
import Cards from './Components/Cards'
function App() {
  return (
    <div className='parent flex '>
      <Cards user = 'Piyush Ranjan' age = {19} img = '' />
      <Cards user = 'Gautam Mehta' age = {21} img = '' />
      <Cards user = 'Sunny Kumar' age = {20} img = '' />
      
      
      
    </div>
  )
}

export default App