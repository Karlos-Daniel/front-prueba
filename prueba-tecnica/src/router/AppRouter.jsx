import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout';

import {
  RestaurantList,
  RestaurantReserve,
  RestaurantCreate,
} from '../restaurant';
import { Login } from '../usuario';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/*<Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>*/}
        <Route path='/' element={<RestaurantList />} />
        <Route path='/create' element={<RestaurantCreate />} />
        <Route path='/reserve' element={<RestaurantReserve />} />

        <Route path='*' element={<RestaurantList />} />
      </Route>
    </Routes>
  );
};
