import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IoCloseOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import Container from "./Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navArray = [
    { path: "/", item: "Furniture" },
    { path: "/shop", item: "Shop" },
    { path: "/about", item: "About Us" },
    { path: "/contact", item: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <Container>
        <nav className="max-w-screen-2xl mx-auto py-6 flex justify-between items-center">
          <Link to="/" className="font-bold">
            Fenisha
          </Link>

          {/* Desktop Navigation */}
          <ul className="space-x-8 gap-8 items-center hidden md:flex">
            {navArray.map((nav, index) => (
              <li key={index}>
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold text-sm"
                      : `hover:text-primary ${
                          isScrolled ? "text-gray-700" : "text-white/80"
                        }`
                  }
                >
                  {nav.item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}

          {/* Mobile Menu (Dialog) */}
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50 w-screen md:hidden block"
          >
            <div className="fixed inset-0 z-50 bg-black/90 flex w-screen items-center justify-center p-4">
              <DialogPanel className="w-[95%] space-y-4 bg-secondary border p-6 border-lightText rounded-md absolute top-5">
                <div className="flex items-center justify-between gap-5">
                  <h2 className="text-xl text-white">Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/40"
                  >
                    <IoCloseOutline />
                  </button>
                </div>
                <div className="flex flex-col gap-5 pt-5 ">
                  {navArray.map((nav, index) => (
                    <NavLink
                      key={index}
                      to={nav.path}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-white  text-white/60 duration-300 relative group flex items-center gap-2"
                    >
                      <span className="w-2.5 h-2.5 rounded-full border border-white/30 inline-flex group-hover:border-white duration-300"></span>
                      {nav.item}
                      <span className="absolute border-b border-white/30 bottom-[-2px] left-0 w-full group-hover:border-white duration-300 h-px"></span>
                    </NavLink>
                  ))}
                </div>
              </DialogPanel>
            </div>
          </Dialog>

          {/* Cart Icon */}
          <div className="flex space-x-8">
            <div className="relative">
              <FaShoppingBag className="text-xl relative" />
              <sup className="absolute top-0 -right-3 bg-primary w-5 h-5 rounded-full text-white flex items-center justify-center">
                0
              </sup>
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className={`block md:hidden  ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <CiMenuFries className="text-xl" />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
