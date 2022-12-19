import styled from "styled-components"
import appConfig from "../../../config.json"
import Container from "../Container/container"


const ChatHeader = (props) => {
  return (
    <StyledHeader>
      <Container>
        <button>{props.text1}</button>
        <button>{props.text2}</button>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
    width: 100%;
    margin-top: 28px;

    div {
      background-color: ${appConfig.theme.colors.neutrals['600']};
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    button {
      background-color: ${appConfig.theme.colors.neutrals['600']};
      font-size: 16px;
      cursor: pointer;
      
      padding: 10px;
      border: none;
    }

    button:hover {
      transform: scale(1.15);
      transition: 0.1s;
    }
`
export default ChatHeader