export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
    case "DELETE_POST":
      let updatedArray = state.filter(m => m !== action.post);
      return [...updatedArray];
    default:
      return state;
  }
};
