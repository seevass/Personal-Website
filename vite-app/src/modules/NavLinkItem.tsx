import React, {useState} from 'react';
import { NavLink } from '@mantine/core';
import './NavLinkItem.css';

interface NavLinkItemProps {
  to: string;
  label: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, label }) => {
  const hoverColors = [
    '#ff9188', // pink
    '#3d6fbf', // blue
    '#f75d64', // hot pink
  ];

  const getRandomHoverColor = () => { 
    return hoverColors[Math.floor(Math.random() * hoverColors.length)];
  };  

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const styles = {
    fontSize: "1.4rem",
    color: isHovered ? getRandomHoverColor() : 'var(--main-text-color)',
  };



  return (
    <NavLink className="navLink"
      label={label} 
      component="a" 
      href={to} 
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default NavLinkItem;
