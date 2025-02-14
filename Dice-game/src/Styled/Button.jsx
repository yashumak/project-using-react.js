import React from "react";

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-black-300 text-black rounded-lg text-lg hover:bg-blue-500 border border-black transition"
  >
    {children}
  </button>
);

export const OutlineButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-white text-black rounded-lg font-xl border border-black hover:text-white transition"
  >
    {children}
  </button>
);

export { Button }; 