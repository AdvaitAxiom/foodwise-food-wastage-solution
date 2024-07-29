import { useState } from 'react'
import './Styles/CSS/App.css'
import RecipeChat from "./Pages/RecipeChat"
import { Route, Routes } from 'react-router-dom'
import LoginLock from './Guard/LoginLock'

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
