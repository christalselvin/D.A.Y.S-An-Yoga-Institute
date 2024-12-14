import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi'; 
import {useNavigate } from 'react-router-dom';
import { navlist } from './Navbar';

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
 const navigate= useNavigate()


function handleCLick(path,e){
    e.preventDefault()
    setIsOpen(false)
navigate(path)
    

}
  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggles the state to open/close the menu
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button onClick={handleToggle} className="sm:hidden p-4">
        <HiOutlineMenu className="text-white text-3xl" />
      </button>

      {/* Mobile Menu */}
      <div
      className={`absolute right-0 min-h-screen top-0 bg-black overflow-hidden transition-all h-auto duration-300 ease-in-out ${
        isOpen ? "w-[450px]"  : "w-0"
      }`}>
        <div className="min-h-screen flex flex-col justify-center items-center space-y-4">
  

  {navlist.map(item=>(
    <li key={item.name}  className="text-xl font-bold text-white hover:text-gray-300 list-none " onClick={(e)=>handleCLick(item.link,e)}>{item.name}</li>
  ))}
</div>

      </div>
    </div>
  );
};

export default HamburgerMenu;
