import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { ItemTableReservas} from "./componentsReservas/ItemTableReservas";
import {  useUserStore } from "./store/userStore";

export const Reservas = () => {
  
  const [reservas, setReservas] = useState([])
  const getReservas = ()=>{
    
    axios.get(`${import.meta.env.VITE_APP_BASEURL}/reservas`,{
      headers:{token:localStorage.getItem('token')}
    }).then((response)=>{
      setReservas(response.data);
    })
    
  }
  
  useEffect(() => {
    getReservas()
  }, [])
  
  const handleDelete = (e,uid)=>{
    e.preventDefault();
    axios.delete(`${import.meta.env.VITE_APP_BASEURL}/reservas/${uid}`,{
      headers:{token:localStorage.getItem('token')}
    }).then((response)=>{
      getReservas()
    })
  }

  

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
            handleDelete={handleDelete}
            reservas={reservas}
            />
          }

        </tbody>
      </table>
    </div>
    
    </>
  )
}
