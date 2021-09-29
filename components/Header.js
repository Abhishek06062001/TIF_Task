import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { fas,faBars } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="">
        <img src="/images/logo.svg" alt="" />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
      <Left>
        <MenuLink href="">Features</MenuLink>
        <MenuLink href="">Pricicng</MenuLink>
        <MenuLink href="">Resources</MenuLink>
      </Left>

      <Right>
        <MenuLink href="">Login</MenuLink>
        <MenuLink href="">Sign Up</MenuLink>
      </Right>  
      </Menu>
    </Nav>
  );
}

export default Header;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
  @media (max-width: 768px){
    &:hover {
      color: #7b7fda;
      padding:5px 10px;
      background-color:#4FFFB0;
      border-radius:20px;
    }
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  flex-wrap: wrap;
  background: owhite;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background-color:#3b3054;
    color:white;
    font-weight:500;
    z-index:1;
  }
`;

const Left = styled.div`
display:flex;
flex:1;
@media (max-width: 768px){
  flex-direction:column;
}
`
const Right = styled.div`
display:flex;
@media (max-width: 768px){
  flex-direction:column;
}`
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #3b3054;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
