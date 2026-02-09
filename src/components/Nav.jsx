import { useState, useEffect } from 'react';
import { Cloud, Github, Linkedin, Menu, X } from 'lucide-react';

// --- Sub Components ---
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-black hover:text-zinc-600 transition-colors duration-300 text-sm font-medium"
  >
    {children}
  </a>
);

const SocialLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
  >
    {children}
  </a>
);

// --- Main Component ---
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // 1. SCROLL LOGIC
  useEffect(() => {
    const handleScroll = () => {
      // If we are near the top (Home section), show the nav
      if (window.scrollY < 100) {
        setIsVisible(true);
      } else {
        // If we are scrolled down, hide the nav
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* 2. INVISIBLE TRIGGER ZONE 
        This is a thin invisible strip at the very top of the screen.
        If the mouse touches this area, we force the nav to show.
      */}
      <div 
        className="fixed top-0 left-0 w-full h-4 z-50 bg-transparent"
        onMouseEnter={() => setIsVisible(true)}
      />

      {/* 3. THE NAVBAR
        We use `fixed` so it stays with the viewport.
        We use `translate-y` to hide/show it based on the `isVisible` state.
        We also add `onMouseEnter` to the nav itself so it doesn't disappear while you are using it.
      */}
      <nav 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => {
          // Only hide if we are scrolled down
          if (window.scrollY > 100) setIsVisible(false);
        }}
        className={`fixed top-0 z-40 w-full bg-gray-100/90 shadow-md backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          
          {/* Brand */}
          <a href="#home" className="flex shrink-0 items-center gap-2">
            <Cloud className="h-6 w-6 text-teal-400" />
            <span className="text-lg font-bold text-gray-800">
              Ayush Kumar Dubey
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden items-center space-x-4 md:flex">
            <SocialLink href="https://github.com/ayush9027089">
              <Github className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/ayushkrdubey/">
              <Linkedin className="h-5 w-5" />
            </SocialLink>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-gray-600 hover:bg-gray-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="absolute left-0 top-full w-full bg-gray-900 shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;