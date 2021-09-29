import React from 'react'
import styled from 'styled-components'
function Boost() {
    return (
        <Container>
        <Image src='/images/bg-boost-desktop.svg' >
       
        </Image>
        <Box>
        <h2>Get Your Links Today</h2>
        <button>Get Started Now!</button></Box>
       
        </Container>
    )
}

export default Boost
const Container = styled.div`
background-color: #3b3054;
position: relative;
text-align: center;
color: white;
font-family: 'Poppins', sans-serif;
`

const Image = styled.img`
width: 100%;
height:200px;
`
const Box = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  button{
    font-family: 'Poppins', sans-serif;
    color:white;
    padding:5px 10px;
    font-size:18px;
    font-weight:700;
    border-radius:20px;
    background-color:#4FFFB0;
  }
`
