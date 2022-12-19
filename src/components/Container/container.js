import styled from "styled-components"

const Container = (props) => {
  return (
    <StyledContainer>
        {props.children}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0 32px;
`

export default Container