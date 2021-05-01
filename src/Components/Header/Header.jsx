import React from 'react';
import NavbarCreate from './Navbar/NavbarCreate';
import "./Header.css"
import Banner from './Banner/Banner';

const Header = () => {
    return (
        <div className = "header-style">
            <NavbarCreate></NavbarCreate>
            <Banner></Banner>
        </div>
    );
};

export default Header;