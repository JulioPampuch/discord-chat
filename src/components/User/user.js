import styled from "styled-components"
import appConfig from "../../../config.json"
import Container from "../Container/container"

const User = () => {
  return (
    <StyledUserImage>
      <img src="https://github.com/JulioPampuch.png" />
      <p className="username">Julio Pampuch</p>
      <p className="date">19/12/2022</p>
      <p className="message">Ola!</p>
    </StyledUserImage>
  )
}

const StyledUserImage = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    padding: 14px 18px;

    img {
     width: 25px;
     border-radius: 50%;
    }

    .uesername {
      font-size: 16px;
    }

    .date {
      font-size: 12px;
      color: ${appConfig.theme.colors.neutrals['100']};
    }

    .message {
      width: 100%;
      padding: 1px 0 5px 0;
    }
`

export default User