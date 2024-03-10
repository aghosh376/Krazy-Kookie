// Header.js
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import '../styles.css';

const Header = () => {
  return (
    <header className="header"> 
      <div className="container flex justify-center items-center">
        <h1>Welcome to 0K Health</h1>
        <p>Krazy Kookie Presents!</p>
        <Navbar /> {/* Use the Navbar component */}
      </div>
    </header>
  );
};

export default Header;