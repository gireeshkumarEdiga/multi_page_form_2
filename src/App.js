import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Main from "./components/Main";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container textAlign="center">
        <Main />
      </Container>
    </div>
  );
}

export default App;
