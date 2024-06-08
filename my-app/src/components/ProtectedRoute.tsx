import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../store';

const ProtectedRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useRecoilValue(authState);

  return (
    <>
    <Route
      {...rest}
      render={(props:any) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" />
      }
    /></>
  );
};  

export default ProtectedRoute;
