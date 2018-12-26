import React from "react";
import PrivateForm from "./PrivateForm";
import PrivateList from "./PrivateList";

class PrivateMessage extends React.Component {
  render() {
    return (
      <div>
        <PrivateForm />
        <PrivateList />
      </div>
    );
  }
}
export default PrivateMessage;
