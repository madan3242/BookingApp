import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{ color:"inherit", textDecoration:"none"}}>
            <div className="logo">Booking</div>          
          </Link>
            {user ? user.username: (<div className="navItems">
                <button className="navButton" onClick={() => navigate('/login')}>Register</button>
                <button className="navButton" onClick={() => navigate('/login')}>Login</button>
            </div>)}
        </div>
    </div>
  )
}

export default Navbar