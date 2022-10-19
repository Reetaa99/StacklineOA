const initialState = {};

export default function mainReducer(previousState = initialState, action) {
  switch (action.type) {
    case "updateData":
      return action.payload;
    default:
      return previousState;
  }
}
