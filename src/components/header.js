import React from "react";
import styled from "styled-components";
import pix from "../components/logo.svg";
import Burger from "./burger.js";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={pix} />
        <Navigator>
          <Span>Home</Span>
          <Span>About</Span>
          <Span>Contact</Span>
          <Span>Blog</Span>
          <Span>Help</Span>
          <Span>Sign In</Span>
          <Button>Sign Up</Button>
        </Navigator>
        <Burger />
      </Wrapper>
    </Container>
  );
};
export default Header;
const Container = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #020c1b;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const Logo = styled.img`
  width: 120px;
  height: 40px;
`;
const Navigator = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Span = styled.div`
  color: white;
  font-size: 14px;
`;
const Button = styled.div`
  width: 150px;
  height: 50px;
  background-color: inherit;
  border: 1px solid white;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
