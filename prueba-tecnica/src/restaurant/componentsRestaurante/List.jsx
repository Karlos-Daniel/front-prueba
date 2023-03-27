import React from 'react'

export const List = ({value=[],mesa,set}) => {

    const setMesa = (value)=>{
        set(Number(value))
    }

  return (
    <>

<select   
        className="form-select" aria-label="Default select example" value={mesa} onChange={(e)=>{setMesa(e.target.value)}}>
            {
                value.map(e=>{
                    return <option key={e} value={e}>{e}</option>
                })
            }
    </select>
    
    
    </>
  )
}
