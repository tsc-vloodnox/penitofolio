"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "../theme/ThemeToggle";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LandingHeader() {
  const [activeSection, setActiveSection] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const NavItems = () => (
    <ul className="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
      <li className={activeSection === "home" ? "text-primary" : ""}>
        <a
          className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4"
          href="pages/solution.html"
        >
          <span>Home</span>
        </a>
      </li>
      <li className={activeSection === "about" ? "text-primary" : ""}>
        <a
          className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4"
          href="#about"
        >
          <span>About</span>
        </a>
      </li>
      <li className={activeSection === "services" ? "text-primary" : ""}>
        <a
          className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4"
          href="#services"
        >
          <span>Services</span>
        </a>
      </li>
      <li className={activeSection === "work" ? "text-primary" : ""}>
        <a
          className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4"
          href="#work"
        >
          <span>Work</span>
        </a>
      </li>
    </ul>
  );

  return (
    <header>
      <nav
        id="navbar"
        className={cn(
          "fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-primary/90 backdrop-blur dark:border-gray-700/30 dark:bg-[#871b22]/80",
          isOpen ? "navbar-active" : ""
        )}
      >
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <Link className="mr-6 flex items-center space-x-2" href="/">
                <span className="hidden font-bold sm:inline-block">
                  The Wolf Art
                </span>
              </Link>

              <button
                id="hamburger"
                onClick={toggleMenu}
                className="relative -mr-6 p-6 lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                ></div>
              </button>
            </div>
            <div
              id="layer"
              aria-hidden="true"
              className={`fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 ${
                isOpen ? "scale-y-100" : ""
              } lg:hidden`}
            ></div>
            <div
              id="navlinks"
              className={`absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-[#871b22] dark:shadow-none lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <NavItems />
              </div>

              <div className="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
                <a
                  className="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-secondary dark:before:bg-red-500 sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-secondary"
                  href="mailto:zdsd@sdsd.sd"
                >
                  <span className="relative text-sm font-semibold text-white dark:text--900 lg:text-primary lg:dark:text-white">
                    Contact
                  </span>
                </a>
              </div>
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
            </div>
            <div className="fixed top-3 right-14 z-20 sm:right-24 lg:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
