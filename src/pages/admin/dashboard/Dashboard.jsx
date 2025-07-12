import React from 'react';
import ReceptionistDashboard from './ReceptionistDashboard';
import TechnicianDashboard from './TechnicianDashboard';
import ManagerDashboard from './ManagerDashboard';

function Dashboard() {
  // In a real app, get user role from authentication context or API
  // For demo purposes, you can change this to test different dashboards
  const getUserRole = () => {
    // You can temporarily change this value to test different dashboards:
    // 'receptionist', 'technician', 'manager'
    return 'manager'; // Change this to test different roles
    
    // In production, get from auth context like:
    // const { user } = useAuth();
    // return user.role;
    
    // Or from localStorage/sessionStorage:
    // return localStorage.getItem('userRole');
  };

  const userRole = getUserRole();

  // Render appropriate dashboard based on user role
  switch (userRole) {
    case 'receptionist':
      return <ReceptionistDashboard />;
    case 'technician':
      return <TechnicianDashboard />;
    case 'manager':
      return <ManagerDashboard />;
    default:
      return <ManagerDashboard />; // Default to manager dashboard
  }
}

export default Dashboard;