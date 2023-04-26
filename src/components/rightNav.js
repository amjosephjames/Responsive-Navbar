import React from "react";
import styled from "styled-components";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Wrapper>
        <Span>Home</Span>
        <Span>About</Span>
        <Span>Contact</Span>
        <Span>Blog</Span>
        <Span>Help</Span>
        <Span>Sign In</Span>
        <Button>Sign Up</Button>
      </Wrapper>
    </Ul>
  );
};

export default RightNav;

const Ul = styled.ul`
  list-style: none;
  /* display: flex; */
  display: none;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    /* flex-flow: column nowrap; */
    background-color: #020c1b;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    border-top-left-radius: 10px;
    width: 300px;
    padding-top: 7rem;
    /* padding-top: 3.5rem; */
    transition: transform 0.3s ease-in-out;
    display: block;

    /* li {
      color: #fff;
    } */
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
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
