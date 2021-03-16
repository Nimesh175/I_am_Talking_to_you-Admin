import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
 
import LoginScreen from '../screens/AdminLoginScreen';
import DashboardScreen from '../screens/AdminDashboardScreen';
import ManageUserScreen from '../screens/AdminManageUserScreen';
import ManageAppScreen from '../screens/AdminManageAppScreen';
import NotificationHistoryScreen from '../screens/NotificationHistoryScreen';


const StackNavigations = () => (
    <Router>
        <Stack key="rootStacks">
          <Scene key="loginScreen" component={LoginScreen} hideNavBar={true} /> 
          <Scene key="dashboardScreen" component={DashboardScreen} hideNavBar={true} /> 
          <Scene key="manageUserScreen" component={ManageUserScreen} hideNavBar={true} /> 
          <Scene key="manageAppScreen" component={ManageAppScreen} hideNavBar={true}  /> 
          <Scene key="notificationHistoryScreen" component={NotificationHistoryScreen} hideNavBar={true} initial={true} /> 
        
        </Stack>
    </Router>
);

export default StackNavigations
