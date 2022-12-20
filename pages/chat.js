import { useState } from "react";
import styled from "styled-components";
import ChatBox from "../src/components/ChatBox/chatBox";
import ChatHeader from "../src/components/ChatHeader/chatHeader";
import ChatMain from "../src/components/MessagesArea/messagesArea";
import Container from "../src/components/Container/container";
import MessageArea from "../src/components/MessageArea/MessageArea";
import User from "../src/components/User/user";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5c2d3aG14anl0c2J6dW1wdGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE1NDM2MjYsImV4cCI6MTk4NzExOTYyNn0.PBvGDQrzlErmc7FneDHxR_1-o9IWO8IW6VTi7iCq7o4"
const SUPABASE_URL = "https://dysgwhmxjytsbzumptao.supabase.co"

export default function ChatPage() {

  const [message, setMessage] = useState({
    user: 'juliopampuch',
    text: ''
  })
  const [messageList, setMessageList] = useState(['Olá!'])

  const changeMessage = (event) => {
    setMessage({
      user: 'julio',
      text: event.target.value})
  }

  const handleNewMessage = (newMessage) => {
    setMessageList([
      ...messageList,
      newMessage
    ])
  }

  const keyPressed = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleNewMessage(message)
      setMessage({
        text: ''
      })
    }
  }

  const buttonPressed = (event) => {
    event.preventDefault()
    handleNewMessage(message)
    setMessage('')
  }

  return (
    <>
      <StyledBackground>
        <ChatBox>
          <ChatHeader/>
          <ChatMain>
            {messageList.map((message) => {
              return (
                <User key={message} user={message.user} message={message.text} />
              )
            })}
          </ChatMain>
          <MessageArea changeMessage={changeMessage} messageValue={message.text} keyPressed={keyPressed} buttonPressed={buttonPressed} />
        </ChatBox>
      </StyledBackground>
    </>
  )
}

const StyledBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vh;
  height: 100%;

  background-image: url('https://wallpaperaccess.com/full/314821.jpg')
`
