// import logo from './logo.svg';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPages';
import OwnerRegistrationPage from './pages/OwnerRegistrationPage';
import RegistrationPage from './pages/RegistrationPages';
import StudentsRegistrationPage from './pages/StudentsRegistrationPage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default function App(){
  return(
    <Switch>
      <Route exact path="/" component={LoginPage} />
        <Route exact path="/Registration" component={RegistrationPage} />
        <Route exact path ="/Registration/OwnerRegistrationPage" component ={OwnerRegistrationPage} />
        <Route exact path ="/Registration/StudentsRegistrationPage" component ={StudentsRegistrationPage} />
        <Redirect to="/" />
    </Switch>
  )
};
