// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  margin-left: ${({ isOpen }) => (isOpen ? '200px' : '0')}; /* Adjust margin when vertical navbar is open */
  transition: margin-left 0.3s ease-in-out; /* Add smooth transition for button movement */

  &:hover {
    color: #007bff;
  }
`;

const Nav = styled.nav`
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  font-weight: bold;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #1e3a5a;
  color: #fff;
  list-style: none;
  padding: 10px;
  margin: 0;
  display: none;
`;

const DropdownItem = styled.li`
  padding: 5px 0;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <ToggleButton isOpen={isOpen} onClick={toggleNavbar}>☰</ToggleButton>
      <Logo src={require("../images/gorilla_black.png")} alt='logo' />
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>


        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup">Signup</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
