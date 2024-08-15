import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function CardPizza({pizza , add, subtract}) {
    

    return (
        <div class="card">
            <img src={pizza.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Pizza {pizza.name}</h5>

                <p>
                    {pizza.ingredients.map((segment, index) => (
                        <>  
                            
                            {index > 0 && " - "}
                            {segment }
                        </>
                    ))}
                </p>
                <h6>${pizza.price.toLocaleString()}</h6>
                <div className='buttons'>
                <a onClick={() => subtract(pizza)} class="btn btn-danger"> - </a>
                    <a onClick={() => add(pizza)} class="btn btn-success"> + </a>

                </div>

            </div>
        </div>
    )
}
