import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  userName : null,
  ban : null,
  login: () => {},
  logout: () => {},
});
