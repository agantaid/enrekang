import Cookies from 'js-cookie';

const isAuthenticated = () => {
  if (Cookies.get('token')) return true;
  return false;
};

const setToken = (token, id) => {
  Cookies.set('token', token, { expires: 20 });
  Cookies.set('id', id, { expires: 20 });
};

const getToken = () => Cookies.get('token');

const getUserId = () => Cookies.get('id');

const clear = () => {
  Cookies.remove('id');
  Cookies.remove('token');
};

export default {
  setToken,
  getToken,
  getUserId,
  isAuthenticated,
  clear,
};
