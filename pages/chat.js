import { useEffect, useState } from "react";
import styled from "styled-components";
import ChatBox from "../src/components/ChatBox/chatBox";
import ChatHeader from "../src/components/ChatHeader/chatHeader";
import ChatMain from "../src/components/MessagesArea/messagesArea";
import MessageArea from "../src/components/MessageInput/MessageInput";
import User from "../src/components/User/user";
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { useRouter } from "next/router";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwd2pnZnVlaGV4aG5oZnBma2FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIwOTk2MTEsImV4cCI6MTk4NzY3NTYxMX0.DuuiqKsJ1OS4W59RZR5YdswP87uSG5pHgMcSbecPAk0"
const SUPABASE_URL = "https://tpwjgfuehexhnhfpfkaa.supabase.co"
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// function getMessageInRealTime(addMessage) {
//   return supabaseClient
//     .from('messages')
//     .on('INSERT', (data) => {
//       addMessage(data.new)
//     })
//     .subscribe();
// }

export default function ChatPage() {

  const routing = useRouter()
  const logUser = routing.query.username

  const [message, setMessage] = useState({
    id: '',
    user: logUser,
    text: '',
    date: ''
  })

  const [messageList, setMessageList] = useState([])

  const newDate = new Date()
  const currentDate = newDate.getDate() + "/" + (newDate.getMonth() + 1) + "/" + newDate.getFullYear()

  const moment = require('moment')
  const hourFormated = moment().format('HH:mm')

  useEffect(() => {
    supabaseClient
      .from('messages')
      .select('*')
      .then(({ data }) => {
        setMessageList(data)
        // console.log(data)
      })
    // getMessageInRealTime((newMessage) => {
    //   setMessageList([
    //     ...messageList,
    //     data[0]
    //   ])
    // })
  }, [])

  const handleNewSticker = (sticker) => {
    const message = {
      user: logUser,
      text: sticker,
      date: currentDate,
      hour: hourFormated
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
      text: newMessage,
      date: currentDate,
      hour: hourFormated
    }

    supabaseClient
      .from('messages')
      .insert([
        message
      ]).select('*').
      then(({ data }) => {
        // console.log(data)
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

  const sendSticker = (sticker) => {
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
                  <User key={message.id} message={message} user={message.user} date={message.date} messageText={message.text} hour={message.hour} />
                  : <p>Loading...</p>
              )
            })}
          </ChatMain>
          <MessageArea changeMessage={changeMessage} messageValue={message.text} keyPressed={keyPressed} sendSticker={sendSticker} />
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
