import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { ItemTableReservas} from "./componentsReservas/ItemTableReservas";


export const Reservas = () => {



  const [reservas, setReservas] = useState([])

  useEffect(() => {
    
    axios.get(`${import.meta.env.VITE_APP_BASEURL}/reservas`,{
      headers:{token:localStorage.getItem('token')}
    }).then((response)=>{
      console.log(response.data.data);
      setReservas(response.data.data);
    })
  
    
  }, [])

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
