// import React, { useEffect, useContext } from 'react';
// import { auth } from '../../../firebase.js';
// import { Context } from '../store/appContext';

// const AuthListener = (children) => {
//   console.log('AuthListener component');
//   const { actions } = useContext(Context);

//   useEffect(() => {
//     console.log('useEffect hook');
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         actions.setUser(user);
//       } else {
//         actions.setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, [actions]);

//   return children;
// };

// export default AuthListener;
