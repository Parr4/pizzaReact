import React, { useContext, useState } from "react";
import productos from "../components/productos.json";
import { CartContext } from "../context/CartContext";

export const Cart = () => {

const { cart, add, subtract, totalCart } = useContext(CartContext)

  return (
    <div>
      <h2 className="listTitle">Carrito de compras</h2>
      
      {cart.map((producto, key) => (
        <div className="cartItem" key={key}>
          <div className="col-6 cartDisplay">
            <h5 className=" cartTitle">Pizza {producto.name}</h5>
            <h6 className="cartBody">
              {producto.ingredients.map((segment, index) => (
                <>
                  {index > 0 && " - "}
                  {segment}
                </>
              ))}
            </h6>
            <h6 className="cartBody">Precio: ${producto.price}</h6>
          </div>

          <div className="col-4 cartDisplay">
            <h5 className=" cartTitle">Cantidad: {producto.count}</h5>
            <div className="buttons cartBody" >
              <a onClick={() => subtract(producto)} class="btn btn-danger">
                {" "}
                -{" "}
              </a>
              <a onClick={() => add(producto)} class="btn btn-success">
                {" "}
                +{" "}
              </a>
            </div>
            <h6 className="cartBody">Subtotal: ${producto.price*producto.count}</h6>
            {/* <h6 className="cartBody">Subtotal: ${producto.subtotal}</h6> */}
          </div>

          <img className="col-2 " src={producto.img} alt="" />
        </div>
      ))}

      <h2 className="listTotal">Total a pagar: ${totalCart}</h2>
    </div>
  );
};
