import * as actions from "../index";

const post = {
  id: 20,
  title: "Test case 1"
};

it("should handle addPost action", () => {
  const result = { type: "ADD_POST", post };
  expect(actions.addPost(post.title)).toEqual(result);
});

it("should handle deletePost action", () => {
  const result = { type: "DELETE_POST", post };
  expect(actions.deletePost(post)).toEqual(result);
});
