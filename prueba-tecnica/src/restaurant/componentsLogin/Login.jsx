import React, { useEffect, useState } from 'react'

export const Login = () => {

const [inputData, setInputData] = useState({
    correo:'',
    password:''
})

const handleSumbit = (e)=>{
    e.preventDefault()
    localStorage.setItem('token',JSON.stringify(input))
}

useEffect(() => {
  


}, [handleSumbit])




  return (
    <>
    <div className="container mt-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-6">
            <div className="card px-5 py-5" id="form1">
                <div className="form-data">
                    <div className="forms-inputs mb-4"> <span>Email de Admin</span> <input name="correo"
                    value={inputData.correo} 
                    onChange={(e)=>setInputData({...inputData,
                                                [e.target.name]:e.target.value})} 
                    type="text"/>
                        
                    </div>
                    <div className="forms-inputs mb-4"> <span>Password</span> <input type="password"/>
                
                    </div>
                    <div className="mb-3"> <button  className="btn btn-dark w-100">Login</button> </div>
                </div>

            </div>
        </div>
    </div>
</div>

    
    </>
  )
}
