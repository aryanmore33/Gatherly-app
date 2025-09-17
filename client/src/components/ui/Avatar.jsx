import * as React from "react";

export function Avatar({ children, className }) {
  return (
    <div
      className={`relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full ${className}`}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
    />
  );
}

export function AvatarFallback({ children }) {
  return (
    <span className="flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-gray-600 text-sm font-medium">
      {children}
    </span>
  );
}
