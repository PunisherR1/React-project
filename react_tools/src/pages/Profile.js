import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div className="profile">
        <div className="profile-image">
          <img src={picture} alt="Profile" className="profile-image" />
          <hr />
        </div>
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
    </div>
  );
};

export default Profile;
