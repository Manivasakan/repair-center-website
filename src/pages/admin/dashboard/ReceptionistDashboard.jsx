import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Chip,
  IconButton,
  InputAdornment
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  Visibility as VisibilityIcon,
  Assessment as AssessmentIcon,
  MonetizationOn as MoneyIcon,
  Assignment as AssignmentIcon
} from '@mui/icons-material';
import AdminLayout from '../../components/layout/admin/AdminLayout';

function ReceptionistDashboard() {
  const [serviceCode, setServiceCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // Mock data
  const todaysCollections = [
    { id: 'SRV001', customer: 'John Smith', device: 'iPhone 12', status: 'Ready', amount: '₹2,500' },
    { id: 'SRV005', customer: 'Mary Johnson', device: 'MacBook', status: 'Ready', amount: '₹5,000' },
    { id: 'SRV009', customer: 'David Brown', device: 'Samsung', status: 'Ready', amount: '₹1,800' }
  ];

  const todaysStats = {
    intake: { count: 15, label: 'New Services' },
    pending: { count: 8, label: 'Awaiting' },
    revenue: { amount: '₹45,300', label: 'Collections' }
  };

  const handovers = {
    ready: 12,
    pending: 3
  };

  const handleNewService = () => {
    console.log('Create new service');
    // Navigate to new service creation page
  };

  const handleFindService = () => {
    console.log('Find service:', { serviceCode, mobileNumber });
    // Implement service search logic
  };

  const handleViewAll = () => {
    console.log('View all collections');
    // Navigate to collections page
  };

  return (
    <AdminLayout>
      <Box>
        {/* Page Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            📋 Receptionist Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            📅 Today: Mon
          </Typography>
        </Box>

        {/* Top Action Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* New Service */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '200px', border: 2, borderColor: 'primary.main' }}>
              <CardContent sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleNewService}
                  sx={{ mb: 2, py: 1.5 }}
                >
                  NEW SERVICE
                </Button>
                <Typography variant="body2" color="text.secondary">
                  [+ CREATE]
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Quick service creation
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Find Service */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '200px', border: 1, borderColor: 'divider' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SearchIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">FIND SERVICE</Typography>
                </Box>
                
                <TextField
                  fullWidth
                  label="Service Code"
                  value={serviceCode}
                  onChange={(e) => setServiceCode(e.target.value)}
                  size="small"
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton size="small">
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                
                <TextField
                  fullWidth
                  label="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={handleFindService}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Handovers */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '200px', border: 1, borderColor: 'divider' }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  📱 HANDOVERS
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1">
                    Ready: <strong>{handovers.ready}</strong>
                  </Typography>
                  <Typography variant="body1">
                    Pending: <strong>{handovers.pending}</strong>
                  </Typography>
                </Box>
                
                <Button variant="outlined" size="small" fullWidth>
                  [VIEW ALL]
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Today's Collections */}
        <Paper sx={{ mb: 4 }}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              📊 TODAY'S COLLECTIONS
            </Typography>
            
            <List>
              {todaysCollections.map((item, index) => (
                <ListItem
                  key={item.id}
                  sx={{
                    borderBottom: index < todaysCollections.length - 1 ? 1 : 0,
                    borderColor: 'divider',
                    px: 0
                  }}
                >
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body1">
                          {item.id} | {item.customer} | {item.device}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Chip label={item.status} color="success" size="small" />
                          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {item.amount}
                          </Typography>
                        </Box>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
            
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button variant="outlined" onClick={handleViewAll}>
                [VIEW ALL]
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* Bottom Stats */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', py: 3 }}>
              <CardContent>
                <AssignmentIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  📊 TODAY'S INTAKE
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  {todaysStats.intake.count}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {todaysStats.intake.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', py: 3 }}>
              <CardContent>
                <AssessmentIcon sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  📋 PENDING QUOTATIONS
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'warning.main' }}>
                  {todaysStats.pending.count}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {todaysStats.pending.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', py: 3 }}>
              <CardContent>
                <MoneyIcon sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  💰 TODAY'S REVENUE
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                  {todaysStats.revenue.amount}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {todaysStats.revenue.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
}

export default ReceptionistDashboard;