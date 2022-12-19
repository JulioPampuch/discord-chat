import styled from "styled-components"
import appConfig from "../../../config.json"
import Container from "../Container/container"

const MessageArea = () => {
  return (
    <Container>
      <MessageAreaStyled>
        <input type="text" placeholder="Insira sua menssagem aqui" />
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
    border: 1px solid black;
  }

  button {
    background-color: ${appConfig.theme.colors.primary['050']};

    padding: 22px;
    border-radius: 50%;
    border: none;
  }

  button:hover {
    background-color: ${appConfig.theme.colors.primary['200']};
  }

`

export default MessageArea