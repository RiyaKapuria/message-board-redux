import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class PostList extends React.Component {
  handleDelete = post => {
    this.props.deletePost(post);
  };

  render() {
    if (!this.props.posts.length > 0) {
      return "no items found";
    }
    return (
      <ul className="list-group">
        {this.props.posts.map((post, key) => {
          return (
            <div key={key} id="initialData" className="card mt-1">
              {console.log(post)}
              <div className="card-body">
                {!post.userId ? (
                  <span className="ml-2" role="img" aria-label="">
                    👍 {post.id} {post.title}
                  </span>
                ) : (
                  <div>
                    <span className="mr-4 upvotes">
                      <b>UserID:</b> {post.userId}
                    </span>
                    <span className="mr-4 upvotes">
                      <b>Title:</b> {post.title}
                    </span>
                    <span className="mr-4 upvotes">
                      <b>Body:</b> {post.body}
                    </span>
                  </div>
                )}
                <span
                  onClick={this.handleDelete.bind(this, post)}
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
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  actions
)(PostList);
