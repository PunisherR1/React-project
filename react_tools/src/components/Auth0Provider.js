import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

/* Attaches history to Auth0Provider and receives configuration */
const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain="dev-05zy01hw.us.auth0.com"
      clientId="6JfHxLPHImMXiVsWTBfnbdDsNWzUlxeY"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
