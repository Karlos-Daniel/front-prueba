import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout';

import {
  RestaurantList,
  RestaurantReserve,
  RestaurantCreate,
  Reservas,
  EditRestaurantes,
  EditReservas
} from '../restaurant';


import {Login} from '../restaurant/componentsLogin/Login'

export const AppRouter = () => {

  

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Login/>}/>
        
        <Route path='/restaurants' element={<RestaurantList />} />

        <Route path='/createrestaurant' element={<RestaurantCreate />} />
        <Route path='/editrestaurant' element={<EditRestaurantes />} />

        <Route path='/createreserve' element={<RestaurantReserve />} />
        <Route path='/editreserve' element={<EditReservas />} />
        <Route path='/reserves' element={<Reservas />} />

        <Route path='/*' element={<RestaurantList />} />
      </Route>
    </Routes>
  );
};
