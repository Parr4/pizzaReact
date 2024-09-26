import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

export const PizzaSelect = () => {


  const {id} =useParams()
  const [pizza, setPizza] = useState({})
  const navigate = useNavigate()
  const getPizza = async()=>{
    const response = await fetch(`${import.meta.env.VITE_PIZZAURL}/${id}`)
    const result = await response.json()
    console.log(result)
    setPizza(result)

  }

  useEffect(() => {
    getPizza()
  }, [])
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
            {pizza.ingredients ? pizza.ingredients.map((segment, index) => (
                <>
                  {index > 0 && " - "}
                  {segment}
                </>
              )) : null}
              
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
