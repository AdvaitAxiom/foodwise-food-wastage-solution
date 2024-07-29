import React from 'react'
import "../Styles/CSS/chatBox.css"
import ScrollableFeed from 'react-scrollable-feed'
import ChatBubble from './ChatBubble'

const ChatBox = ({messages}) => {
  return (
    <ScrollableFeed forceScroll className='chatBox'>
      {messages.map((message,index)=>(
        <ChatBubble message={message.message} role={message.role}/>
      ))}
    </ScrollableFeed>
  )
}

export default ChatBox
