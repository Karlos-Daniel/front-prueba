import { useEffect } from "react";
import { List } from "./componentsRestaurante/List";

export const RestaurantReserve = () => {
  
 
  const mesas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  const restaurantes = ['res 1', 'res 2']
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
        <List
          value={restaurantes}
        
        />
        
        <button>Guardar</button>
      </form>
    </div>
  );
};
