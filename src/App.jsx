
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
    <Navbar></Navbar>
    <Header></Header>
    <Home></Home>
    
    <Footer></Footer>
    </div>
  );
}

export default App;
