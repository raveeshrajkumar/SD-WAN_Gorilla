import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VerticalNav = styled.nav`
  background-color: black;
  color: #fff;
  width: ${({ isOpen }) => (isOpen ? '300px' : '0px')};
  height: 97%;
  position: fixed;
  top: 5;
  left: ${({ isOpen }) => (isOpen ? '-50px' : '100px')}; /* Move off-screen when closed */
  overflow-y: auto;
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out; /* Add smooth transitions */
  z-index: 100;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 30;
`;

const NavItem = styled.li`
  padding: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #555;
  }
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
`;

const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ToggleButton onClick={toggleNavbar}>☰</ToggleButton>
      <VerticalNav isOpen={isOpen}>
        <NavList>
          <NavItem>
            <NavLink to="/templates">Templates</NavLink>
            <NavList>
              <NavItem><NavLink to="/templates/device-templates">-Device Templates</NavLink></NavItem>
              <NavItem><NavLink to="/templates/feature-templates">-Feature Templates</NavLink></NavItem>
            </NavList>
          </NavItem>
          <NavItem>
            <NavLink to="/inventory">Inventory</NavLink>
            <NavList>
              <NavItem><NavLink to="/inventory/devices">Devices</NavLink></NavItem>
            </NavList>
          </NavItem>
        </NavList>
      </VerticalNav>
    </>
  );
};

export default VerticalNavbar;
