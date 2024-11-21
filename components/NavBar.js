import React from "react";
import Link from 'next/link'

const NavBar = () => {
  return (
    <header className="w-full px-24 py-6">
      <nav className="w-full flex items-center justify-between">
        <div className="md:hidden">
          <h1 className="">HomeBarger</h1>
        </div>
        <div>
              <h2>logo</h2>
        </div>
        <div className="flex items-center md:gap-10">
          <ul className="md:flex md:items-center md:gap-10 hidden">
            <li>
              <Link href="#">Our Companies</Link>
            </li>    
            <li>
              <Link href="#">About Us</Link>
            </li>             
            <li>
              <Link href="#">Blogs</Link>
            </li>            
            <li>
              <Link href="#">Media</Link>
            </li>            
            <li>
              <Link href="#">FAQs</Link>
            </li>            
            <li>
              <Link href="#">Career</Link>
            </li>            
          </ul>
          <button>contact</button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
