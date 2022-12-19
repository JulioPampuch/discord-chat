import styled from "styled-components"
import appConfig from "../../../config.json"
import Container from "../Container/container"

const ChatMain = (props) => {
  return (
    <Container>
      <StyledChatMain>
        {props.children}
      </StyledChatMain>
    </Container>
  )
}

const StyledChatMain = styled.div`
    background-color: ${appConfig.theme.colors.neutrals['400']};

    margin: 23px 0;
`


export default ChatMain