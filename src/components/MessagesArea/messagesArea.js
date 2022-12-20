import styled from "styled-components"
import appConfig from "../../../config.json"
import Container from "../Container/container"

const ChatMain = (props) => {
  return (
    <StyledChatMain>
        {props.children}
    </StyledChatMain>
  )
}

const StyledChatMain = styled.section`
    display: flex;
    flex-direction: column;

    background-color: ${appConfig.theme.colors.neutrals['400']};
    height: 80%;

    margin: 23px 32px;
    padding: 17px 21px;

    @media (max-width: 1750px){
      height: 75%;
  }
`


export default ChatMain