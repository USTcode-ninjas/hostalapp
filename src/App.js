import Header from "./components/Homepage/Header";
import './App.css'
import Section from "./components/Homepage/Section";
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import About from "./components/Aboutpage/About";
import Contact from "./components/Contactpage/Contact";


import Register from "./components/Signup/Register";

function App() {
  return (
<Switch>
  <Route exact path="/" component={Homepage} />
  <Route exact path="/About" component={About} />
  <Route exact path="/Contact" component={Contact} />
  <Route exact path="/Register" component={Register} />

  
</Switch>
  );
}

export default App;
