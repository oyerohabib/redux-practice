import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from "./actionTypes";
let lastID = 0;

// function reducer(state = [], action) {
//   if (action.type === "bugAdded") {
//     return [
//       ...state,
//       {
//         id: ++lastID,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   } else if (action.type === "bugRemoved") {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   }
//   return state;
// }

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastID,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug,
      );
    default:
      return state;
  }
}
