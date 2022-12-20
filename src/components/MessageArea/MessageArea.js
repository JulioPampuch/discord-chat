import styled from "styled-components"
import appConfig from "../../../config.json"
import Container from "../Container/container"

const MessageArea = (props) => {
  return (
    <Container>
      <MessageAreaStyled>
        <input type="text" placeholder="Insira sua menssagem aqui" onChange={props.changeMessage} value={props.messageValue} onKeyDown={props.keyPressed} />
        <button type="submit">Ok</button>
      </MessageAreaStyled>
    </Container>
  )
}

const MessageAreaStyled = styled.div`

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  width: 100%;

  input {
    width: 95%;
    height: 2.5rem;

    padding: 2.5px 12.5px;
    border: 1px solid ${appConfig.theme.colors.neutrals['900']};
  }

  button {
    width: 3%;
    background-color: ${appConfig.theme.colors.primary['050']};
    color: ${appConfig.theme.colors.neutrals['900']};
    
    cursor: pointer;

    padding: 15px;
    border: none;
  }

  button:hover {
    background-color: ${appConfig.theme.colors.primary['200']};
  }



`

export default MessageArea