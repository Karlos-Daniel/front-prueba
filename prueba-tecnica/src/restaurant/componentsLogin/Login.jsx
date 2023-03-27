import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {  useUserStore } from "../store/userStore";
import axios from "axios";
export const Login = () => {

  const navigate = useNavigate()
  const useUser= useUserStore(state=>state.token)
  const setToken = useUserStore(state=>state.setToken)



  const [inputData, setInputData] = useState({
    correo: "",
    password: "",
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_APP_BASEURL}/login`, inputData)
      .then((e) => {
        setToken(e.data.token)
        navigate('/reserves',{replace:true})
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="">
            <div className="card px-5 py-5" id="form1">
              <div className="form-data">
                <div className="forms-inputs mb-4">
                  {" "}
                  <span>Email de Admin</span>{" "}
                  <input
                    name="correo"
                    value={inputData.correo}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    type="text"
                  />
                </div>
                <div
                  className="forms-inputs mb-4"
                  value={inputData.password}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  {" "}
                  <span>Password</span>{" "}
                  <input name="password" type="password" />
                </div>
                <div className="mb-3">
                  {" "}
                  <button className="btn btn-dark w-100" onClick={handleSumbit}>
                    Login
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
