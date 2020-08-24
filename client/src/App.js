import React from 'react';
import { BrowserRouter } from "react-router-dom";
import 'materialize-css';

import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hooks';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';

function App() {

  const { login, logout, userId, token } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <div className="container">
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
