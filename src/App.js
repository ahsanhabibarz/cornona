import React from "react";
import "./App.css";
import Live from "./pages/Live";
import Info from "./pages/Info";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Live} />
        <Route exact path="/info" component={Info} />
      </div>
    </Router>
  );
}

export default App;
