import axios from '@/utils/axios';
import { SET_CURRENT_USER } from '../reducers/currentUser';
import sessionUtils from '@/utils/sessionUtils';

export const userLogin =
  (payload, path = 'login') =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(`/auth/${path}`, payload);
      sessionUtils.setToken(data.token, data.id);
      // also get the current user data
      const { data: currentUser } = await axios.get(`/users/${data.id}`);
      dispatch({ type: SET_CURRENT_USER, data: currentUser });
      return currentUser;
    } catch (error) {
      throw error;
    }
  };

export const userLogout = () => (dispatch) => {
  sessionUtils.clear();
  return dispatch({ type: SET_CURRENT_USER, data: {} });
};

export const setCurrentUser = (userData) => async (dispatch) => {
  return dispatch({ type: SET_CURRENT_USER, data: userData });
};
