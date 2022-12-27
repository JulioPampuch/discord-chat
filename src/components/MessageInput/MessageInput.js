import { useState } from "react"
import styled from "styled-components"
import appConfig from "../../../config.json"
import Container from "../Container/container"

const MessageArea = (props) => {

  const [openState, setOpenState] = useState(false)

  const handleOpenState = () => {
    setOpenState(!openState)
  }

  const getSticker = (sticker) => {
    props.sendSticker(sticker)
    handleOpenState()
  }

  return (
    <Container>
      <MessageAreaStyled>
        <input type="text" placeholder="Insira sua menssagem aqui" onChange={props.changeMessage} value={props.messageValue} onKeyDown={props.keyPressed} />
        <button onClick={handleOpenState}>😋</button>
        {openState && (
          <div className="stickersButton">
            <p>Stickers</p>
            <div className="stickers">
              {appConfig.stickers.map((sticker) => {
                return (
                  <img key={sticker} onClick={getSticker} src={sticker} />
                )
              })}
            </div>
          </div>
        )}
      </MessageAreaStyled>
    </Container>
  )
}

const MessageAreaStyled = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;

  input {
    width: 95%;
    height: 2.5rem;

    padding: 2.5px 12.5px;
    border: 1px solid ${appConfig.theme.colors.neutrals['900']};
  }

  button {
    width: 4%;
    background-color: ${appConfig.theme.colors.primary['050']};
    color: ${appConfig.theme.colors.neutrals['900']};
    
    cursor: pointer;

    padding: 12px 0;
    border-radius: 10px;
    border: none;
  }

  button:hover {
    background-color: ${appConfig.theme.colors.primary['200']};
  }

 //Stickers button

 .stickersButton {

  overflow: scroll;
  overflow-x: hidden;

  width: 390px;
  height: 430px;

  position: absolute;
  bottom: 20px;
  right: 20px;

  background-color:  ${appConfig.theme.colors.neutrals['700']};

  border-radius: 7.5px;

  p {
    font-size: 20px;
    padding: 17.5px 15px;
  }
 }

 .stickers {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;

  img {
    width: 140px;
    padding: 15px;

    border-radius: 10px;
  }

  img:hover {
    background-color: ${appConfig.theme.colors.neutrals['600']};
  }

 }

`

export default MessageArea