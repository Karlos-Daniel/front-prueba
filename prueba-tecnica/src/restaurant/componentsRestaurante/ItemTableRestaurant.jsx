import React from 'react'

export const ItemTableRestaurant = ({restaurant}) =>( 
 

    
    restaurant&&restaurant.map(res=>{
      return (<tr key={res.uid}>
                  <td>{res.nombreRestaurante}</td>
                  <td>{res.descripcion}</td>
                  <td>{res.direccion}</td>
                  <td>{res.ciudad}</td>
                  <td>{res.imgRestaurante}</td>
              </tr>)
            })
)
    
  

