import GlobalStyles from "../GlobalStyle"
import Title from "../src/components/Title/title"
import Box from "../src/components/Box/box"
import Input from "../src/components/Input/input"
import Button from "../src/components/Button/button"
import ImageArea from "../src/components/Image/image"
import { useState } from "react"

function HomePage() {

  const [username, setUsername] = useState('')

  const onChange = (event) => {
    setUsername(event.target.value)
  }

  const onSubmit = () => {
    console.log('teste')
  }

  return (
    <>
      <GlobalStyles />
      <Box>
        <Title tag="h1">Seja bem-vindo!</Title>
        <Title tag="h2">Discord - Chat</Title>
        <Input username={username} onChange={onChange}/>
        <Button />
        <ImageArea username={username}/>
      </Box>
    </>
  )
}

export default HomePage