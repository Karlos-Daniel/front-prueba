import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom/dist';
import { useNavigate } from 'react-router-dom';

export const Layout = () => {

  const [validation, setValidation] = useState(true)
  const navigate = useNavigate()
  
  useEffect(() => {
    
    if(!localStorage.getItem('token')){

      navigate('/',{replace:true})

    }else{
      
      setValidation(false)
      
      navigate('/reserves',{replace:true})

    }
  }, [localStorage])
  
  
  return (
    <div style={{}}>
      <div className='d-grid'>
      <Link to='/' hidden={!validation}  >Login</Link>
        <Link to='/createrestaurant' hidden={validation}>Crear restaurante</Link>
        <Link to='/restaurants' hidden={validation}>Lista de restaurantes</Link>
        <Link to='/createreserve'hidden={validation}>Reservar de restaurante</Link>
        <Link to='/reserves' hidden={validation}>Listar Reservas</Link>
      </div>
      <Outlet />
    </div>
  );
};
