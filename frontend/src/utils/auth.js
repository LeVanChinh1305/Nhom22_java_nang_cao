const TOKEN_KEY = 'app_auth_token';
const USER_KEY = 'app_auth_username';
const ROLE_KEY = 'app_auth_role';

export const saveAuth = (token, username, role) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, username);
  localStorage.setItem(ROLE_KEY, role);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUsername = () => localStorage.getItem(USER_KEY);
export const getRole = () => localStorage.getItem(ROLE_KEY);
export const clearAuth = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(ROLE_KEY);
};
