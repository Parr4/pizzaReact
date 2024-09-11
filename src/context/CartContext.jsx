import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {

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

    return(
    <CartContext.Provider value={{cart, setCart, add, subtract, totalCart, setTotal}}>
        {children}
    </CartContext.Provider>
    )
}
export default CartProvider