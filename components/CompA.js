import React from "react";
import styled from "styled-components";
function CompA() {
  return <Container>
    <BoxLeft>
        <h2>More Than Just Shorter Links</h2>
        <h3>Build Your Brand Recognition and get detailed insights on how your links are performing</h3>
            <div className='lower_c' onClick={() => console.log('hello')}>
              Get Started
            </div>
    </BoxLeft>
    <BoxRight>
        <img src='/images/illustration-working.svg' alt='' />
    </BoxRight>
  </Container>;
}

export default CompA;

const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
font-family: 'Poppins', sans-serif;
margin:100px 0;
@media only screen and (max-width:700px){
    flex-direction:column-reverse;
    margin:50px 0;
}
`

const BoxLeft = styled.div`
flex-basis:40%;
position:relative;
margin-left:50px;
h2{
    font-size:54px;
}
h3{
    font-size:30px;
    color:#bfbfbf
}
.lower_c{
    background-color: #4FFFB0;
  height: 60px;
  width: 200px;
  color: white;
  background-color: #3366ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  font-size: large;
  margin-top: 20px;
  margin-bottom: 50px;
  margin-right: 10px;
}

@media only screen and (max-width:700px){
flex-basis:100%;
h2{
    font-size:35px;
}
h3{
    font-size:15px;
}
}
`

const BoxRight = styled.div`
position:relative;
flex-basis:60%;
display:flex;
align-items:center;
img{
    width:90%;

}
@media only screen and (max-width:700px){
    flex-basis:100%;
  margin-bottom:50px;
  img{  
    width:77%;
  }
}
`