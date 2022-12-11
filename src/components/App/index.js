import React, { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Blank from '../pages/Blank';

import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <>
      {/* {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )} */}
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Blank />} />
                    <Route path='/started' element={<Blank />} />
                    <Route path='/calendar' element={<Blank />} />
                    <Route path='/user' element={<Blank />} />
                    <Route path='/order' element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
