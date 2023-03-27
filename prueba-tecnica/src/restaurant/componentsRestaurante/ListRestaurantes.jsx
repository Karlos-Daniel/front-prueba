import React from 'react'

export const ListRestaurantes = ({value=[]}) => {
  return (
    <>
    
    <select   
        className="form-select" aria-label="Default select example">
            {
                value.map(e=>{
                    return <option key={e.uid} value={e.uid}>{e.ciudad} | {e.nombreRestaurante} | {e.direccion}</option>
                })
            }
    </select>

    </>
  )
}
