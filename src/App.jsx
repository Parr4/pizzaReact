import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrerPage from "./pages/RegistrerPage";
import { useContext, useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { PizzaSelect } from "./components/PizzaSelect";
import { Navigate, Route, Routes } from "react-router-dom";

import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import CartProvider from "./context/CartContext";
import PizzaProvider from "./context/PizzaContext";
import UserProvider, { UserContext } from "./context/UserContext";

// import productos from "./components/productos.json";

function App() {
  const{token}= useContext(UserContext)

  return (
    <div className="App">
      <Navbar></Navbar>
      

      <Routes>

        <Route
          path="/"
          element={
            <Home/>

          }
        />
        <Route
          path="/cart"
          element={
            <Cart            />

          }
        />
        <Route
          path="/register"
          element={
            <RegistrerPage/>

          }
        />
        <Route
          path="/login"
          element={token ?
            <Navigate to="/profile"/> : <LoginPage/>
          }
        />
        
        <Route
          path="/pizza/:id"
          element={
            <PizzaSelect  />
          }
        />
        <Route
          path="/profile"
          element={token ?
            <Profile/> : <Navigate to="/login"/>
          }
        />

<Route
          path="*"
          element={
            <NotFound
            />
          }
        />


      </Routes>



      <Footer></Footer>

    </div>
  );
}

export default App;
