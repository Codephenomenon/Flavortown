const initState = {
  activeRecipe: null
};

export default function(state = initState, action) {
  return {
    ...state,
    activeRecipe: action.payload
  };
}
