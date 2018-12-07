import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipes';
import ActiveRecipeReducer from './reducer_activerecipe';

const rootReducer = combineReducers({
  data: RecipeReducer,
  activeRecipe: ActiveRecipeReducer
});

export default rootReducer;
