import React from "react";
import  axios  from 'axios';
import { useNavigate } from "react-router-dom";
export const ItemTableReservas = ({ reservas,handleDelete }) =>{
  const navigate = useNavigate()
const goEdit =(uid,nombreReserva,mesa,fecha,ciudad,restauranteId,nombreRestaurante)=>{
  navigate('/editreserve', {
    state: {
      uid,
      nombreReserva,
      mesa,
      fecha,
      ciudad,
      restauranteId,
      nombreRestaurante
    }
  });
}
return (reservas &&
  reservas.map((res) => {
    let nombreRestaurante = res.restaurante.nombreRestaurante;
    let restauranteId = res.restaurante._id
    return (
      <tr key={res.uid} >
        <td>{res.nombreReserva}</td>
        <td>{res.mesa}</td>
        <td>{res.fecha}</td>
        <td>{nombreRestaurante}</td>
        
        <td>
          <div className="d-flex gap-4" style={{
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
          }}>
            <button type="button" className="btn btn-primary"onClick={(e)=>{goEdit(res.uid,res.nombreReserva,res.mesa,res.fecha,res.ciudad,restauranteId,nombreRestaurante)}}>
              Editar
            </button>
            <button type="button" className="btn btn-danger" onClick={(e)=>handleDelete(e,res.uid)}>
              Eliminar
            </button>
          </div>
        </td>
      </tr>
    );
  }));
}
