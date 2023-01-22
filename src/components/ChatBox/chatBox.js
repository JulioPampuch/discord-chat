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
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba( 70, 70, 70, 0.95 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2px );
  -webkit-backdrop-filter: blur( 2px );
  border-radius: 5px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  margin: 32px 99px;
`

export default ChatBox