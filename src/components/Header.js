import React from 'react';
import Logo from '../Assets/Logo.svg';

export default function Header(props) {
  return (
    <>
      <nav>
        <img src={Logo} alt='' />
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li className='btn'>Create an account</li>
        </ul>
      </nav>
    </>
  );
}
