import React from "react";
import  axios  from 'axios';
export const ItemTableReservas = ({ reservas,handleDelete }) =>{

return (reservas &&
  reservas.map((res) => {
    return (
      <tr key={res.uid} >
        <td>{res.nombreReserva}</td>
        <td>{res.mesa}</td>
        <td>{res.fecha}</td>
        <td>{res.restaurante.nombreRestaurante}</td>
        
        <td>
          <div className="d-flex gap-4" style={{
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
          }}>
            <button type="button" className="btn btn-primary">
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
