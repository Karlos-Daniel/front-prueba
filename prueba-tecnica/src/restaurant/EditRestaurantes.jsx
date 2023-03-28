import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'


export const EditRestaurantes = () => {

    const location = useLocation();

    const [input, setInputData] = useState({
        nombreRestaurante:location.state.nombreRestaurante,
        descripcion:location.state.descripcion,
        direccion:location.state.direccion,
        ciudad:location.state.ciudad,
        archivo:undefined
    })


  return (
    <>

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

        <button >Guardar</button>
      </form>
    
    </>
  )
}
