import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import TabletIcon from '@mui/icons-material/Tablet';
import BuildIcon from '@mui/icons-material/Build';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';

function Home() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <PhoneAndroidIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Mobile Repair',
      description: 'Expert repair for all smartphone brands including screen replacement, battery issues, and water damage recovery.'
    },
    {
      icon: <ComputerIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Computer Repair',
      description: 'Complete laptop and desktop repair services including hardware upgrades, virus removal, and system optimization.'
    },
    {
      icon: <TabletIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Tablet Repair',
      description: 'Professional tablet repair services for all major brands with genuine parts and quality guarantee.'
    }
  ];

  const features = [
    {
      icon: <SpeedIcon sx={{ fontSize: 30, color: 'secondary.main' }} />,
      title: 'Fast Service',
      description: 'Most repairs completed within 24-48 hours'
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 30, color: 'secondary.main' }} />,
      title: 'Quality Guarantee',
      description: '3-month warranty on all repairs and parts'
    },
    {
      icon: <BuildIcon sx={{ fontSize: 30, color: 'secondary.main' }} />,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Professional Device Repair Services
          </Typography>
          <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            Fast, reliable, and affordable repair solutions for all your tech devices
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'grey.100'
                }
              }}
              onClick={() => navigate('/contact')}
            >
              Get Quote Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
              onClick={() => navigate('/about')}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          We repair all types of electronic devices with professional expertise
        </Typography>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Why Choose Us?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Ready to Fix Your Device?
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Contact us today for a free diagnosis and quote
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
          >
            Contact Us Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;