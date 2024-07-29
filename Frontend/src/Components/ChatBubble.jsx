import React from 'react'
import "../Styles/CSS/chatBubble.css"

const ChatBubble = ({ message, role }) => {
  return (
    <div className={role === "user" ? 'userBubble' : 'modelBubble'}>
      {message}
    </div>
  )
}

export default ChatBubble
