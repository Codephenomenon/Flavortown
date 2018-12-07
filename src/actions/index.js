import axios from 'axios';

const API_KEY = 'f27d6effc0a05162b80d5ea96431e685';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}`;

export function fetchRecipes(request) {
  const url = `${ROOT_URL}&q=${request}`;
  const search = axios.get(url);
  return {
    type: 'FETCH_RECIPES',
    payload: search
  };
}

export function setLoading() {
  return {
    type: 'RECIPEES_LOADING'
  };
}
