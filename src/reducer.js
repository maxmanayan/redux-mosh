import * as actions from "./actionTypes";

lastID = 0;

// if/else version
function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED)
    return [
      ...state,
      {
        id: ++lastID,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.BUG_REMOVED)
    return state.filter((bug) => bug.id === action.payload.id);
  else if (action.type === actions.BUG_RESOLVED)
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );
  return state;
}

// // switch/case version
// function reducer(state = [], action) {
//   switch (action.type) {
//     case "bugAdded":
//       return [
//         ...state,
//         {
//           id: ++lastID,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case "bugRemoved":
//       return state.filter((bug) => bug.id === action.payload.id);
//     default:
//       return state;
//   }
// }

export default reducer;
