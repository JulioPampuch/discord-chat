import styled from "styled-components"
import appConfig from "../../../config.json"
import Container from "../Container/container"

const MessageArea = (props) => {
  return (
    <Container>
      <MessageAreaStyled>
        <input type="text" placeholder="Insira sua menssagem aqui" onChange={props.changeMessage} value={props.messageValue} onKeyDown={props.keyPressed} />
        <button type="button">😋</button>
      </MessageAreaStyled>
    </Container>
  )
}

const MessageAreaStyled = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  input {
    width: 95%;
    height: 48px;

    padding: 2.5px 12.5px;
    border: 1px solid ${appConfig.theme.colors.neutrals['900']};
  }

  button {
    background-color: ${appConfig.theme.colors.primary['050']};
    
    cursor: pointer;

    padding: 22px;
    border-radius: 50%;
    border: none;
  }

  button:hover {
    background-color: ${appConfig.theme.colors.primary['200']};
  }

`

export default MessageArea