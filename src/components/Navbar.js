import React from 'react';
import logo from './images/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20" style={{ backgroundColor: '#003B95', height: '190px' }}>
      <div className="flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src={logo} style={{ width: '250px', height: 'auto' }} className="mr-2" alt="GoGlobe Logo" />
        </a>

        <h1 className="text-6xl font-bold text-white text-center absolute w-full z-30" style={{ marginTop: '0' }}>Flights</h1>

        <div className="hidden md:flex md:items-center md:w-auto" id="navbar-sticky">
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <a href="#" className="text-white text-xl font-semibold">HOME</a>
            </li>
            <li>
              <a href="#" className="text-white text-xl font-semibold">HOTELS</a>
            </li>
            <li>
              <a href="#" className="text-white text-xl font-semibold">FLIGHTS</a>
            </li>
            <li>
              <a href="#" className="text-white text-xl font-semibold">TOURS</a>
            </li>
            <li>
              <a href="#" className="text-white text-xl font-semibold">ABOUT US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
