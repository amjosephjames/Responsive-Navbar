import React from "react";
import styled from "styled-components";
import Header from "./header";
import Hero from "./hero";
const Homescreen = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* background-color: #020c1b; */
`;
