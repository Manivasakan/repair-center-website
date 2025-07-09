import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

// Public Pages
import Home from '../../pages/public/Home';
import About from '../../pages/public/About';
import Contact from '../../pages/public/Contact';

// Admin Pages
import Login from '../../pages/admin/Login';

function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header - appears on all pages */}
      <Header />
      
      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          {/* Public Routes (Customer facing) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          {/* Add more admin routes later */}
        </Routes>
      </Box>
      
      {/* Footer - appears on all pages */}
      <Footer />
    </Box>
  );
}

export default Layout;