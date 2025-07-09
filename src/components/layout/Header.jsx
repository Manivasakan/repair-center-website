import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/admin/login');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo and Company Name */}
          <Box 
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={handleLogoClick}
          >
            <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
              TechFix Repair Center
            </Typography>
          </Box>

          {/* Navigation Menu */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button 
              color="inherit" 
              onClick={() => navigate('/')}
              sx={{ fontSize: '1rem' }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/about')}
              sx={{ fontSize: '1rem' }}
            >
              About
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/contact')}
              sx={{ fontSize: '1rem' }}
            >
              Contact
            </Button>
            
            {/* Login Button */}
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<LoginIcon />}
              onClick={handleLoginClick}
              sx={{
                ml: 2,
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Admin Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;