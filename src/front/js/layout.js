import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop';
import { BackendURL } from './component/backendURL';

import { Home } from './pages/Home';
import injectContext from './store/appContext';

import { NavBar } from './component/NavBar.jsx';
import { Footer } from './component/Footer.jsx';
import Login from './pages/Login';

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || '';

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == '')
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <NavBar />
          <Routes>
            <Route element={<Home />} path="/" />
            {/* <Route element={<Single />} path="/single/:theid" /> */}
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Login />} path="/iniciar-sesion" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
