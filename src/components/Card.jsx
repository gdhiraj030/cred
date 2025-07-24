// Card.jsx
import React from "react";

function Card({
  backgroundImage = "",
  title = "",
  subtitle = "",
  buttonText = "Know More",
  className = "",
  children,
}) {
  return (
    <div
      className={`relative  shrink-0 bg-cover bg-[position:10%_100%] rounded-md text-white p-8 flex flex-col items-center justify-center gap-8 border-[1px] border-gray-900 ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-md" />

      <div className="relative z-10 text-center">
        {title && <h1 className="text-xl font-thin">{title}</h1>}
        {subtitle && (
          <h2 className="text-4xl font-semibold mt-2">{subtitle}</h2>
        )}
        {children && <div className="mt-4">{children}</div>}
        <button className="mt-6 py-3 px-8 rounded-md bg-transparent border-2 border-white hover:bg-white hover:text-black transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
