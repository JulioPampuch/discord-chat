import { useEffect, useState } from "react";
import styled from "styled-components";
import ChatBox from "../src/components/ChatBox/chatBox";
import ChatHeader from "../src/components/ChatHeader/chatHeader";
import ChatMain from "../src/components/MessagesArea/messagesArea";
import MessageArea from "../src/components/MessageInput/MessageInput";
import User from "../src/components/User/user";
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { useRouter } from "next/router";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5c2d3aG14anl0c2J6dW1wdGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE1NDM2MjYsImV4cCI6MTk4NzExOTYyNn0.PBvGDQrzlErmc7FneDHxR_1-o9IWO8IW6VTi7iCq7o4"
const SUPABASE_URL = "https://dysgwhmxjytsbzumptao.supabase.co"
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

function getMessageInRealTime(addMessage) {
  return supabaseClient
    .from('messages')
    .on('INSERT', (data) => {
      addMessage(data.new)
    })
    .subscribe();
}

export default function ChatPage() {

  const routing = useRouter()
  const logUser = routing.query.username
  const [message, setMessage] = useState({
    id: '',
    user: logUser,
    text: ''
  })

  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    supabaseClient
      .from('messages')
      .select('*')
      .then(({ data }) => {
        setMessageList(data)
      })
    // getMessageInRealTime(() => {
      
    // })
  }, [])

  const handleNewSticker = (sticker) => {
    const message = {
      id:messageList.length + 1,
      user: logUser,
      text: sticker
    }

    supabaseClient
      .from('messages')
      .insert([
        message
      ]).select('*').
      then(({ data }) => {
        setMessageList([
          ...messageList,
          message
        ])
      })
  }

  const changeMessage = (event) => {
    setMessage({
      user: logUser,
      text: event.target.value
    })
  }

  const handleNewMessage = (newMessage) => {
    const message = {
      user: logUser,
      text: newMessage
    }

    supabaseClient
      .from('messages')
      .insert([
        message
      ]).select('*').
      then(({ data }) => {
        setMessageList([
          ...messageList,
          data[0]
        ])
      })
  }

  const keyPressed = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleNewMessage(message.text)
      setMessage({
        text: ''
      })
    }
  }

  const getSticker = (sticker) => {
    handleNewSticker(`:sticker: ${sticker.target.src}`)
  }

  return (
    <>
      <StyledBackground>
        <ChatBox>
          <ChatHeader />
          <ChatMain>
            {messageList.map((message) => {
              return (
                message ?
                  <User key={message.id} message={message} user={message.user} messageText={message.text} />
                  : <p>Loading...</p>
              )
            })}
          </ChatMain>
          <MessageArea changeMessage={changeMessage} messageValue={message.text} keyPressed={keyPressed} getSticker={getSticker} />
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
