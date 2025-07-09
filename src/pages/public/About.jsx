import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function About() {
  const stats = [
    { number: '5000+', label: 'Devices Repaired' },
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Happy Customers' },
    { number: '24hrs', label: 'Average Repair Time' }
  ];

  const services = [
    'Mobile Phone Screen Replacement',
    'Battery Replacement & Repair',
    'Water Damage Recovery',
    'Computer Hardware Repair',
    'Laptop Screen & Keyboard Repair',
    'Tablet Touch Screen Repair',
    'Data Recovery Services',
    'Software Troubleshooting',
    'Virus Removal & Cleanup',
    'System Upgrades'
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            About TechFix Repair Center
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Your trusted partner for professional device repair services
          </Typography>
        </Container>
      </Box>

      {/* About Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              TechFix Repair Center was founded with a simple mission: to provide fast, 
              reliable, and affordable repair services for all types of electronic devices. 
              We understand how important your devices are to your daily life and business operations.
            </Typography>
            <Typography paragraph>
              Our team of certified technicians has years of experience in repairing mobile phones, 
              computers, tablets, and other electronic devices. We use only genuine parts and 
              provide warranty on all our repair services.
            </Typography>
            <Typography paragraph>
              Located in the heart of Mumbai, we serve customers across the city with both 
              in-store and doorstep repair services. Our commitment to quality and customer 
              satisfaction has made us a trusted name in device repair services.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <BusinessIcon sx={{ mr: 1, color: 'primary.main' }} />
                Company Overview
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography paragraph>
                <strong>Founded:</strong> 2021
              </Typography>
              <Typography paragraph>
                <strong>Location:</strong> Mumbai, Maharashtra
              </Typography>
              <Typography paragraph>
                <strong>Specialization:</strong> Mobile, Computer & Tablet Repair
              </Typography>
              <Typography paragraph>
                <strong>Service Area:</strong> Mumbai & Surrounding Areas
              </Typography>
              <Typography paragraph>
                <strong>Operating Hours:</strong> Mon-Sat 9AM-8PM
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ backgroundColor: 'primary.dark', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" textAlign="center" gutterBottom>
            Our Achievements
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box textAlign="center">
                  <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="h6">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services List */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <EmojiEventsIcon sx={{ mr: 1, color: 'primary.main' }} />
              Our Expertise
            </Typography>
            <List>
              {services.map((service, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={service} />
                </ListItem>
              ))}
            </List>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <GroupIcon sx={{ mr: 1, color: 'primary.main' }} />
              Our Team
            </Typography>
            <Typography paragraph>
              Our team consists of certified and experienced technicians who are passionate 
              about technology and committed to providing excellent service.
            </Typography>
            <Typography paragraph>
              We regularly update our skills and knowledge to stay current with the latest 
              technology trends and repair techniques. This ensures that we can handle 
              repairs for the newest devices as well as older models.
            </Typography>
            <Typography paragraph>
              Every team member is trained in customer service excellence, ensuring that 
              your experience with us is professional, friendly, and stress-free.
            </Typography>
            
            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'primary.light', color: 'white' }}>
              <Typography variant="h6" gutterBottom>
                Our Promise
              </Typography>
              <Typography>
                "We promise to treat your device with the same care as if it were our own, 
                providing honest diagnosis, fair pricing, and quality repairs with warranty."
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;