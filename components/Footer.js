import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Container>
      <Left>
        <h2>Shortly</h2>
      </Left>
      <Middle>
        <div className="all">
          <h3>Features</h3>
          <p>Live Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className="all">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Developer</p>
          <p>Support</p>
        </div>
        <div className="all">
          <h3>Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Carrers</p>
          <p>Contact</p>
        </div>
      </Middle>

      <Right>
      <img src='/images/icon-facebook.svg' />
      <img src='/images/icon-twitter.svg'/>
      <img src='/images/icon-pinterest.svg '/>
      <img src='/images/icon-instagram.svg'/>
      </Right>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
  background-color: #232127;
  display: flex;
  
  justify-content:space-between;
  color:white;
  @media only screen and (max-width:768px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`;

const Left = styled.div`
margin-top:20px;
margin-left:30px;
h2{
  font-size:30px;
}
@media only screen and (max-width:768px){
  margin-left:0px;
}
`;

const Middle = styled.div`
display:flex;
.all{
    display:flex;
    flex-direction:column;
    margin:0px 30px;
}
@media only screen and (max-width:768px){
    flex-direction:column;
}
`;
const Right = styled.div`
display:flex;
margin-top:20px;
margin-right:30px;
img{
    width:20px;
    height:20px;
    margin:0 10px;
}
@media only screen and (max-width:768px){
  margin-bottom:20px;
}
`;
