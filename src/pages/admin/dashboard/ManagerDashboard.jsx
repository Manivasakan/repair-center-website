import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert
} from '@mui/material';
import {
  Build as BuildIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
  Warning as WarningIcon,
  Assessment as AssessmentIcon
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import AdminLayout from '../../components/layout/admin/AdminLayout';

function ManagerDashboard() {
  // Mock data
  const weeklyStats = {
    services: 156,
    staff: { active: 12, offline: 2 },
    revenue: '₹2,45,600',
    csat: '4.7/5'
  };

  const performanceData = [
    { day: 'Mon', services: 20 },
    { day: 'Tue', services: 25 },
    { day: 'Wed', services: 30 },
    { day: 'Thu', services: 28 },
    { day: 'Fri', services: 35 },
    { day: 'Sat', services: 18 },
    { day: 'Sun', services: 0 }
  ];

  const alerts = [
    '• 3 Overdue Services',
    '• 2 Delayed Quotations', 
    '• 1 Customer Complaint'
  ];

  const staffPerformance = [
    { name: 'Alex Wilson', efficiency: '85% (↑5%)', rating: 4.8 },
    { name: 'Sarah Khan', efficiency: '92% (↑2%)', rating: 4.9 },
    { name: 'Mike Davis', efficiency: '78% (↓3%)', rating: 4.5 },
    { name: 'Lisa Chen', efficiency: '88% (→)', rating: 4.7 }
  ];

  const handleViewAlerts = () => {
    console.log('View all alerts');
  };

  const handleViewReport = () => {
    console.log('View detailed report');
  };

  return (
    <AdminLayout>
      <Box>
        {/* Page Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            📊 Manager Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            📅 This Week
          </Typography>
        </Box>

        {/* Top Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', py: 3, background: 'linear-gradient(135deg, #1976d2, #42a5f5)', color: 'white' }}>
              <CardContent>
                <BuildIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  📱 SERVICES
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                  {weeklyStats.services}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  This Week
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', py: 3, background: 'linear-gradient(135deg, #2e7d32, #66bb6a)', color: 'white' }}>
              <CardContent>
                <PeopleIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  👥 STAFF
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                  {weeklyStats.staff.active}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {weeklyStats.staff.active} Active, {weeklyStats.staff.offline} Offline
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', py: 3, background: 'linear-gradient(135deg, #0288d1, #29b6f6)', color: 'white' }}>
              <CardContent>
                <TrendingUpIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  💰 REVENUE
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                  {weeklyStats.revenue}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  This Week
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', py: 3, background: 'linear-gradient(135deg, #ed6c02, #ffb74d)', color: 'white' }}>
              <CardContent>
                <StarIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  ⭐ CSAT
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                  {weeklyStats.csat}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Rating
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Service Performance Chart */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
            📈 SERVICE PERFORMANCE CHART
          </Typography>
          
          <Box sx={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="services" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Paper>

        {/* Bottom Section */}
        <Grid container spacing={3}>
          {/* Alerts & Issues */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '300px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <WarningIcon sx={{ color: 'warning.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  ⚠️ ALERTS & ISSUES
                </Typography>
              </Box>
              
              <List>
                {alerts.map((alert, index) => (
                  <ListItem key={index} sx={{ py: 1, px: 0 }}>
                    <ListItemText 
                      primary={alert}
                      sx={{ 
                        '& .MuiListItemText-primary': { 
                          color: 'error.main',
                          fontWeight: 'medium'
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              
              <Box sx={{ mt: 'auto', pt: 3 }}>
                <Button variant="outlined" onClick={handleViewAlerts} fullWidth>
                  [VIEW ALL ALERTS]
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Staff Performance */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '300px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AssessmentIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  👥 STAFF PERFORMANCE
                </Typography>
              </Box>
              
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Efficiency</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Rating</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {staffPerformance.map((staff, index) => (
                      <TableRow key={index}>
                        <TableCell>{staff.name}</TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                            {staff.efficiency}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <StarIcon sx={{ fontSize: 16, color: 'warning.main', mr: 0.5 }} />
                            <Typography variant="body2">{staff.rating}</Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              
              <Box sx={{ mt: 2 }}>
                <Button variant="outlined" onClick={handleViewReport} fullWidth>
                  [VIEW DETAILED REPORT]
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
}

export default ManagerDashboard;