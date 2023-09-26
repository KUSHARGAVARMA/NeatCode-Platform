import { Link, NavLink } from 'react-router-dom';
// import { FaOpencart } from 'react-icons/fa';
import './navbar.css';
// import { useCart } from '../../hooks/useCart'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
        
            <ul className='nav-items'>
                <li className='nav-item'> 
                <Link to='/'>NeatCode</Link>
                </li>
                <li className='nav-item'> 
                <Link to='/login'>Login</Link>
                </li>
                <li className='nav-item'> 
                <Link to='/'>Sign-Up</Link>
                </li>
                <li className='nav-item'> 
                <Link to='/solve'>All Problems</Link>
                </li>
            </ul>
        </div>
    </div>
    

  );
}

export default Navbar;

