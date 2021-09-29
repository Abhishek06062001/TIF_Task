import React from 'react'
import styled from "styled-components";
const Services = () => {
    return (
        <Container>
        <Wrapper>
        <h1>Advanced Statistics</h1>
        <h3>Track how your links are performing across the web with our advanced statistics keyboard</h3>
        </Wrapper>
        <Box>
        <Line></Line>
        <Cards>
        <div className="card c1">
        <img src="/images/icon-brand-recognition.svg"  />
        <div className="container">
          <h2><b>Brand Recognition</b></h2>
          <p>Boost Ypur brand recognition with each click.Generic links don`t mean a thing. Branded links help instill confidence in your content.</p>
        </div>
      </div>
      <div className="card c2">
        <img src="/images/icon-detailed-records.svg"  />
        <div className="container">
          <h2><b>Detailed Records</b></h2>
          <p>Gain insights into which is clicking your links. Knowing when and where people engage with your content helps inform better decision. </p>
        </div>
      </div>
      <div className="card c3">
        <img src="/images/icon-fully-customizable.svg"  />
        <div className="container">
          <h2><b>Fully Customizable</b></h2>
          <p>Improve brand awareness and content discoverability through cutomizable links,supercharging audience engagement.</p>
        </div>
      </div>
        </Cards>
        
        </Box>
        </Container>
    )
}

export default Services

const Line = styled.div`

width:60vw;
height:10px;
transform: translate(50px, 150px);
background-color:#4FFFB0;
@media only screen and (max-width:768px){
    
}

`

const Cards = styled.div`

display:flex;
flex-direction:row;
justify-content:space-between;
.card {
    margin:10px 30px;
   background-color:white;
   border-radius:8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    img{
        transform: translate(20px,-30px);
        background-color:#35323e;
        padding:10px;
        border-radius:50%;
    }
  }
  .c1{
      margin-bottom:40px;
      z-index:1;
  }
  .c2{
      margin-top:20px;
      margin-bottom:20px;
      z-index:1;
  }
  .c3{
      margin-top:40px;
      z-index:1;
  }
 
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  
  .container {
    padding: 2px 16px;
    text-align:center;
  }
  @media only screen and (max-width:768px){
      flex-direction:column;
      .card {
        
        img{
            transform: translate(30vw,-30px);
            background-color:#35323e;
            padding:10px;
            border-radius:50%;
            justify-content:center;
        }
      }
      .c1{
        margin-bottom:0px;
        margin-top:20px;
    }
    .c2{
        margin-top:40px;
        margin-bottom:0px;
    }
    .c3{
        margin-top:40px;
    }
  }
`

const Container = styled.div` 

background-color:#9e9aa7;
width:100%;
`


const Box = styled.div`
width:80vw;
margin:0 auto;


`

const Wrapper = styled.div`
align-items:center;
display:flex;
text-align:center;
flex-direction:column;
width:50vw;
justify-content: center;
height: auto;
margin:0 auto;
h1{
    font-size:44px;
}
h3{
   
  
   
    
  color:  #9e9aa;
  align-items: center;
  text-align: center;
}

`  
