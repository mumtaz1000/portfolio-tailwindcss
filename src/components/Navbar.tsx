import React from "react";

const navbarLinks = ["Works", "Blog", "Contact"];

const Navbar = () => {
  const navbarItems = navbarLinks.map((nav) => 
  <li key={nav}
  className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
  <a
    aria-current="page"
    href="#"
    >{nav}
    </a>
</li> );
  return (
    <nav className="w-full">
        <ul className="list-style-none flex flex-row-reverse">{navbarItems}</ul>
    </nav>
    );
};

export default Navbar;
