import { useEffect } from "react";

export const RestaurantCreate = () => {
  
  
  return (
    <div>
      <h2>Crear restaurante</h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
        }}
      >
        <input name='nombreCiudad' placeholder='Nombre Restaurante' />
        <input name='descripcion' placeholder='Descripción' />
        <input name='direccion' placeholder='Dirección' />
        <input name='ciudad' placeholder='Ciudad' />
        <input name='archivo' type="file" placeholder='URL foto del restaurante' />

        <button>Guardar</button>
      </form>
    </div>
  );
};
