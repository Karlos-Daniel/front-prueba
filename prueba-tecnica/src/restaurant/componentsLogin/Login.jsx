import React, { useEffect, useState } from "react";
import axios from "axios";
export const Login = () => {
  const [inputData, setInputData] = useState({
    correo: "",
    password: "",
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_APP_BASEURL}/login`, inputData)
      .then((e) => {
        console.log(e.data.token);
        localStorage.setItem("token",e.data.token);
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
