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
          <NavLink to="/industries">Industries</NavLink>
          <DropdownMenu>
            <DropdownItem><NavLink to="/gorilla_smart_and_safe_city">Gorilla Smart and Safe City</NavLink></DropdownItem>
            <DropdownItem><NavLink to="/government_and_public_services">Government and Public Services</NavLink></DropdownItem>
            <DropdownItem><NavLink to="/buildings_and_offices">Buildings and Offices</NavLink></DropdownItem>
          </DropdownMenu>
        </NavItem>

        <NavItem>
          <NavLink to="/offerings">Offerings</NavLink>
          <DropdownMenu>
            <DropdownItem><NavLink to="/policing_solutions">Policing Solutions</NavLink></DropdownItem>
          </DropdownMenu>
        </NavItem>

        <NavItem>
          <NavLink to="/technologies">Technologies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/resources">Resources</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/investors">Investors</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;