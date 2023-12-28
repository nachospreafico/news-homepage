import Logo from "./../assets/images/logo.svg";
import Burger from "./../assets/images/icon-menu.svg";
import BurgerClose from "./../assets/images/icon-menu-close.svg";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  function handleOverlayClick() {
    setNav(!nav);
  }

  return (
    <header>
      {/* Mobile header */}
      <div className="md:hidden relative flex flex-row justify-between items-center px-4 py-6">
        <img src={Logo} alt="logo" />
        <img
          src={nav ? BurgerClose : Burger}
          onClick={() => setNav(!nav)}
          alt="burger icon"
          className={`z-10 ${nav ? "fixed right-5 top-7" : null}`}
        />
        <div
          id="overlay"
          className={`${
            nav ? "" : "hidden"
          } fixed top-0 left-0 w-screen h-screen bg-black/30`}
          onClick={nav ? handleOverlayClick : null}
        ></div>
        <nav
          className={`fixed top-0 right-0 bg-white z-2 w-[70%] flex flex-col px-6 h-screen gap-6 pt-32 ${
            nav ? "" : "hidden"
          }`}
        >
          <a
            className="text-lg font-medium"
            href="#home"
            onClick={() => setNav(!nav)}
          >
            Home
          </a>
          <a
            className="text-lg font-medium"
            href="#new"
            onClick={() => setNav(!nav)}
          >
            New
          </a>
          <a className="text-lg font-medium">Popular</a>
          <a
            className="text-lg font-medium"
            href="#trending"
            onClick={() => setNav(!nav)}
          >
            Trending
          </a>
          <a className="text-lg font-medium">Categories</a>
        </nav>
      </div>

      {/* Bigger devices header */}
      <div className="hidden md:flex flex-row justify-between items-center md:max-w-[750px] md:py-8 lg:max-w-[790px] lg:py-12 xl:max-w-[1110px] xl:py-16 m-auto">
        <img src={Logo} alt="logo" className="lg:cursor-pointer" />
        <nav className="flex flex-row gap-8">
          <a className="text-lg font-medium lg:hover:text-[tomato] lg:cursor-pointer duration-200">
            Home
          </a>
          <a className="text-lg font-medium lg:hover:text-[tomato] lg:cursor-pointer duration-200">
            New
          </a>
          <a className="text-lg font-medium lg:hover:text-[tomato] lg:cursor-pointer duration-200">
            Popular
          </a>
          <a className="text-lg font-medium lg:hover:text-[tomato] lg:cursor-pointer duration-200">
            Trending
          </a>
          <a className="text-lg font-medium lg:hover:text-[tomato] lg:cursor-pointer duration-200">
            Categories
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
