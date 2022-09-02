import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/Home';
import About from './Container/About/About';
import Appointment from './Container/Appointment/Appointment';
import Contact from './Container/Contact/Contact';
import Departments from './Container/Deprtments/Departments'
import Doctors from './Container/Doctors/Doctors';
import { Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Auth from './Container/auth/Auth';

function App() {
  return (
    <>
      <Header/>        
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Departments"} component={Departments} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/Doctors"} component={Doctors} />
        <Route exact path={"/Contact"} component={Contact} />
        <Route exact path={"/Appointment"} component={Appointment} />
        <Route exact path={"/auth"} component={Auth}  />
      </Switch>
      <Footer/>    
    </>
  );
}

export default App;