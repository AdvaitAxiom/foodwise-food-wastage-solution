import React from 'react'
import ChatBox from '../Components/ChatBox'
import { ChatState } from '../Context/ChatProvider'
import "../Styles/CSS/recipeChat.css"

const RecipeChat = () => {
  const { recipeMessages } = ChatState()
  return (
    <div className='recipeChat'>
      <div className='recipeTitleBar'>Cheffy</div>
      <div className='recipeChatContainer'>
        <div className='recipeChatBox'>
          <ChatBox messages={recipeMessages} />
        </div>
      </div>
    </div>
  )
}

export default RecipeChat