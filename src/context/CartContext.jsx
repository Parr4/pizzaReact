import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { handleSubmit, email, setEmail, password, setPassword, token, user } = useContext(UserContext);

  const [cart, setCart] = useState([]);

  const [totalCart, setTotal] = useState(0);

  const countTotalPrice = (price) => {
    // let nuevaCuenta = price

    setTotal(totalCart + price);
  };


  
const sendCart = async () => {
  const token = localStorage.getItem("token");
    
  try{ 
    const response = await fetch("http://localhost:5000/api/checkouts", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify({
    cart: cart,
    }
    ),
 })
 .then((response) =>  {response.ok ?  (setCart([]), setTotal(0)) : null})
 const data = await response.json();

 alert(data?.error || data.message); }
 catch(error){}}
  // const data = await response.json()


//  alert(data?.error || "Usuario Registrado");
 





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
    <CartContext.Provider value={{ sendCart, cart, setCart, add, subtract, totalCart, setTotal }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider