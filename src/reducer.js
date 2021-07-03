lastID = 0;

// if/else version
function reducer(state = [], action) {
  if (action.type === "bugAdded")
    return [
      ...state,
      {
        id: ++lastID,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === "bugRemoved")
    return state.filter((bug) => bug.id === action.payload.id);

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
