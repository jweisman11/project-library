import React, { useState, useEffect, useCallback } from "react";
import Keycloak from "keycloak-js";

let token, username;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  username: "Mystery User",
  keycloak: {},
});

// keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter
export const AuthContextProvider = (props) => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const keycloak = new Keycloak({
      url: " http://localhost:9080/auth/",
      realm: "keycloak-react-auth",
      clientId: "react-auth-local",
    });
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      setKeycloak(keycloak);
      setAuthenticated(authenticated);
    });
  }, []);

  if (keycloak) {
    if (authenticated) {
      token = keycloak.idToken;
      username = keycloak.idTokenParsed.preferred_username;
    }
  }

  const contextValue = {
    keycloak: keycloak,
    token: token,
    isLoggedIn: authenticated,
    username: username,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
