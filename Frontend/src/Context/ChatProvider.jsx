import { createContext, useContext, useState } from 'react'

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
    const [recipeMessages, setRecipeMessages] = useState([]);
    return <ChatContext.Provider value={{ recipeMessages, setRecipeMessages }}>{children}</ChatContext.Provider>
}

export const ChatState = () => {
    return useContext(ChatContext)
}

export default ChatProvider