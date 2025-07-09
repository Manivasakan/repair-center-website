import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
  Alert,
  InputAdornment,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import BusinessIcon from '@mui/icons-material/Business';
import LockIcon from '@mui/icons-material/Lock';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any email/password
      if (formData.email && formData.password) {
        // Here you would typically validate credentials with your backend
        console.log('Login successful:', formData);
        
        // Redirect to admin dashboard
        navigate('/admin/dashboard');
      } else {
        setError('Please enter both email and password');
      }
    } catch  {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Implement forgot password logic
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 2,
            backgroundColor: 'white'
          }}
        >
          {/* Header */}
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                color: 'text.primary',
                mb: 1
              }}
            >
              REPAIR CENTER MANAGEMENT
            </Typography>
            
            {/* Company Logo Placeholder */}
            <Box
              sx={{
                width: 80,
                height: 80,
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3
              }}
            >
              <LockIcon sx={{ fontSize: 40, color: 'white' }} />
            </Box>
            
            <Typography variant="body2" color="text.secondary">
              [COMPANY LOGO]
            </Typography>
          </Box>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username/Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              margin="normal"
              required
              autoComplete="email"
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              margin="normal"
              required
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />

            {/* Remember Me & Forgot Password */}
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mb: 3 
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    size="small"
                  />
                }
                label="Remember Me"
              />
              <Link
                component="button"
                type="button"
                variant="body2"
                onClick={handleForgotPassword}
                sx={{ textDecoration: 'none' }}
              >
                [Forgot Password?]
              </Link>
            </Box>

            {/* Login Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                mb: 3,
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.dark'
                }
              }}
            >
              {loading ? 'LOGGING IN...' : '[LOGIN BUTTON]'}
            </Button>

            {/* Divider */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Divider sx={{ flexGrow: 1 }} />
              <Typography 
                variant="body2" 
                sx={{ px: 2, color: 'text.secondary' }}
              >
                OR Login with
              </Typography>
              <Divider sx={{ flexGrow: 1 }} />
            </Box>

            {/* Social Login Buttons */}
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<GoogleIcon />}
                onClick={() => handleSocialLogin('Google')}
                sx={{ py: 1.2 }}
              >
                [Google]
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<MicrosoftIcon />}
                onClick={() => handleSocialLogin('Microsoft')}
                sx={{ py: 1.2 }}
              >
                [Microsoft]
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<BusinessIcon />}
                onClick={() => handleSocialLogin('Company SSO')}
                sx={{ py: 1.2 }}
              >
                [Company SSO]
              </Button>
            </Box>
          </Box>

          {/* Footer */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              pt: 3,
              borderTop: 1,
              borderColor: 'divider'
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Version 1.0.0
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Support: 123-456
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;