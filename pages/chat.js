import { useState } from "react";
import styled from "styled-components";
import ChatBox from "../src/components/ChatBox/chatBox";
import ChatHeader from "../src/components/ChatHeader/chatHeader";
import ChatMain from "../src/components/ChatMain/chatMain";
import Container from "../src/components/Container/container";
import MessageArea from "../src/components/MessageArea/MessageArea";
import User from "../src/components/User/user";

export default function ChatPage() {

  const [message, setMessage] = useState()
  const [messageList, setMessageList] = useState(['Olá!'])

  const changeMessage = (event) => {
    setMessage(event.target.value)
  }

  const handleNewMessage = (newMessage) => {
    setMessageList([
      ...messageList,
      newMessage,
    ])
  }

  const keyPressed = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleNewMessage(message)
      setMessage('')
    }
  }

  return (
    <ChatBox>
      <ChatHeader text1="Chat" text2="Logout" />
      <ChatMain>
          {messageList.map((msg) => {
            return (
              <>
              <User message={msg} />
              </>
              )
            })}
      </ChatMain>
      <MessageArea changeMessage={changeMessage} messageValue={message} keyPressed={keyPressed} />
    </ChatBox>
  )
}
