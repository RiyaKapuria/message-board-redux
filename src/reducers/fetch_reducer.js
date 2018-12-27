export const fetchReducer = (state = [], action) => {
  switch (action.type) {
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
