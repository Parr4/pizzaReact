import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrerPage from "./pages/RegistrerPage";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { PizzaSelect } from "./components/PizzaSelect";
import { Route, Routes } from "react-router-dom";
import { PizzaPage } from "./pages/PizzaPage";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import CartProvider from "./context/CartContext";
import PizzaProvider from "./context/PizzaContext";
// import productos from "./components/productos.json";

function App() {
  


  // const [token, setToken] = useState(false); descomentar este
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

  // const [cart, setCart] = useState([]);
  // const [totalCart, setTotal] = useState(0);

  // const countTotalPrice = (price) => {
  //   // let nuevaCuenta = price

  //   setTotal(totalCart + price);
  // };

  // const add = (producto) => {
  //   let coincidencia = cart.findIndex((item) => item.id === producto.id);
  //   let new_product = {
  //     id: producto.id,
  //     name: producto.name,
  //     img: producto.img,
  //     count: 1,
  //     ingredients: producto.ingredients,
  //     price: producto.price,
  //   };
    // console.log(coincidencia);
    // console.log(producto.id);
    // console.log(cart[coincidencia]);
    // console.log(cart);

    

  // const subtract = (producto) => {
  //   let coincidencia = cart.findIndex((item) => item.id === producto.id);
  //   if (coincidencia >= 0) {
  //     cart[coincidencia].count--;
  //     countTotalPrice(-producto.price);
  //     if (cart[coincidencia].count <= 0) {
  //       countTotalPrice(-producto.price);
  //       cart.splice([coincidencia], 1);
  //     }
  //     setCart([...cart]);
  //   } else {
  //     alert("Ya no tienes este producto en el carrito");
  //   }
  // };

  return (
    <div className="App">
    <PizzaProvider>
    <CartProvider>
      <Navbar token={token} setToken={setToken}></Navbar>
      {/* {
        pizzaSelect ? <PizzaSelect pizzaSelect={pizzaSelect}></PizzaSelect> : null
      } */}

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
            <RegistrerPage
              datos={datos}
              setDatos={setDatos}
              setUser={setUser}
              token={token}
            />

          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              user={user}
              token={token}
              setToken={setToken} />
          }
        />
        <Route
          path="/pizza/p001"
          element={
            <PizzaSelect  />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              user={user}
              token={token}
              setToken={setToken}
            />
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
      </CartProvider>
      </PizzaProvider>
    </div>
  );
}

export default App;
