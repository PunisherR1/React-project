import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";

/* pulls and shows info about the user from Auth0 API */
const Profile = () => {
  /* const { user } = useAuth0(); */
  const { closeSubmenu } = useGlobalContext();
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const { setUserMetadata } = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-05zy01hw.us.auth0.com";
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const { user_metadata } = await metadataResponse.json();
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
    if (isLoading === false) {
      getUserMetadata();
    }
  }, [isLoading, getAccessTokenSilently, setUserMetadata, user.sub]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className="profile" onMouseOver={closeSubmenu}>
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div className="row">
          <pre className="col-12 text-light bg-dark p-4">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    )
  );
};

export default Profile;
