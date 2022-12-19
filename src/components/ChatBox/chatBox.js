import styled from "styled-components"
import appConfig from "../../../config.json"
import ChatHeader from "../ChatHeader/chatHeader"

const ChatBox = () => {
  return (
    <StyledBackground>
      <ChatHeader />
    </StyledBackground>
  )

}

const StyledBackground = styled.section`
  background-color: ${appConfig.theme.colors.neutrals['600']};

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 32px 99px;
`

export default ChatBox