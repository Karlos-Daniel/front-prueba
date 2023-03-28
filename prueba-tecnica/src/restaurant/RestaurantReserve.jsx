import axios from "axios";
import { useEffect, useState } from "react";
import {ListRestaurantes } from "./componentsRestaurante/ListRestaurantes";

import { useNavigate } from "react-router-dom";
import { List } from "./componentsRestaurante/List";
import { enqueueSnackbar } from "notistack";


export const RestaurantReserve = () => {
  const mesas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  const [mesa, setMesa] = useState(mesas[0])

  const [restaurantes, setRestaurantes] = useState([])

  const [restauranteId, setRestauranteId] = useState('')

  useEffect(() => {
    
    axios.get(`${import.meta.env.VITE_APP_BASEURL}/restaurantes`,{
      headers:{token:localStorage.getItem('token')}
    }).then((response)=>{
      
      setRestaurantes(response.data.data);
      setRestauranteId(response.data.data[0].uid)
      
    })
    
  }, [])
 
  const [inputData, setInputData] = useState({
    nombreReserva: '',
    mesa: 1,
    fecha:Date,
    restaurante:restauranteId
  });

  useEffect(() => {
    
    setInputData({
      ...inputData,
      restaurante:restauranteId,
      mesa:mesa
    })
    
  }, [restauranteId,mesa])


  const navigate = useNavigate()
  
  const handleSumbit = (e) => {
    e.preventDefault();
    
    
     axios
       .post(`${import.meta.env.VITE_APP_BASEURL}/reservas`, inputData,{
        headers:{token:localStorage.getItem('token')}
       })
       .then((response) => {
        console.log(response);
        enqueueSnackbar(`El restaurante: ${response.data.nombreRestaurante}, se creo con exito`,

        {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        })
        navigate("/reserves", { replace: true });
       }).catch((response)=>{
        console.log(response);
        response.response.data.errores.forEach((e) => {
          enqueueSnackbar(
            `El ${e.param} tiene el siguiente | error: ${e.msg}`,
            {
              variant: "error",
              anchorOrigin: { vertical: "top", horizontal: "right" },
            }
          );
        });
       });
  };

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
        <input name='nombreReserva'placeholder='Nombre Reserva'
              value={inputData.nombreReserva}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        [e.target.name]: e.target.value,
                      })
                    } />
        
         <List
         mesa={mesa}
         set={setMesa}
          value={mesas}
         />

        <input name='fecha' type="date"  placeholder='fecha'
         //value={inputData.fecha}
         onChange={(e) =>
           setInputData({
             ...inputData,
             [e.target.name]: e.target.value,
           })
         }/>

        <ListRestaurantes
          id={restauranteId}
          set={setRestauranteId}
          value={restaurantes}
        />
        
        <button onClick={handleSumbit}>Guardar</button>
      </form>
    </div>
  );
};
