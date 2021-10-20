import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useGlobalContext } from "../context";

/* pulls and shows info about the user from Auth0 API */
const Profile = () => {
  const { user } = useAuth0();
  const { name, email } = user;
  const { closeSubmenu } = useGlobalContext();

  return (
    <div className="profile" onMouseOver={closeSubmenu}>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
