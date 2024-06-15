import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <UserAuthContext.Provider value={[auth, setAuth]}>
      {children}
    </UserAuthContext.Provider>
  );
};

UserAuthContextProvider.propTypes = {
  children: PropTypes.element,
};

export default UserAuthContextProvider;
