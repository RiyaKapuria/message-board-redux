export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      const post = {
        id: action.post.id,
        title: action.post.title
      };
      return [...state, post];
    case "DELETE_POST":
      let updatedArray = state.filter(m => m !== action.post);
      return [...updatedArray];
    case "LOAD_POSTS_SUCCESS":
      let data = action.payload.map(value => value);
      return [...state, ...data];
    case "LOAD_POSTS_FAIL":
      let error = action.payload;
      return [...state, error.message];
    default:
      return state;
  }
};
