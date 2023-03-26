import React from 'react'
import { ItemTableReservas} from "./componentsReservas/ItemTableReservas";


export const Reservas = () => {

    const reservas = [
        {
            "nombreReserva": "MESA CAMBIADA",
            "mesa": 11,
            "fecha": "03/24/2023",
            "restaurante": {
                "_id": "641e3fab7b8c35a4ab5a839b",
                "nombreRestaurante": "restaurante  3213"
            },
            "uid": "641e405242af705447c94251"
        }
    ]

  return (
    <>

<div className="table-responsive">
      <table className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Nombre Reserva</th>
            <th scope="col">mesa</th>
            <th scope="col">fecha</th>
            <th scope="col">nombreRestaurante</th>
            
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="d-flex-col ">

           {
            <ItemTableReservas
            reservas={reservas}
            />
          }
        </tbody>
      </table>
    </div>
    
    </>
  )
}
