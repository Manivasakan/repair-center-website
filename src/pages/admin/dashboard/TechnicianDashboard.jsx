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
  Chip,
  Button,
  LinearProgress,
  IconButton
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Build as BuildIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  PersonAdd as PersonAddIcon
} from '@mui/icons-material';
import AdminLayout from '../../components/layout/admin/AdminLayout';

function TechnicianDashboard() {
  // Mock data
  const queueStats = {
    assigned: 7,
    urgent: 2,
    completed: 5,
    target: 8
  };

  const assignedServices = [
    {
      id: 'SRV012',
      issue: 'Water Damage',
      device: 'iPhone 13',
      dueDate: 'Today',
      customer: 'Sarah Lee',
      priority: 'urgent',
      status: 'START WORK',
      estimatedHours: 2
    },
    {
      id: 'SRV015',
      issue: 'Screen Crack',
      device: 'Samsung S21',
      dueDate: 'Tomorrow',
      customer: 'Mike Chen',
      priority: 'normal',
      status: 'START WORK',
      estimatedHours: 1
    },
    {
      id: 'SRV018',
      issue: 'Battery Issue',
      device: 'MacBook Pro',
      dueDate: 'Wed',
      customer: 'Lisa Park',
      priority: 'normal',
      status: 'START WORK',
      estimatedHours: 3
    }
  ];

  const inProgressService = {
    id: 'SRV009',
    task: 'Software Install',
    device: 'Dell Laptop',
    startedTime: '2h',
    progress: 65,
    actions: ['UPDATE STATUS', 'CONTACT CUSTOMER', 'VIEW']
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'error';
      case 'high': return 'warning';
      default: return 'default';
    }
  };

  const getPriorityIcon = (priority) => {
    return priority === 'urgent' ? <WarningIcon /> : <AssignmentIcon />;
  };

  const handleStartWork = (serviceId) => {
    console.log('Start work on:', serviceId);
  };

  const handleViewAll = () => {
    console.log('View all assigned services');
  };

  const handleSelfAssign = () => {
    console.log('Self assign service');
  };

  const handleAction = (action) => {
    console.log('Action:', action);
  };

  return (
    <AdminLayout>
      <Box>
        {/* Page Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            🔧 Technician Dashboard - Alex Wilson
          </Typography>
          <Typography variant="body2" color="text.secondary">
            📅 Today: Mon
          </Typography>
        </Box>

        {/* Queue Stats */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', py: 2 }}>
              <CardContent>
                <AssignmentIcon sx={{ fontSize: 30, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  📋 MY QUEUE
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  {queueStats.assigned}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Assigned
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', py: 2 }}>
              <CardContent>
                <WarningIcon sx={{ fontSize: 30, color: 'error.main', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  🚨 URGENT
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'error.main' }}>
                  {queueStats.urgent}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  High Priority
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', py: 2 }}>
              <CardContent>
                <CheckCircleIcon sx={{ fontSize: 30, color: 'success.main', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  ✅ TODAY'S TARGET
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                  {queueStats.completed} / {queueStats.target}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Completed
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', py: 2 }}>
              <CardContent>
                <Button
                  variant="contained"
                  startIcon={<PersonAddIcon />}
                  onClick={handleSelfAssign}
                  sx={{ mb: 1 }}
                >
                  SELF ASSIGN
                </Button>
                <Typography variant="body2" color="text.secondary">
                  Pick from queue
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* My Assigned Services */}
        <Paper sx={{ mb: 4 }}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              🔧 MY ASSIGNED SERVICES
            </Typography>
            
            <List>
              {assignedServices.map((service, index) => (
                <ListItem
                  key={service.id}
                  sx={{
                    borderBottom: index < assignedServices.length - 1 ? 1 : 0,
                    borderColor: 'divider',
                    px: 0,
                    flexDirection: 'column',
                    alignItems: 'stretch'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 1 }}>
                    {getPriorityIcon(service.priority)}
                    <Typography variant="body1" sx={{ ml: 1, flexGrow: 1 }}>
                      <strong>{service.id}</strong> | {service.issue} | {service.device} | Due: {service.dueDate}
                    </Typography>
                    <Chip 
                      label={service.priority.toUpperCase()} 
                      color={getPriorityColor(service.priority)} 
                      size="small" 
                    />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Typography variant="body2" color="text.secondary">
                      Customer: {service.customer} | Est: {service.estimatedHours} hours
                    </Typography>
                    <Button 
                      variant="contained" 
                      size="small"
                      onClick={() => handleStartWork(service.id)}
                    >
                      [{service.status}]
                    </Button>
                  </Box>
                </ListItem>
              ))}
            </List>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button variant="outlined" onClick={handleViewAll}>
                [VIEW ALL]
              </Button>
              <Button variant="outlined" onClick={handleSelfAssign}>
                [SELF ASSIGN]
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* In Progress */}
        <Paper>
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              ⚡ IN PROGRESS
            </Typography>
            
            <Card sx={{ mb: 2, bgcolor: 'action.hover' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {inProgressService.id} | {inProgressService.task} | {inProgressService.device}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Started: {inProgressService.startedTime}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>
                    {inProgressService.progress}%
                  </Typography>
                </Box>
                
                <LinearProgress 
                  variant="determinate" 
                  value={inProgressService.progress} 
                  sx={{ mb: 2, height: 8, borderRadius: 4 }}
                />
                
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {inProgressService.actions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      size="small"
                      onClick={() => handleAction(action)}
                    >
                      [{action}]
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Paper>
      </Box>
    </AdminLayout>
  );
}

export default TechnicianDashboard;