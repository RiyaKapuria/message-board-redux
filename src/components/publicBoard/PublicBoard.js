import React, { Component } from "react";
import PublicList from "./PublicList";
import PublicForm from "./PublicForm";

class PublicBoard extends Component {
  render() {
    return (
      <div>
        <div>
          <PublicForm />
          <PublicList />
        </div>
      </div>
    );
  }
}

export default PublicBoard;
