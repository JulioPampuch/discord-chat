import styled from "styled-components"
import appConfig from "../../../config.json"

const Input = (props) => {

  const handleChange = (event) => {

  }

  return (
    <>
      <InputStyled>
        <input type='text' value={props.username} onChange={props.onChange} />
      </InputStyled>
    </>
  )
}

const InputStyled = styled.div`
  input {
    height: 34px;
    width: 318px;
    background-color: ${appConfig.theme.colors.neutrals['800']};
    color: #FFFFFF;
    
    margin: 28px 0 11px 0;
    padding: 0 7.5px;
    
    border: 1px solid ${appConfig.theme.colors.neutrals['999']};
    border-radius: 5px;
  }
`

export default Input