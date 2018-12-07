const initState = {
  recipes: [],
  loading: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case 'FETCH_RECIPES':
      return {
        ...state,
        recipes: [...action.payload.data.recipes],
        loading: false
      };
    case 'RECIPEES_LOADING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
