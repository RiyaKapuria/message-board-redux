import { postReducer } from "../post_reducer";

const post = {
  id: 20,
  title: "Test case"
};
const initialState = [];

it("should handle add posts reducer", () => {
  const action = { type: "ADD_POST", post };
  expect(postReducer(initialState, action)).toEqual([post]);
});

it("should handle unknown posts reducer", () => {
  const action = { type: "UNKNOWN" };
  expect(postReducer(initialState, action));
});

it("should handle delete posts reducer", () => {
  const action = { type: "DELETE_POST", post };
  expect(postReducer(initialState, action));
});
