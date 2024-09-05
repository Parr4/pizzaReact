import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';



export default function CardPizza({pizza ,  setPizza}) {
    const {add, subtract} = useContext(CartContext)

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
                <button onClick={() => subtract(pizza)} class="btn btn-danger"> - </button>
                <Link to='/pizza/p001'><button onClick={() => setPizza(pizza)} className="btn btn-primary">Ver más</button></Link>
                <button onClick={() => add(pizza)} class="btn btn-success"> + </button>

                </div>

            </div>
        </div>
    )
}
