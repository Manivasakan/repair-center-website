import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Divider
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    problem: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send data to your backend
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        device: '',
        problem: '',
        message: ''
      });
      setSubmitStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      title: 'Phone',
      details: ['+91 22 1234 5678', '+91 98765 43210'],
      action: 'Call Now'
    },
    {
      icon: <EmailIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      title: 'Email',
      details: ['info@techfixcenter.com', 'support@techfixcenter.com'],
      action: 'Send Email'
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      title: 'WhatsApp',
      details: ['+91 98765 43210'],
      action: 'Chat on WhatsApp'
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      title: 'Address',
      details: ['123 Tech Street, Andheri West', 'Mumbai, Maharashtra 400053'],
      action: 'Get Directions'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 6,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Get in touch for device repair quotes and support
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Get a Free Quote
              </Typography>
              <Typography color="text.secondary" paragraph>
                Fill out the form below and we'll get back to you with a repair quote within 24 hours.
              </Typography>

              {submitStatus === 'success' && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you! Your message has been sent successfully. We'll contact you soon.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Device Type"
                      name="device"
                      placeholder="e.g., iPhone 12, MacBook Pro"
                      value={formData.device}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Problem Description"
                      name="problem"
                      placeholder="Describe the issue with your device"
                      value={formData.problem}
                      onChange={handleInputChange}
                      multiline
                      rows={3}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Additional Message"
                      name="message"
                      placeholder="Any additional information..."
                      value={formData.message}
                      onChange={handleInputChange}
                      multiline
                      rows={2}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ py: 1.5, fontSize: '1.1rem' }}
                    >
                      Send Message & Get Quote
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                Contact Information
              </Typography>
              <Typography color="text.secondary" paragraph>
                Reach out to us through any of the following channels. We're here to help!
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} key={index}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                        {info.icon}
                        <Box sx={{ ml: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            {info.title}
                          </Typography>
                          {info.details.map((detail, idx) => (
                            <Typography key={idx} color="text.secondary">
                              {detail}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                      <Button size="small" variant="outlined">
                        {info.action}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Business Hours */}
            <Paper sx={{ p: 3, mt: 4, backgroundColor: 'grey.50' }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
                Business Hours
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Monday - Friday</Typography>
                  <Typography fontWeight="bold">9:00 AM - 8:00 PM</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Saturday</Typography>
                  <Typography fontWeight="bold">10:00 AM - 6:00 PM</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Sunday</Typography>
                  <Typography fontWeight="bold">Closed</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;