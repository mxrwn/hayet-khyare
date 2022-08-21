import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header'>
      <Link to="/a-propos">A propos</Link>
      <Link to="/temoignages">Temoignages</Link>
    </nav>
  );
}

export default Header;
