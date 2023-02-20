import React from 'react';
import { NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
           <nav className='nav-bar'>
            <NavLink to="/">Random Quote App</NavLink>
            <NavLink to="/favorites">♡ Favorites quotes ♡</NavLink>
           </nav>
         
        </>
    );
}

export default Navbar;
