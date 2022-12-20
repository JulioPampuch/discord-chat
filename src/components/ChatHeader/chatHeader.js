import { useRouter } from "next/router"
import styled from "styled-components"
import appConfig from "../../../config.json"
import Container from "../Container/container"

const ChatHeader = (props) => {

const routing = useRouter()

const goToHomePage = (event) => {
  event.preventDefault()
  routing.push('/')
}

  return (
    <StyledHeader>
      <Container>
        <button className="chat">Chat</button>
        <button onClick={goToHomePage} className="logout">Logout</button>
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

    .chat {
      color: ${appConfig.theme.colors.neutrals['100']};
    }

    .logout {
      color: ${appConfig.theme.colors.neutrals['200']};
    }

    button:hover {
      transform: scale(1.15);
      transition: 0.1s;
    }
`
export default ChatHeader