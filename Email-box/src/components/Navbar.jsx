import React from "react";
const Navbar = () => {
  return (
    <div className="my-4 flex h-[60px] items-center justify-center gap-2 rounded-lg bg-white text-black text-xl font-medium">
      <img src="/firebase.svg" alt="Firebase Logo" />
      <h1 className="font-medium">Email Store</h1>
    </div>
  );
};

export default Navbar;