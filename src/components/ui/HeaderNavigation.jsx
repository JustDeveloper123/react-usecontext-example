import { CartContext } from '@store';
import { useContext } from 'react';

const HeaderNavigation = ({ onOpenCart }) => {
  const { totalProducts } = useContext(CartContext);

  return (
    <nav className="flex w-3/5 items-center justify-between gap-4">
      <ul className="flex items-center gap-3">
        <li>
          <a href="##" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="##" className="nav-link">
            About Us
          </a>
        </li>
        <li>
          <a href="##" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <button
        className="relative h-10 w-10 transition duration-100 hover:brightness-90"
        onClick={onOpenCart}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-full w-full"
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
        <span className="absolute bottom-0 left-[90%] flex h-5 min-w-5 -translate-x-2/3 items-center justify-center rounded-full bg-red-500 p-1">
          {totalProducts}
        </span>
      </button>
    </nav>
  );
};

export default HeaderNavigation;
