import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({children}) => {
    const [productos, setProductos] = useState([])

    const obtenerProductos = async () => {
      const res = await fetch("http://localhost:5000/api/pizzas");
      const data = await res.json();
      // let all_products = data.map((item) => item.name)
      setProductos(data)
    }
  
    useEffect(() => {
      obtenerProductos()
    }, [])
  
  
    const [pizzaSelect, setPizza] = useState(null)

return(
<PizzaContext.Provider value={{productos, pizzaSelect, setPizza}}>
{children}
</PizzaContext.Provider>
)
}
export default PizzaProvider