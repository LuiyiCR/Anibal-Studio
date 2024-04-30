import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import LogoutButton from '../component/LogoutButton.jsx';
import { db } from '../../../firebase.js';

const Products = () => {
  const { store, loading, isLoggedIn } = useContext(Context);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsCollection = db.collection('products');
        const querySnapshot = await productsCollection.get();
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(products);
      } catch (error) {
        console.error('Error getting products: ', error);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    console.log(isLoggedIn ? store.currentUser : 'No user logged in');
  }

  return (
    <div className="container mt-5 mb-5 d-flex align-items-center flex-column h-100">
      <h1>Productos</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
      {isLoggedIn && <LogoutButton />}
    </div>
  );
};

export default Products;
