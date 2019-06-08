import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const A = styled(Link)`
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 1rem 0;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.15);
  }

  &:first-child {
    margin-top: 0;
  }
`;

export default () => (
  <ul>
    <li>
      <A to="/">Home</A>
    </li>
    <li>
      <A to="/about">About</A>
    </li>
    <li>
      <A to="/todos">To do list</A>
    </li>
  </ul>
);
