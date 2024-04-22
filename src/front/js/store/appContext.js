import React, { useState, useEffect, useContext } from 'react';
import getState from './flux.js';
import { auth } from '../../../firebase.js';

export const Context = React.createContext(null);

export function useAuth() {
  return useContext(Context);
}

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions, clearUser },
          }),
      })
    );

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        setLoading(false);
        setState({
          store: { ...state.store, currentUser: user },
          actions: { ...state.actions },
        });
      });

      return unsubscribe;
    }, []);

    const signup = async (email, password) => {
      await auth.createUserWithEmailAndPassword(email, password);
    };

    const clearUser = () => {
      setCurrentUser(null);
    };

    const value = {
      ...state,
      currentUser,
      signup,
      clearUser,
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
