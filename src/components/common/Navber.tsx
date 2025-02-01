"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import logoBlue from "@/assets/logoblue.svg"; // Blue variant of the logo
import { ChevronRight } from "lucide-react";

const Navber = () => {
  const [isVisible, setIsVisible] = useState(true); // Initially visible
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        setIsScrolledUp(currentScrollY > 50);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 w-full transition-all duration-300  z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolledUp ? "bg-white text-[#0057c1]" : "bg-transparent text-white"}`}
    >
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Solution</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          {/* Logo changes based on scroll */}
          <Image src={isScrolledUp ? logoBlue : logo} alt="logo" />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[18px]">
            <li>
            <details>
                <summary>Solutions</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              
                <summary>Services</summary>
                
             
            </li>
            <li>
              <a>About us</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end ">
          {/* Button changes on scroll */}
          <button
            className={`py-3 flex items-center justify-between font-bold rounded px-8 text-lg transition-all duration-300 ${
              isScrolledUp
                ? "bg-[#ff6a3d] text-white"
                : "border-2 border-white text-white hover:bg-[#ff6a3d]"
            }`}
          >
            Contact us
            <ChevronRight className="ml-2"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
