import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import LogoutButton from '../component/LogoutButton.jsx';

const Products = () => {
  const { store } = useContext(Context);

  console.log(store.user);

  return (
    <div>
      <h1>Productos</h1>
      {store.user && <LogoutButton />}
    </div>
  );
};

export default Products;
