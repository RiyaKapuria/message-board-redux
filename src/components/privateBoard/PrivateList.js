import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class PrivateList extends Component {
  handleDelete = msg => {
    this.props.deleteMessage(msg);
  };

  render() {
    return (
      <ul className="list-group">
        {this.props.messages.map(msg => {
          return (
            <div key={msg} className="card mt-1">
              <div className="card-body">
                <span className="ml-2" role="img" aria-label="">
                  👍
                </span>
                <span className="mr-4 upvotes">1</span>
                {msg}
                <span
                  onClick={this.handleDelete.bind(this, msg)}
                  className="float-right"
                >
                  delete
                </span>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

export default connect(
  mapStateToProps,
  actions
)(PrivateList);
