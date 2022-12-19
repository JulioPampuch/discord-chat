import styled from "styled-components";
import ChatBox from "../src/components/ChatBox/chatBox";
import ChatHeader from "../src/components/ChatHeader/chatHeader";
import ChatMain from "../src/components/ChatMain/chatMain";
import Container from "../src/components/Container/container";
import MessageArea from "../src/components/MessageArea/MessageArea";
import User from "../src/components/User/user";

export default function ChatPage() {
  return (
    <ChatBox>
      <ChatHeader text1="Chat" text2="Logout" />
      <ChatMain>
          <User />
          <User />
      </ChatMain>
      <MessageArea />
    </ChatBox>
  )


}

