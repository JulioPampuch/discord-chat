import Title from "../src/components/Title/title"
import Box from "../src/components/Box/box"
import Input from "../src/components/Form/form"
import ImageArea from "../src/components/Image/image"
import { useState } from "react"
import { useRouter } from "next/router"

function HomePage() {

  const [username, setUsername] = useState('')
  const routing = useRouter()

  const onChange = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    routing.push('/chat')
    console.log(username)
    // window.location.href = "/chat"
  }

  return (
    <Box handleSubmit={handleSubmit} >
      <Title tag="h1">Seja bem-vindo!</Title>
      <Title tag="h2">Discord - Chat</Title>
      <Input username={username} onChange={onChange} />
      <ImageArea username={username} />
    </Box>
  )
}

export default HomePage