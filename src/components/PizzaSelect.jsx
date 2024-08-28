import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const PizzaSelect = ({ pizzaSelect }) => {
  const [pizza, setPizza] = useState({
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
    id: "p001",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    ingredients: [
      "mozzarella",
      "tomates",
      "jamón",
      "orégano"
    ],
    name: "napolitana",
    price: 5950
})
  return (
    
    <div className="container">
    <div className="card text-bg-light mb-3 ">
        
      <div class="row g-0 ">
        <div class="col-md-5">
          <img class="img-fluid rounded-start" src={pizza.img} />
        </div>
        
        <div className="col-md-7">
          <div className="card-body">
          <h4 className="card-title selectTitle">Pizza {pizza.name}</h4>
            <h6 className="card-text">Esta pizza incluye:</h6>
            <h6 className="text-body">
              {pizza.ingredients.map((segment, index) => (
                <>
                  {index > 0 && " - "}
                  {segment}
                </>
              ))}
            </h6>
            <p class="text-body">{pizza.desc}</p>
            <h5 className="card-text">Valor: ${pizza.price}</h5>
          </div>
        </div>
      </div>
      <p className=" card-text">
          <small class="text-body-secondary">
            Codigo id: {pizza.id}{" "}
          </small>
        </p>
    </div>

    </div>
    
  // <div className="divRegister">
  // <h2>
  // Selecciona tu pizza! haz click en "Ver mas de tus favoritas"
  // </h2>

  // <button className="buttonReg">
  // <Link to="/">Ir a ver</Link>
  // </button>

  // </div>
  // </>
  );
};
