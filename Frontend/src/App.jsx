import { useState } from 'react'
import './Styles/CSS/App.css'
import { Route, Routes } from 'react-router-dom'
import LoginLock from './Guard/LoginLock'
import RecipeChat from './Pages/RecipeChat'

function App() {
  return (
    <>
      <Routes>
        <Route path='/recipechat' element={<LoginLock needLoggedIn={true}><RecipeChat /></LoginLock>} />
      </Routes>
    </>
  )
}

export default App
