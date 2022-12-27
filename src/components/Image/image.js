import styled from "styled-components"
import appConfig from "../../../config.json"

const ImageArea = (props) => {

  const CreateImage = () => {

    const imgLink = `https://github.com/${props.username}.png`

    if(props.username.length > 2) {
      return (
        <img src={imgLink} alt='user' />
      )
    } else {
      return (
        <></>
      )
    }

  }

  return (
    <StyledImage>
      <div>
        <CreateImage />
        <p>{props.username}</p>
      </div>
    </StyledImage>
  )
}

const StyledImage = styled.div`
  div {
    width: 200px;
    height: 240px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    
    background-color: ${appConfig.theme.colors.neutrals['800']};

    border: 1px solid ${appConfig.theme.colors.neutrals['999']};
    border-radius: 10px;
    margin-left: 90px;
  }

  div img {
    width: 80%;
    border-radius: 50%;
  }

  div p {
    background-color: ${appConfig.theme.colors.neutrals['999']};
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 12px;
    color: ${appConfig.theme.colors.primary['500']};
  }
`

export default ImageArea