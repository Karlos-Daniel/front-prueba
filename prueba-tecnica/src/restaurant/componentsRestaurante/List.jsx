import React from 'react'

export const List = ({value=[]}) => {
  return (
    <>
    
    <select   
        className="form-select" aria-label="Default select example">
            {
                value.map(e=>{
                    return <option key={e} value="1">{e}</option>
                })
            }
    </select>

    </>
  )
}