import React from "react";
import "./App.css";
import Header from "./components/Header";
import Chats from "./components/Chats";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import ChatSrceen from "./components/ChatSrceen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/chats/:person">
            <Header backButton="/chats" />
            <ChatSrceen />
          </Route>
          <Route exact path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
