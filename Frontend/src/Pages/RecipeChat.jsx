import React from 'react'
import { useState } from 'react'
import ChatBox from '../Components/ChatBox'
import { ChatState } from '../Context/ChatProvider'
import "../Styles/CSS/recipeChat.css"
import { recipeModel } from '../utils/geminiModels'

const RecipeChat = () => {
  const { recipeMessages,setRecipeMessages } = ChatState()
  const [newMessage, setNewMessage] = useState("")

  const chat=async (message)=>{
    const chatInstance = recipeModel.startChat({ history: recipeMessages });
    const result = await chatInstance.sendMessage(message);
    setRecipeMessages((prevMessages) => [
      ...prevMessages,
      { role: "model", parts: [{ text: result.response.text() }] }
    ]);
  }

  const handleSubmit = async () => {
    if (newMessage.trim()) {
      const userMessage = { role: "user", parts: [{ text: newMessage }] };
      setRecipeMessages((prevMessages) => [...prevMessages, userMessage]);
      setNewMessage('');
      await chat(newMessage);
    }
  }

  return (
    <div className='recipeChat'>
      <div className='recipeTitleBar'>Cheffy</div>
      <div className='recipeChatContainer'>
        <div className='recipeChatBox'>
          <ChatBox messages={recipeMessages} />
        </div>
        <div className="senderContainer">
          <div className="inputContainer">
            <input type="text" value={newMessage} onChange={(e) => { setNewMessage(e.target.value) }} />
          </div>
          <div className="buttonContainer">
            <button type="submit" onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeChat