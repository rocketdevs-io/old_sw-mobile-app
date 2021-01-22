import * as types from './types';
export const registerUser = (user) => {
  return {
    type: types.REGISTER_USER,
    payload: user,
  };
};

export const loginUser = (user) => {
  return {
    type: types.LOGIN_USER,
    payload: user,
  };
};

export const initUser = () => ({
  type: types.INIT_USER,
});

export const initUserSucess = () => ({
  type: types.INIT_USER_SUCCESS,
});
