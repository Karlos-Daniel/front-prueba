import React from "react";
import { useNavigate } from "react-router-dom";
export const ItemTableRestaurant = ({ restaurant,handleDelete }) =>{
  const navigate = useNavigate()

  const goEdit =(uid,nombreRestaurante,descripcion,direccion,ciudad)=>{
    navigate('/editrestaurant', {
      state: {
        uid,
        nombreRestaurante,
        descripcion,
        direccion,
        ciudad
      }
    });
  }

  return(
  restaurant &&
  restaurant.map((res) => {
    return (
      <tr key={res.uid} >
        <td>{res.nombreRestaurante}</td>
        <td>{res.descripcion}</td>
        <td>{res.direccion}</td>
        <td>{res.ciudad}</td>
        <td>
          <img src={res.imgRestaurante} className="w-25 " alt="" />
        </td>
        <td>
          <div className="d-flex gap-4" style={{
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
          }}>
            <button type="button" className="btn btn-primary" onClick={(e)=>{goEdit(res.uid,res.nombreRestaurante,res.descripcion,res.direccion,res.ciudad)}}>
              Editar
            </button>
            <button type="button" className="btn btn-danger" onClick={(e)=>handleDelete(e,res.uid,res.nombreRestaurante)} >
              Eliminar
            </button>
          </div>
        </td>
      </tr>
    );
  }));}
