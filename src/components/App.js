import React from "react";
import { Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import PublicBoard from "./publicBoard/PublicBoard";
import PrivateMessage from "./privateBoard/PrivateBoard";
import fetchPost from "./fetchApi/fetchPost";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route path="/" exact component={PublicBoard} />
        <Route path="/private" component={PrivateMessage} />
        <Route path="/fetch" component={fetchPost} />
      </div>
    );
  }
}

export default App;
