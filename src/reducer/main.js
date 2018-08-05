import { combineReducers } from 'redux';
import token from './token';
import profile from './profile';
import image from './image';

export default combineReducers({
  token,
  profile,
  image,
});
