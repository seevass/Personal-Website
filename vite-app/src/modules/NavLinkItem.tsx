import React, { useState } from 'react';
import { NavLink } from '@mantine/core';
import './NavLinkItem.css';
import { getRandomHoverColor } from '../helpers/colorUtils';

interface NavLinkItemProps {
  to: string;
  label: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const styles = {
    color: isHovered ? getRandomHoverColor() : 'var(--main-text-color)',
  };

  return (
    <NavLink
      className="navLink"
      label={label}
      component="a"
      href={to}
      target={to === "/resume.pdf" ? "_blank" : undefined} // Opens resume link in a new tab
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default NavLinkItem;
