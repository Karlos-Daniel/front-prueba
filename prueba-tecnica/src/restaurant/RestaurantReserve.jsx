import axios from "axios";
import { useEffect, useState } from "react";
import {ListRestaurantes } from "./componentsRestaurante/ListRestaurantes";
import { List } from "./componentsRestaurante/List";


export const RestaurantReserve = () => {
  const mesas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  const [restaurantes, setRestaurantes] = useState([])

  useEffect(() => {
    
    axios.get(`${import.meta.env.VITE_APP_BASEURL}/restaurantes`,{
      headers:{token:localStorage.getItem('token')}
    }).then((response)=>{
      
      setRestaurantes(response.data.data);
    })

  }, [])
  return (
    <div>
      <h2>Reservar restaurante</h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
        }}
      >
        <input name='NombreRestaurante' placeholder='Nombre Reserva' />
        <List
          value={mesas}
        />

        <input name='fecha' type="date"placeholder='fecha' />

        <ListRestaurantes
          value={restaurantes}
        
        />
        
        <button>Guardar</button>
      </form>
    </div>
  );
};
