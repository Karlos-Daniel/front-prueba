

import axios from "axios";
import { useEffect, useState } from "react";
import { ItemTableRestaurant } from "./componentsRestaurante/ItemTableRestaurant";
import { enqueueSnackbar, closeSnackbar, useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
export const RestaurantList = ({restaruantes}) => {
  const navigate = useNavigate();

  const [restaurantes, setRestaurantes] = useState([])

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_APP_BASEURL}/restaurantes`,{
      headers:{token:localStorage.getItem('token')}
    }).then((response)=>{
      setRestaurantes(response.data.data);
    })

  }, [restaurantes])

  const handleDelete = (e,uid,nombre)=>{
    e.preventDefault();
    axios.delete(`${import.meta.env.VITE_APP_BASEURL}/restaurante/${uid}`,{
      headers:{token:localStorage.getItem('token')}
    }).then((response)=>{
      enqueueSnackbar(`El restaurante "${nombre}" se borro con exito`,

        {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        })
        navigate("/restaurants", { replace: true });
    })
  }
  


//console.log(restaruantes);
  return <>

    <div className="table-responsive">
      <table className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Nombre restaurante</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Direccion</th>
            <th scope="col">ciudad</th>
            <th scope="col">Imagen</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="d-flex-col ">

           {
            <ItemTableRestaurant
            handleDelete={handleDelete}
            restaurant={restaurantes}
            />
          }
        </tbody>
      </table>
    </div>
    


  </>;
};
