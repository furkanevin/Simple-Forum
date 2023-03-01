import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ addLink }) => {
  return (
    <header>
      <h1>FORUM</h1>

      {addLink ? (
        <Link className="link" to={'/add-post'}>
          Post At
        </Link>
      ) : (
        <Link className="link" to={'/'}>
          Ana Sayfaya Git
        </Link>
      )}
    </header>
  );
};

export default Header