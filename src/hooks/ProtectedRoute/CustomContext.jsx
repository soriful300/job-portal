import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const useUserData = () => {
  const { user } = useContext(AuthContext);
  return user;
};
