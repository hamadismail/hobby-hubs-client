import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const userInfo = {
    name: "hamad",
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
