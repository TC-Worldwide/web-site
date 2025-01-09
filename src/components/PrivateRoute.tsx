import React from "react";
import { Route, Navigate } from "react-router-dom"; // Updated import statement
import { useAuth } from "./AuthProvider";
import PropTypes from 'prop-types';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  [key: string]: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      element={user ? <Component {...rest} /> : <Navigate to="/login" />} // Updated render method
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
