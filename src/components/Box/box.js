import styled from "styled-components";
import appConfig from "../../../config.json"

const Box = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('test')
  }

  return (
    <StyledBackground>
      <StyledForm onSubmit={handleSubmit}>
        {props.children}
      </StyledForm>
    </StyledBackground>
  )
}

const StyledBackground = styled.section`
  background-color: ${appConfig.theme.colors.neutrals['900']};

  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledForm = styled.form`
  background-color: ${appConfig.theme.colors.neutrals['700']};

  width: 700px;
  height: 304px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 50px;
`

export default Box