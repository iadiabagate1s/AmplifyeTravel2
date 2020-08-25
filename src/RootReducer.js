const INITIAL_STATE = [];

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DATA":
      return [...state,action.data];
      case "Form":
      return [...state,action.data];
      case 'ERROR':
      return { ...state, error: true }

    default:
      return state;
  }
}

export default rootReducer;