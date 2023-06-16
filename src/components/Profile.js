import React from "react";
import { useAuth } from "../provider/AuthProvider";
const Profile = () => {
  const { user, logout } = useAuth();
  const logoutHandler = () => {
    logout();
  };
  return (
    <>
      <h1>Welcome {user.username}</h1>
      <div>
        <button type="submit" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </>
  );
};
export default Profile;
