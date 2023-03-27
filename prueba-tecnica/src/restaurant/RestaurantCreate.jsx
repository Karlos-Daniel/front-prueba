import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { enqueueSnackbar, closeSnackbar, useSnackbar } from "notistack";
export const RestaurantCreate = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [inputData, setInputData] = useState({
    nombreRestaurante: "",
    descripcion: "",
    direccion: "",
    ciudad: "",
    archivo: undefined,
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in inputData) {
      if (Object.hasOwnProperty.call(inputData, key)) {
        formData.append(key, inputData[key]);
      }
    }

    axios
      .post(`${import.meta.env.VITE_APP_BASEURL}/restaurante`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        
        enqueueSnackbar(`El restaurante: ${response.data.nombreRestaurante}, se creo con exito`,

        {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        })
        navigate("/restaurants", { replace: true });
      })
      .catch((response) => {
        
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
      <h2>Crear restaurante</h2>
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
    </div>
  );
};
