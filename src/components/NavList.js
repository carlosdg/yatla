import React from "react";
import posed from "react-pose";
import { Link } from "react-router-dom";
import styled from "styled-components";

const A = styled(Link)`
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 1rem 0;
  text-decoration: none;
  color: inherit;
`;

const Li = posed.li({
  hoverable: true,
  pressable: true,
  hover: { scale: 1.1 },
  hoverEnd: { scale: 1 },
  press: { scale: 0.9 }
});

export default () => (
  <ul>
    <Li>
      <A to="/">Home</A>
    </Li>
    <Li>
      <A to="/about">About</A>
    </Li>
    <Li>
      <A to="/todos">To do list</A>
    </Li>
    <Li>
      <A to="/new">New to do</A>
    </Li>
  </ul>
);
