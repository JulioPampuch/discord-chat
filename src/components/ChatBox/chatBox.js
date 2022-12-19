import styled from "styled-components"
import appConfig from "../../../config.json"
import ChatHeader from "../ChatHeader/chatHeader"

const ChatBox = (props) => {
  return (
    <StyledBackground>
      {props.children}
    </StyledBackground>
  )

}

const StyledBackground = styled.section`
  background-color: ${appConfig.theme.colors.neutrals['600']};

  margin: 32px 99px;
`

export default ChatBox