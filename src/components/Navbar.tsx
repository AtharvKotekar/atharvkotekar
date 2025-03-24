import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 right-10 flex flex-col items-end justify-center gap-3 p-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col items-end gap-3">
          <Link
            to="/"
            className={`text-xl ${location.pathname === "/" ? "underline" : ""}`}
          >
            home
          </Link>
          <Link
            to="/content"
            className={`text-xl ${location.pathname === "/content" ? "underline" : ""}`}
          >
            content i like
          </Link>
          <Link
            to="/writings"
            className={`text-xl ${location.pathname === "/writings" ? "underline" : ""}`}
          >
            writings
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Open Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};
