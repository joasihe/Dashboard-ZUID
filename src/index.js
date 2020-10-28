import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import "./assets/style/style.css";

class App extends React.Component {
  render() {
    return <Login />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
