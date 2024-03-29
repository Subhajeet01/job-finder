import { createContext, useState } from "react";
export const UserProfileContext = createContext();

export const UserProfileContextProvider = (props) => {
  const [userProfile, setUserProfile] = useState({});

  return (
    <UserProfileContextProvider.Provider value={[userProfile, setUserProfile]}>
      {props.children}
    </UserProfileContextProvider.Provider>
  );
};
