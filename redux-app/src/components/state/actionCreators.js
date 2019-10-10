import axios from 'axios';
import * as types from './actionTypes';

export function changeInput(value) {
  console.log(value);
  return {
    type: types.ON_INPUT_CHANGE,
    payload: value,
  };
}

export function addUser(user) {
  return {
    type: types.ADD_USER,
    payload: user,
  };
}

export const getUser = (user) => dispatch => {
  const userApi = `https://api.github.com/users/${user}`;
  const userPromise = axios.get(userApi);

  Promise.all([userPromise])
    .then(([userData]) => {
      
      dispatch(addUser(userData)); // :)
    });
};

