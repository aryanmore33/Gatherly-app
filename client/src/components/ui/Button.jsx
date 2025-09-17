import * as React from "react";

export const Button = React.forwardRef(
  (
    { className = "", variant = "default", size = "default", ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
      ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
