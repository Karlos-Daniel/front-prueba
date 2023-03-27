import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom/dist';

export const Layout = () => {
  return (
    <div style={{}}>
      <div style={{}}>
      |<Link to='/login'>Login</Link>|
        <Link to='/create'>Crear restaurante</Link>|
        <Link to='/'>Lista de restaurantes</Link>|
        <Link to='reserve'>Reservar de restaurante</Link>|
        <Link to='reservas'>Listar Reservas</Link>|
      </div>
      <Outlet />
    </div>
  );
};
