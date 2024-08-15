import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrerPage from "./components/RegistrerPage";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import productos from "./components/productos.json";

function App() {
  // const [token, setToken] = useState(false); descomentar este
  const [token, setToken] = useState(true);
  const [datos, setDatos] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [cart, setCart] = useState([]);
  const [totalCart, setTotal] = useState(0);

  const countTotalPrice = (price) => {
    // let nuevaCuenta = price

    setTotal(totalCart + price);
  };

  const add = (producto) => {
    let coincidencia = cart.findIndex((item) => item.id === producto.id);
    let new_product = {
      id: producto.id,
      name: producto.name,
      img: producto.img,
      count: 1,
      ingredients: producto.ingredients,
      price: producto.price,
    };
    // console.log(coincidencia);
    // console.log(producto.id);
    // console.log(cart[coincidencia]);
    // console.log(cart);

    if (coincidencia >= 0) {
      cart[coincidencia].count++;
      setCart([...cart]);
      countTotalPrice(producto.price);
      console.log("cart:", cart);
    } else {
      setCart([...cart, new_product]);
      countTotalPrice(producto.price);
    }
  };

  const subtract = (producto) => {
    let coincidencia = cart.findIndex((item) => item.id === producto.id);
    if (coincidencia >= 0) {
      cart[coincidencia].count--;
      countTotalPrice(-producto.price);
      if (cart[coincidencia].count <= 0) {
        countTotalPrice(-producto.price);
        cart.splice([coincidencia], 1);
      }
      setCart([...cart]);
    } else {
      alert("Ya no tienes este producto en el carrito");
    }
  };

  return (
    <div className="App">
      <Navbar token={token} setToken={setToken}></Navbar>
      {/* <Cart cart={cart} setCart={setCart}></Cart> */}
      <Cart
        cart={cart}
        totalCart={totalCart}
        productos={productos}
        add={add}
        subtract={subtract}
      ></Cart>
      {token ? null : (
        <h6>
          instrucciones: registra un mail y contraseña que quieras (y que sea
          funcional) y luego ponlo en la zona de logueo para cargar la app
        </h6>
      )}
      {token ? (
        <Home productos={productos} add={add} subtract={subtract}></Home>
      ) : (
        <div>
          <RegistrerPage
            datos={datos}
            setDatos={setDatos}
            setUser={setUser}
          ></RegistrerPage>
          <LoginPage user={user} setToken={setToken}></LoginPage>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
}

export default App;
