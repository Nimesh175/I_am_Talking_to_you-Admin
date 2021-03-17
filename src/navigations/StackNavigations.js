import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
 
import LoginScreen from '../screens/AdminLoginScreen';
import DashboardScreen from '../screens/AdminDashboardScreen';
import ManageUserScreen from '../screens/AdminManageUserScreen';
import ManageAppScreen from '../screens/AdminManageAppScreen';
import NotificationHistoryScreen from '../screens/AdminNotificationHistoryScreen';
import AddCategoryScreen from '../screens/AdminAddCategoryScreen';
import ManageSubcriptionPlanScreen from '../screens/AdminManageSubcriptionPlanScreen';
import ManageRatingAndReviewScreen from '../screens/AdminManageRatingAndReviewScreen';
import ManageStaticPageScreen from '../screens/AdminManageStaticPageScreen';
import ManagePushNotificationScreen from '../screens/AdminManagePushNotificationScreen';


const StackNavigations = () => (
    <Router>
        <Stack key="rootStacks">
          <Scene key="loginScreen" component={LoginScreen} hideNavBar={true} /> 
          <Scene key="dashboardScreen" component={DashboardScreen} hideNavBar={true} /> 
          <Scene key="manageUserScreen" component={ManageUserScreen} hideNavBar={true} /> 
          <Scene key="manageAppScreen" component={ManageAppScreen} hideNavBar={true}  /> 
          <Scene key="notificationHistoryScreen" component={NotificationHistoryScreen} hideNavBar={true}  /> 
          <Scene key="addCategoryScreen" component={AddCategoryScreen} hideNavBar={true}      /> 
          <Scene key="manageSubcriptionPlanScreen" component={ManageSubcriptionPlanScreen} hideNavBar={true}    /> 
          <Scene key="manageRatingAndReviewScreen" component={ManageRatingAndReviewScreen} hideNavBar={true}   /> 
          <Scene key="manageStaticPageScreen" component={ManageStaticPageScreen} hideNavBar={true}   /> 
          <Scene key="managePushNotificationScreen" component={ManagePushNotificationScreen} hideNavBar={true} initial={true}  /> 
        
        </Stack>
    </Router>
);

export default StackNavigations
