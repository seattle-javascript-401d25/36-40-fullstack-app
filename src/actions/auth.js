import superagent from 'superagent';
import * as routes from '../lib/routes';

export const setToken = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeToken = () => ({
  type: 'TOKEN_REMOVE',
});

export const userSignup = user => (store) => {
  return superagent.post(`${API_URL}${routes.SIGNUP_ROUTE}`)
  .send(user)
  .withCredentials()
  .then((response) => {
    return store.dispatch(setToken(response.body.token));
  });
};