import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header'>
      <Link to="/a-propos">A propos</Link>
      <Link to="/temoignages">Temoignages</Link>
      <Link to="/a-propos">En savoir plus</Link>
      <Link to="/temoignages">Agenda</Link>
      <Link to="/temoignages">Contact</Link>
    </nav>
  );
}

export default Header;
