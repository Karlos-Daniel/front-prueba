import React from 'react'

export const ListRestaurantes = ({value=[],id,set}) => {

  const setId = (value)=>{
    set(value)
}

  return (
    <>
    
    <select   
        className="form-select" aria-label="Default select example" value={id} onChange={(e)=>{setId(e.target.value)}}>
            {
                value.map(e=>{
                    return <option key={e.uid} value={e.uid}>{e.ciudad} | {e.nombreRestaurante} | {e.direccion}</option>
                })
            }
    </select>

    </>
  )
}
