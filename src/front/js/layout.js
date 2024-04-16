import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop';
import { BackendURL } from './component/backendURL';
import { Home } from './pages/Home';
import injectContext from './store/appContext';
import { NavBar } from './component/NavBar.jsx';
import { Footer } from './component/Footer.jsx';
import AuthListener from './component/AuthListener.jsx';
import Login from './pages/Login';
import SignUp from './pages/SignUp.js';
import Products from './pages/Products.js';
import ForgotPassword from './pages/ForgotPassword.js';

const Layout = () => {
  const basename = process.env.BASENAME || '';

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == '')
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <NavBar />
          {/* <AuthListener> */}
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<Products />} path="/products" />
            <Route element={<ForgotPassword />} path="/forgot-password" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {/* </AuthListener> */}
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
