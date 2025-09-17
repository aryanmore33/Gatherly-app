import * as React from "react";
import { useState, useRef, useEffect } from "react";

export function DropdownMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    // console.log('Dropdown toggled:', !isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {React.Children.map(children, (child, index) => {
        if (child?.type?.name === 'DropdownMenuTrigger' || 
            child?.type === DropdownMenuTrigger) {
          return React.cloneElement(child, { 
            key: index,
            onClick: toggleDropdown,
            isOpen 
          });
        }
        if (child?.type?.name === 'DropdownMenuContent' || 
            child?.type === DropdownMenuContent) {
          return React.cloneElement(child, { 
            key: index,
            isOpen,
            onClose: () => setIsOpen(false)
          });
        }
        return child;
      })}
    </div>
  );
}

export function DropdownMenuTrigger({ children, onClick, isOpen, asChild }) {
//   console.log('DropdownMenuTrigger rendered, asChild:', asChild);
  
  const handleClick = (e) => {
    // console.log('Trigger clicked!');
    e.preventDefault();
    e.stopPropagation();
    if (onClick) onClick(e);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { 
      onClick: handleClick,
      'aria-expanded': isOpen,
      style: { ...children.props.style, cursor: 'pointer' }
    });
  }
  
  return (
    <button onClick={handleClick} aria-expanded={isOpen} style={{ cursor: 'pointer' }}>
      {children}
    </button>
  );
}

export function DropdownMenuContent({ 
  children, 
  align = "end", 
  className = "", 
  isOpen,
  onClose 
}) {
//   console.log('DropdownMenuContent rendered, isOpen:', isOpen);

  if (!isOpen) {
    return null;
  }

  const alignmentClass = align === 'end' ? 'right-0' : 'left-0';

  return (
    <div
      className={`absolute mt-2 ${alignmentClass} rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${className}`}
    >
      <div className="py-1">
        {React.Children.map(children, (child, index) => {
          if (child?.type?.name === 'DropdownMenuItem' || 
              child?.type === DropdownMenuItem) {
            return React.cloneElement(child, {
              key: index,
              onClick: (e) => {
                if (child.props.onClick) {
                  child.props.onClick(e);
                }
                onClose();
              }
            });
          }
          return React.cloneElement(child, { key: index });
        })}
      </div>
    </div>
  );
}

export function DropdownMenuLabel({ children }) {
  return (
    <div className="px-4 py-2 text-sm font-semibold text-gray-700">
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export function DropdownMenuSeparator() {
  return <div className="border-t border-gray-200 my-1"></div>;
}