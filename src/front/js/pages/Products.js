import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import LogoutButton from '../component/LogoutButton.jsx';

const Products = () => {
  const { store, loading, isLoggedIn } = useContext(Context);

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    console.log(isLoggedIn ? store.currentUser : 'No user logged in');
  }

  return (
    <div className="container mt-5 mb-5 d-flex align-items-center flex-column h-100">
      <h1>Productos</h1>
      {isLoggedIn && <LogoutButton />}
    </div>
  );
};

export default Products;
