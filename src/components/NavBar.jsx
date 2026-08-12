import { useEffect, useState } from "react";
import { navLinks } from "../constants";


const DRIVE_RESUME=import.meta.env.VITE_DRIVE_RESUME;
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Rudra
        </a>

        <nav
          className={`desktop transition-opacity duration-2000
        ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-end items-center gap-3">
          <a
            href={DRIVE_RESUME}
            className="contact-btn group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inner">
              <span>My Resume</span>
            </div>
          </a>
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
