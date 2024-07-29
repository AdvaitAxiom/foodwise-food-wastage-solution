import React from 'react'
import "../Styles/CSS/chatBox.css"
import ScrollableFeed from 'react-scrollable-feed'
import ChatBubble from './ChatBubble'

const ChatBox = ({messages}) => {
  return (
    <ScrollableFeed  className='chatBox'>
      {messages.map((message,index)=>(
        <ChatBubble message={message.parts[0].text} role={message.role}/>
      ))}
    </ScrollableFeed>
  )
}

export default ChatBox
