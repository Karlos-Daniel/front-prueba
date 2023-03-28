import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { enqueueSnackbar, closeSnackbar, useSnackbar } from "notistack";

export const EditRestaurantes = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const location = useLocation();

    const [input, setInputData] = useState({
      nombreRestaurante: location.state ? location.state.nombreRestaurante : '',
      descripcion: location.state ? location.state.descripcion : '',
      direccion: location.state ? location.state.direccion : '',
      ciudad: location.state ? location.state.ciudad : '',
      archivo: undefined
    })

    console.log(input.nombreRestaurante);

    const handleOnPut = (e)=>{
      e.preventDefault();

      const formData = new FormData();
      for (const key in input) {
        if (Object.hasOwnProperty.call(input, key)) {
          formData.append(key, input[key]);
        }
      }

     
  
      axios
        .put(`${import.meta.env.VITE_APP_BASEURL}/restaurante/${location.state.uid}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            token: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          enqueueSnackbar(`El restaurante: ${input.nombreRestaurante} , se actualizo con exito`,
  
          {
            variant: "success",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          })
          navigate("/restaurants", { replace: true });
        })
        .catch((response) => {
          console.log(response.response.data.data);
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

    }

  return (
    <>
<h2>Actualizar Restaurante</h2>
<form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
        }}
      >
        <input
          name="nombreRestaurante"
          value={input.nombreRestaurante}
          onChange={(e) =>
            setInputData({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
          placeholder="Nombre Restaurante"
          type="text"
        />

        <input
          name="descripcion"
          placeholder="Descripción"
          type="text"
          value={input.descripcion}
          onChange={(e) =>
            setInputData({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />

        <input
          name="direccion"
          placeholder="Dirección"
          type="text"
          value={input.direccion}
          onChange={(e) =>
            setInputData({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />

        <input
          name="ciudad"
          placeholder="Ciudad"
          type="text"
          value={input.ciudad}
          onChange={(e) =>
            setInputData({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          name="archivo"
          placeholder="URL foto del restaurante"
          type="file"
          onChange={(e) =>
            setInputData({
              ...input,
              [e.target.name]: e.target.files[0],
            })
          }
        />

        <button onClick={(e)=>handleOnPut(e)} >Guardar</button>
      </form>
    
    </>
  )
}
