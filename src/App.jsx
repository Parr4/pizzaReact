
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrerPage from './components/RegistrerPage';
import { useState } from 'react';
import LoginPage from './components/LoginPage';


function App() {
  const [token, setToken] = useState(false);
  const [datos, setDatos] = useState({
    email: "",
    password: "",
    confirm_password: "",
});
  const [user, setUser] = useState({
    email: "",
    password: "",
});

  return (
    <div className="App">
    <Navbar token={token} setToken={setToken}></Navbar>
    {
      token ? null : <h6>instrucciones: registra un mail y contraseña que quieras (y que sea funcional) y luego ponlo en la zona de logueo para cargar la app</h6>
    }
    {
      token ? <Home></Home> : 
      <div>
      <RegistrerPage datos={datos} setDatos={setDatos} setUser={setUser}></RegistrerPage>
      <LoginPage user={user} setToken={setToken}></LoginPage>
      </div>
    }
    
    

    <Footer></Footer>
    </div>
  );
}

export default App;
