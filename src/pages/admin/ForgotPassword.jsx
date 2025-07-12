import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  IconButton,
  Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import LockResetIcon from '@mui/icons-material/LockReset';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, show success message
      setSuccess(true);
      console.log('Password reset email sent to:', email);
      
    } catch  {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    navigate('/admin/login');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
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
          {/* Back to Login Button */}
          <Box sx={{ mb: 2 }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={handleBackToLogin}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Back to Login
            </Button>
          </Box>

          {/* Header */}
          <Box textAlign="center" mb={4}>
            {/* Reset Password Icon */}
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
              <LockResetIcon sx={{ fontSize: 40, color: 'white' }} />
            </Box>
            
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                color: 'text.primary',
                mb: 2
              }}
            >
              Reset Password
            </Typography>
            
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Enter your email address to receive password reset instructions.
            </Typography>
          </Box>

          {/* Success Message */}
          {success && (
            <Alert severity="success" sx={{ mb: 3 }}>
              <Typography variant="body2">
                Password reset instructions have been sent to your email address.
                Please check your inbox and follow the instructions to reset your password.
              </Typography>
            </Alert>
          )}

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {/* Reset Form */}
          {!success && (
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                margin="normal"
                required
                autoComplete="email"
                autoFocus
                InputProps={{
                  startAdornment: (
                    <EmailIcon sx={{ mr: 1, color: 'action.active' }} />
                  ),
                }}
                sx={{ mb: 3 }}
                placeholder="Enter your email address"
              />

              {/* Send Reset Link Button */}
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
                {loading ? 'SENDING RESET LINK...' : 'SEND RESET LINK'}
              </Button>
            </Box>
          )}

          {/* Remember Password Link */}
          <Box textAlign="center">
            <Typography variant="body2" color="text.secondary">
              Remember your password?{' '}
              <Link
                component="button"
                type="button"
                onClick={handleBackToLogin}
                sx={{
                  textDecoration: 'none',
                  color: 'primary.main',
                  fontWeight: 'medium',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Login
              </Link>
            </Typography>
          </Box>

          {/* Footer */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              pt: 3,
              mt: 3,
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

export default ForgotPassword;