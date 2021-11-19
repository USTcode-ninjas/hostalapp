// import logo from './logo.svg';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPages';
import AboutusPage from './pages/aboutusPage';
import OwnerRegistrationPage from './pages/OwnerRegistrationPage';
import RegistrationPage from './pages/RegistrationPages';
import StudentsRegistrationPage from './pages/StudentsRegistrationPage';
import OwnerPages from './pages/dashboardPage';
import AddOwnerdetails from './Owner/addOwnerdetails';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/adminDashboard';
import Profile from './Owner/profile';
import AdminProfile from './admin/adminProfile';
import StudentDetails from './admin/studentDetails';
import OwnerDetails from './admin/ownerDetails';
import OwnerDetail from './admin/ownerDetail';
import Home from './action/home';
import Homepage from './components/Homepage/Homepage';
import About from './components/Aboutpage/About';
import Contact from './components/Contactpage/Contact';
import Register from './components/Signup/Register';
import Profile1 from './student/profile1';
import Dashboard from './student/Dashboard';

export default function App(){
  return(
    <Switch>
      {/* <Route exact path="/" component={LoginPage} /> */}
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Register" component={Register} />

        <Route exact path="/Registration" component={RegistrationPage} />
        <Route exact path="/OwnerPages" component={OwnerPages} />
        <Route exact path="/AdminDashboard" component={AdminDashboard} />
        <Route exact path="/StudentDashboard" component={StudentDashboard} />
        <Route exact path="/OwnerPages/AddOwnerdetails" component={AddOwnerdetails} />
        <Route exact path="/OwnerPages/Profile" component={Profile} />
        <Route exact path="/StudentDashboard/Profile1" component={Profile1} />
        <Route exact path="/StudentDashboard/Dashboard" component={Dashboard} />

        <Route exact path="/AboutusPage" component={AboutusPage} />
        <Route exact path="/AdminDashboard/AdminProfile" component={AdminProfile} />
        <Route exact path="/AdminDashboard/StudentDetails" component={StudentDetails} />
        <Route exact path="/AdminDashboard/OwnerDetails" component={OwnerDetails} />
        <Route exact path="/AdminDashboard/OwnerDetail" component={OwnerDetail} />

        <Route exact path ="/Registration/OwnerRegistrationPage" component ={OwnerRegistrationPage} />
        <Route exact path ="/Registration/StudentsRegistrationPage" component ={StudentsRegistrationPage} />
        <Redirect to="/" />
    </Switch>
  )
};