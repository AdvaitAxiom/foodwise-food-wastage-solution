import React from 'react'
import "../Styles/CSS/chatBox.css"
import ScrollableFeed from 'react-scrollable-feed'
import ChatBubble from './ChatBubble'

const ChatBox = ({messages}) => {
  return (
    <ScrollableFeed  className={'chatBox'+(messages.length===0?' emptyChatBox':'')}>
      {!messages.length && <span className='emptyChatBoxText'>Let's turn those ingredients into a feast! 🍲✨<br/> What's on the menu today?</span>}
      {messages.map((message,index)=>(
        <ChatBubble key={index} message={message.parts[0].text} role={message.role}/>
      ))}
    </ScrollableFeed>
  )
}

export default ChatBox
