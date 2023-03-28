import React from 'react'
import { List } from './componentsRestaurante/List'
import { ListRestaurantes } from './componentsRestaurante/ListRestaurantes'

export const EditRestaurantes = ({data}) => {
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
          value={inputData.nombreRestaurante}
          onChange={(e) =>
            setInputData({
              ...inputData,
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
          value={inputData.descripcion}
          onChange={(e) =>
            setInputData({
              ...inputData,
              [e.target.name]: e.target.value,
            })
          }
        />

        <input
          name="direccion"
          placeholder="Dirección"
          type="text"
          value={inputData.direccion}
          onChange={(e) =>
            setInputData({
              ...inputData,
              [e.target.name]: e.target.value,
            })
          }
        />

        <input
          name="ciudad"
          placeholder="Ciudad"
          type="text"
          value={inputData.ciudad}
          onChange={(e) =>
            setInputData({
              ...inputData,
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
              ...inputData,
              [e.target.name]: e.target.files[0],
            })
          }
        />

        <button onClick={handleSumbit}>Guardar</button>
      </form>
    
    </>
  )
}
