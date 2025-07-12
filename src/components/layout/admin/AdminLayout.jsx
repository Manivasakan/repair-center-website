import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import Sidebar, { DRAWER_WIDTH } from './Sidebar';
import TopHeader from './TopHeader';

function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar 
        open={mobileOpen} 
        onClose={handleDrawerToggle}
      />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          backgroundColor: 'grey.50',
          minHeight: '100vh'
        }}
      >
        {/* Top Header */}
        <TopHeader onMenuClick={handleDrawerToggle} />
        
        {/* Toolbar Spacer */}
        <Toolbar />
        
        {/* Page Content */}
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default AdminLayout;