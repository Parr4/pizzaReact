import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardPizza(pizza) {

    return (
        <div class="card col-3">
            <img src={pizza.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Pizza {pizza.name}</h5>

                <p>
                    {pizza.ingredients.map((segment, index) => (
                        <>
                            {index > 0 && " - "}
                            {segment}
                        </>
                    ))}
                </p>
                <h6>${pizza.price.toLocaleString()}</h6>
                <div className='buttons'>
                    <a href="#" class="btn btn-primary">Ver más</a>
                    <a href="#" class="btn btn-secondary">Añadir </a>
                </div>

            </div>
        </div>
    )
}
