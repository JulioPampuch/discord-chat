import styled from "styled-components"
import appConfig from "../../../config.json"
import Container from "../Container/container"

const User = (props) => {
  return (
    <StyledUserImage>
        <img src={`https://github.com/${props.user}.png`} />
        <p className="username">{props.user}</p>
        <p className="date">19/12/2022</p>
        <p className="message">{props.message}</p>
      {/* <button>x</button> */}
    </StyledUserImage>
  )
}

const StyledUserImage = styled.div`
    :hover {
      background-color: ${appConfig.theme.colors.neutrals['500']};
    }


    display: flex;
    align-items: center;
    flex-wrap: wrap;      
    gap: 8px;
    padding: 8px 18px;

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
      padding: 1px 0;
    }

`

export default User