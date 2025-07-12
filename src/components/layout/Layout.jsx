import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

// Public Pages
import Home from '../../pages/public/Home';
import About from '../../pages/public/About';
import Contact from '../../pages/public/Contact';

// Admin Pages
import Login from '../../pages/admin/Login';
import ForgotPassword from '../../pages/admin/ForgotPassword';

function Layout() {
  const location = useLocation();
  
  // Hide header and footer on admin login page
  //const isAdminLogin = location.pathname === '/admin/login';
  const isAdminLogin = (location.pathname === '/admin/login') || (location.pathname === '/admin/forgot-password');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header - hide on admin login */}
      {!isAdminLogin && <Header />}
      
      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          {/* Public Routes (Customer facing) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/forgot-password" element={<ForgotPassword />} />
          {/* Add more admin routes later */}
        </Routes>
      </Box>
      
      {/* Footer - hide on admin login */}
      {!isAdminLogin && <Footer />}
    </Box>
  );
}

export default Layout;