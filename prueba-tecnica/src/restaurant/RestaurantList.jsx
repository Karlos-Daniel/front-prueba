

import { ItemTableRestaurant } from "./componentsRestaurante/ItemTableRestaurant";

export const RestaurantList = ({restaruantes}) => {

  const restaurant =[
    {
			"nombreRestaurante": "nombreRestaurante PUT",
			"descripcion": "descripcion PUT ",
			"direccion": "direccion PUT22213",
			"ciudad": "ciudad PUT22231",
			"imgRestaurante": "https://res.cloudinary.com/djdxi88e0/image/upload/v1679703904/tvncwbquapr5s3fw4mx8.jpg",
			"uid": "641a8e637e724e9f1b50f612"
		},
		{
			"nombreRestaurante": "restaurante  3",
			"descripcion": "restaurante descripcion",
			"direccion": "restaurante direccion",
			"ciudad": "restaurante ciudad",
			"imgRestaurante": "https://res.cloudinary.com/djdxi88e0/image/upload/v1679703321/ifbxzozxpqkzon1y5d16.jpg",
			"uid": "641e3d1859aacff696b74ddc"
		},
  ]


  return <>

    <div className="table-responsive">
      <table className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Nombre restaurante</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Direccion</th>
            <th scope="col">ciudad</th>
            <th scope="col">Imagen</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="d-flex-col ">

          {
            <ItemTableRestaurant
            restaurant={restaurant}
            />
          }
        </tbody>
      </table>
    </div>
    


  </>;
};
