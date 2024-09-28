
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <nav className={navHeight ? "show nav" : "nav"}>
      <div className="logo" onClick={() => navigate('/home')}>RentAStay</div>
      <ul>
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/villas">PROPERTIES</Link></li>
        <li><Link to="/aboutus">ABOUT US</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        {user ? (
          <>
            <li  className='text-primary border'>Welcome, {user.name}</li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/">LOGIN</Link></li>
        )}
      </ul>
      <RxHamburgerMenu
        className="hamburger"
        onClick={() => setNavHeight(!navHeight)}
      />
    </nav>
  );
};

export default Navbar;
