import React from 'react'
import { useState } from 'react'
import ChatBox from '../Components/ChatBox'
import { ChatState } from '../Context/ChatProvider'
import "../Styles/CSS/mealPlanner.css"
import { mealModel } from '../utils/geminiModels'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const MealPlanner = () => {
  const { mealMessages, setMealMessages } = ChatState()
  const [newMessage, setNewMessage] = useState("")

  const chat=async (message)=>{
    const chatInstance = mealModel.startChat({ history: mealMessages });
    const result = await chatInstance.sendMessage(message);
    setMealMessages((prevMessages) => [
      ...prevMessages,
      { role: "model", parts: [{ text: result.response.text() }] }
    ]);
  }

  const handleSubmit = async () => {
    if (newMessage.trim()) {
      const userMessage = { role: "user", parts: [{ text: newMessage }] };
      setMealMessages((prevMessages) => [...prevMessages, userMessage]);
      setNewMessage('');
      await chat(newMessage);
    }
  }


  return (
    <div className='mealPlanner'>
      <div className='mealTitleBar'>
        Meal Planner 🤖
      </div>
      <div className='mealPlannerContainer'>
        <div className='mealPlannerBox'>
          <ChatBox messages={mealMessages} />
        </div>
        <div className="senderContainer">
          <div className="inputContainer">
            <textarea 
              placeholder={`Lets plan chief`}
              value={newMessage} 
              onChange={(e) => { setNewMessage(e.target.value) }} 
              className='recipeInput' 
            />
          </div>
          <div className="buttonContainer">
            <button type="submit" onClick={handleSubmit} className='recipeSubmitButton'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MealPlanner