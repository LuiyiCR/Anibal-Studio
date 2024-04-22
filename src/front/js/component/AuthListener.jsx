import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const AuthListener = ({ children }) => {
  const { currentUser, loading } = useContext(Context);

  console.log('AuthListener component', currentUser);

  if (loading) {
    return <div>Iniciando...</div>;
  }

  return children;
};

export default AuthListener;
