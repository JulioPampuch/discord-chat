import styled from "styled-components"
import appConfig from "../../../config.json"

const Button = () => {
  return (
    <StyledButton>
      <button type="submit">Entrar</button>
    </StyledButton>
  )
}

const StyledButton = styled.div`
  button {
    background-color: ${appConfig.theme.colors.primary['050']};

    width: 318px;
    height: 34px;

    color: ${appConfig.theme.colors.neutrals['900']};
    
    border: none;
    border-radius: 5px;

    cursor: pointer;
  }

  button:hover {
    background-color: ${appConfig.theme.colors.primary['300']};
  }

`

export default Button