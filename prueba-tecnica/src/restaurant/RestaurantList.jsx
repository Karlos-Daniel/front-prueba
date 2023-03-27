

import axios from "axios";
import { useEffect, useState } from "react";
import { ItemTableRestaurant } from "./componentsRestaurante/ItemTableRestaurant";

export const RestaurantList = ({restaruantes}) => {
  const [restaurantes, setRestaurantes] = useState([])

  useEffect(() => {
    
    axios.get(`${import.meta.env.VITE_APP_BASEURL}/restaurantes`,{
      headers:{token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDFjYTJjOGQ0NDA2MjQ4MDJkNDA4NjkiLCJpYXQiOjE2Nzk4NjkzNjIsImV4cCI6MTY3OTk1NTc2Mn0.iWi6536wu7hjLYsOvh8Kw6xik9X6r_RbZxfkK5X0VWM'}
    }).then((response)=>{
      console.log(response.data.data);
      setRestaurantes(response.data.data);
    })
  
    
  }, [])
  


//console.log(restaruantes);
  return <>

    <div className="table-responsive">
      <table className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Nombre restaurante</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Direccion</th>
            <th scope="col">ciudad</th>
            <th scope="col">Imagen</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="d-flex-col ">

           {
            <ItemTableRestaurant
            restaurant={restaurantes}
            />
          }
        </tbody>
      </table>
    </div>
    


  </>;
};
