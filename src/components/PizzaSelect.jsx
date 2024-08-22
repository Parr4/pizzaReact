import React from "react";

export const PizzaSelect = ({ pizzaSelect }) => {
  return (
    <div className="container">
    <div className="card text-bg-light mb-3 ">
        
      <div class="row g-0 ">
        <div class="col-md-5">
          <img class="img-fluid rounded-start" src={pizzaSelect.img} />
        </div>
        
        <div className="col-md-7">
          <div className="card-body">
          <h4 className="card-title selectTitle">Pizza {pizzaSelect.name}</h4>
            <h6 className="card-text">Esta pizza incluye:</h6>
            <h6 className="text-body">
              {pizzaSelect.ingredients.map((segment, index) => (
                <>
                  {index > 0 && " - "}
                  {segment}
                </>
              ))}
            </h6>
            <p class="text-body">{pizzaSelect.desc}</p>
            <h5 className="card-text">Valor: ${pizzaSelect.price}</h5>
          </div>
        </div>
      </div>
      <p className=" card-text">
          <small class="text-body-secondary">
            Codigo id: {pizzaSelect.id}{" "}
          </small>
        </p>
    </div>

    </div>
    
  );
};
