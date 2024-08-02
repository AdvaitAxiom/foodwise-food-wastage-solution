import { createContext, useContext, useState } from 'react'

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
    const [recipeMessages, setRecipeMessages] = useState([]);
    const [mealMessages, setMealMessages] = useState([]);
    return <ChatContext.Provider value={{ recipeMessages, setRecipeMessages,mealMessages, setMealMessages }}>{children}</ChatContext.Provider>
}

export const ChatState = () => {
    return useContext(ChatContext)
}

export default ChatProvider