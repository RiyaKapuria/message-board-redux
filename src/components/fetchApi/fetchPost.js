import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class FetchPost extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fetchPost} className="btn btn-success">
          Get Data
        </button>
        <ul className="list-group">
          {this.props.fetchData.map((fetchData, key) => {
            return (
              <div key={key} className="card mt-1">
                <span>
                  <b>UserID:</b> {fetchData.userId}
                </span>
                <span>
                  <b>Title:</b> {fetchData.title}
                </span>
                <span>
                  <b>Body:</b> {fetchData.body}
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { fetchData: state.fetchData };
};

export default connect(
  mapStateToProps,
  actions
)(FetchPost);
