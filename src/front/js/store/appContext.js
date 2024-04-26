import React, { useState, useEffect, useContext } from 'react';
import getState from './flux.js';
import { auth } from '../../../firebase.js';

export const Context = React.createContext(null);

export function useAuth() {
  return useContext(Context);
}

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const clearUser = () => {
      setUser(null);
      setIsLoggedIn(false);
    };

    const [state, setState] = useState(
      getState({
        getStore: () => state?.store,
        getActions: () => ({ ...state?.actions, clearUser }),
        setStore: (updatedStore) =>
          setState((prevState) => ({
            store: Object.assign(prevState.store, updatedStore),
            actions: { ...prevState.actions, clearUser },
          })),
      })
    );

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
        setIsLoggedIn(!!user);
        setLoading(false);
      });

      return unsubscribe;
    }, []);

    useEffect(() => {
      if (user) {
        setState((prevState) => ({
          store: { ...prevState.store, currentUser: user },
          actions: { ...prevState.actions, clearUser },
        }));
      }
    }, [user]);

    const signup = async (email, password) => {
      await auth.createUserWithEmailAndPassword(email, password);
    };

    const value = {
      ...state,
      signup,
      clearUser,
      isLoggedIn,
    };

    return (
      <Context.Provider value={value}>
        {!loading && <PassedComponent {...props} />}
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
