import React, { useState } from "react";
import { createContext } from "react";
import { StudentDataType } from "../dataTypes/academiaData.type";

type AuthContextPropsType = {
  token: string | null;
  setToken: (token: string | null) => void;
  userInfo: StudentDataType | null;
  setUserInfo: (userInfo: StudentDataType | null) => void;
};
export const AuthContext = createContext<AuthContextPropsType>(
  {} as AuthContextPropsType
);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<StudentDataType | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
