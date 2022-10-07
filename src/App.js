import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/Home';
// import About from './Container/';
import Appointment from './Container/Appointment/Appointment';
import Contact from './Container/Contact/Contact';
import Departments from './Container/Deprtments/Departments'
import Doctors from './Container/Doctors/Doctors';
import Medicines from './Container/Medicines/Medicines';
import { Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Auth from './Container/auth/Auth';
import Layout from './Adminpenal/component/Layout';
// import Medicineadmin from './Adminpenal/container/Medicineadmin';
// import Doctoradmin from './Adminpenal/container/Doctoradmin';
// import Patientadmin from './Adminpenal/container/Patientadmin';

function App() {
  return (
    <>
      <Header/>        
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Departments"} component={Departments} />
        {/* <Route exact path={"/About"} component={About} /> */}
        <Route exact path={"/Doctors"} component={Doctors} />
        <Route exact path={"/Medicines"} component={Medicines} />
        <Route exact path={"/Contact"} component={Contact} />
        <Route exact path={"/Appointment"} component={Appointment} />
        <Route exact path={"/auth"} component={Auth}  />
      </Switch>
      <Footer/>    
    </>
    // <Layout>
    //   <Switch>
    //     <Route path={'/Medicineadmin'} exact component={Medicineadmin} />
    //     <Route path={'/Doctoradmin'} exact component={Doctoradmin} />
    //     <Route path={'/Patientadmin'} exact component={Patientadmin} />
    //   </Switch>
    // </Layout>
  );
}

export default App;