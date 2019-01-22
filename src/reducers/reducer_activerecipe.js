const initState = {
  activeRecipe: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case 'SET_ACTIVE':
      return {
        ...state,
        active: action.payload
      };
    default:
      return state;
  }
}
