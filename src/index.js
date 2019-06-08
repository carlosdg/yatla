import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import NavList from "./components/NavList";
import Header from "./components/Header";
import Pages from "./pages";
import "./styles.css";
import TodoStore from "./stores/TodoStore";

const AppContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
  min-height: calc(100vh - 20px);
`;

const MainContainer = styled.div`
  display: flex;
`;

const Nav = styled.div`
  flex: 0 0 100px;
  margin-right: 2rem;
`;

const Main = styled.div`
  flex-grow: 1;
`;

const App = () => (
  <AppContainer>
    <Header />
    <MainContainer>
      <Nav>
        <NavList />
      </Nav>
      <Main>
        <TodoStore>
          <Pages />
        </TodoStore>
      </Main>
    </MainContainer>
  </AppContainer>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
