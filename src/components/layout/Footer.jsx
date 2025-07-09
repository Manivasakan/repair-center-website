import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        py: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              TechFix Repair Center
            </Typography>
            <Typography variant="body2">
              Professional device repair services with quality guarantee.
              Fast, reliable, and affordable solutions for all your tech needs.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">+91 22 1234 5678</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">info@techfixcenter.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">Mumbai, Maharashtra</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Typography variant="body2" component="div">
              • Mobile Phone Repair<br/>
              • Computer/Laptop Repair<br/>
              • Tablet Repair<br/>
              • Data Recovery<br/>
              • Screen Replacement
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: 1, borderColor: 'rgba(255,255,255,0.2)', mt: 3, pt: 2 }}>
          <Typography variant="body2" align="center">
            © 2024 TechFix Repair Center. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;