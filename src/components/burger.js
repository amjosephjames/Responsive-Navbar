import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./rightNav";
import { AiOutlineMenu } from "react-icons/ai";
const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Icon open={open} onClick={() => setOpen(!open)}>
        <AiOutlineMenu color="white" size={25} />
      </Icon>
      <RightNav open={open} />
    </>
  );
};
export default Burger;

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  /* top: 15px; */
  right: 20px;
  z-index: 20;
  display: none;
  /* background-color: white; */

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;
