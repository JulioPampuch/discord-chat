import styled from "styled-components"
import appConfig from "../../../config.json"

const ChatBox = (props) => {
  return (
    <StyledBackground>
      {props.children}
    </StyledBackground>
  )

}

const StyledBackground = styled.section`
  background-color: ${appConfig.theme.colors.neutrals['600']};
  width: 90%;
  height: 92.5%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 32px 99px;
`

export default ChatBox