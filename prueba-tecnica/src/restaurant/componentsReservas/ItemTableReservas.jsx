import React from "react";

export const ItemTableReservas = ({ reservas }) =>
reservas &&
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
            <button type="button" className="btn btn-danger">
              Eliminar
            </button>
          </div>
        </td>
      </tr>
    );
  });
