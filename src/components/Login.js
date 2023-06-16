import React, { useState } from "react";
import { useAuth } from "../provider/AuthProvider";
const Login = () => {
  const [user, setUser] = useState(null);
  const { login } = useAuth();

  const handleLogin = () => {
    login(user);
  };
  return (
    <>
      <h1>Login Page</h1>
      <div>
        <label>Name</label>
      </div>
      <div>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </div>
      <div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>

      <div>
        Keterangan :
        <p>User : admin. Bisa Akses 'Extra' tapi tidak bisa akses 'About'</p>
        <p>User : asal. Bisa Akses 'About' tapi tidak bisa akses 'Extra'</p>
      </div>
    </>
  );
};

export default Login;
