import React from "react";
import posed from "react-pose";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListContainer = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.li({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const P = styled.p`
  margin-left: 1rem;
`;

export default () => (
  <div>
    <h2>Home</h2>
    <ListContainer>
      <Item>
        <Link to="/about">About</Link>
        <P>See more information about this app</P>
      </Item>
      <Item>
        <Link to="/todos">To do List</Link>
        <P>Go to the list of tasks</P>
      </Item>
    </ListContainer>
  </div>
);
