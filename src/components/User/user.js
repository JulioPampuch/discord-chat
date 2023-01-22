import styled from "styled-components"
import appConfig from "../../../config.json"

const User = (props) => {

  return (
    <StyledUserImage>
      <img src={`https://github.com/${props.user}.png`} alt='user' />
      <p className="username">{props.user}</p>
      <p className="date">{props.date}</p>
      <p className="hour">{props.hour}</p>
      {props.messageText.startsWith(':sticker:')
        ? (
          <div className="sticker">
            <img src={props.messageText.replace(':sticker:', '')} />
          </div>
        )
        : (
          <>
            <p className="message">{props.messageText}</p>
          </>
        )}
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
     width: 35px;
     border-radius: 50%;
    }

    .username {
      font-size: 19px;
    }

    .date {
      font-size: 13px;
      color: ${appConfig.theme.colors.neutrals['100']};
    }

    .hour {
      font-size: 11.5px;
      color: ${appConfig.theme.colors.neutrals['100']};
    }

    .message {
      width: 100%;
      font-size: 17px;
      padding: 1px 5px;
    }

    .sticker {
      width: 100%;
      padding: 1px 5px;

      img {
        width: 8%;
        border-radius: 0;
      }

    }

`

export default User