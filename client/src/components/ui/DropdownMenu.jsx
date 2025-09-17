import * as React from "react";
import { useState, useRef, useEffect } from "react";

export function DropdownMenu({ children }) {
  return <div className="relative inline-block text-left">{children}</div>;
}

export function DropdownMenuTrigger({ children }) {
  return <>{children}</>;
}

export function DropdownMenuContent({ children, align = "end", className = "" }) {
  return (
    <div
      className={`absolute mt-2 w-40 origin-top-${align} rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${className}`}
    >
      <div className="py-1">{children}</div>
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
      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${className}`}
    >
      {children}
    </button>
  );
}

export function DropdownMenuSeparator() {
  return <div className="border-t border-gray-200 my-1"></div>;
}
