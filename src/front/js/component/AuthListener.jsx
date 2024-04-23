import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { auth } from '../../../firebase.js';

const AuthListener = ({ children }) => {
  const { actions } = useContext(Context);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        actions.clearUser();
      }
    });

    return unsubscribe;
  }, []);

  return children;
};

export default AuthListener;
