import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginAsD from './Pages/LoginAsD';
import LoginAsP from './Pages/LoginAsP';
import Home from './Pages/Home';
import SignupAsD from './Pages/SignupAsD';
import About from './Pages/About';
import SignupAsP from './Pages/SignupAsP';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Doctordashboard from './Pages/doctor-routes/Doctordashboard';
import Privateroute from './components/Privateroute';

import Patientdashboard from './Pages/Patient-routes/Patientdashboard';
import PrivaterouteP from './components/PrivaterouteP';
import DoctorList from './components/Doctorlist';
import PatientApointments from './components/PatientApointmentsList';
import UpdateApo from './Pages/UpdateApointment';
import Payment from './components/Payment';


function App() {
  return (

      <BrowserRouter>
      <ToastContainer />
          <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/doctorslist" element={<DoctorList />} />

              

              <Route path="/loginasd" element={<LoginAsD />} />
              <Route path="/loginasp" element={<LoginAsP />} />

              <Route path="/signupasd" element={<SignupAsD />} />
              <Route path="/signupasp" element={<SignupAsP />} />

              <Route path="/about" element={<About/> } />


              <Route path='/doctor' element={<Privateroute/>} >
                <Route path='dashboard' element={<Doctordashboard/>} />
              </Route>

              <Route path='/patient' element={<PrivaterouteP/>} >
                <Route path='apointments' element={<PatientApointments/>} />
                <Route path='pdashboard' element={<Patientdashboard/>} />
                <Route path='update-apointment/:Aid' element={<UpdateApo/>} />
                <Route path="payment" element={<Payment/>} />
              </Route>
              

          </Routes>

      </BrowserRouter>

  );
}

export default App;
