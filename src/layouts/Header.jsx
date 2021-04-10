import React, { useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import {
  ColorSwatchIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/solid';
import { NavLink } from 'react-router-dom';

import Logo from './logo.svg';
import useOnClickOutside from '../hooks/useOnClickOutside';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const headerContainerRef = useRef();
  useOnClickOutside(headerContainerRef, () => setShowMenu(() => false));

  return (
    <div className="bg-white sticky top-0 z-50" ref={headerContainerRef}>
      <div className="maxW-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink className="hover:text-digital-blue" to="/">
              <span className="sr-only">Home</span>
              <Logo className="h-8 w-auto sm:h-10" />
            </NavLink>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-digital-blue hover:bg-light-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={() => setShowMenu((state) => !state)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <NavLink
              exact
              to="/"
              className="py-3 px-5 flex items-center rounded-md hover:bg-light-blue hover:text-digital-blue"
              activeClassName="text-digital-blue font-medium underline"
            >
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className="py-3 px-5 flex items-center rounded-md hover:bg-light-blue hover:text-digital-blue"
              activeClassName="text-digital-blue font-medium underline"
            >
              Portfolio
            </NavLink>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0" />
        </div>
      </div>

      <Transition
        show={showMenu}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Logo className="h-8 w-8" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-digital-blue hover:bg-light-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setShowMenu((state) => !state)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-1">
                  <NavLink
                    exact
                    to="/"
                    className="py-3 px-5 flex items-center rounded-md hover:bg-light-blue hover:text-digital-blue"
                    activeClassName="text-digital-blue font-medium underline"
                  >
                    <HomeIcon className="flex-shrink-0 h-6 w-6 text-digital-blue" />
                    <span className="ml-3 text-base">Home</span>
                  </NavLink>

                  <NavLink
                    to="/portfolio"
                    className="py-3 px-5 flex items-center rounded-md hover:bg-light-blue hover:text-digital-blue"
                    activeClassName="text-digital-blue font-medium underline"
                  >
                    <ColorSwatchIcon className="flex-shrink-0 h-6 w-6 text-digital-blue" />
                    <span className="ml-3 text-base">Portfolio</span>
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Header;
