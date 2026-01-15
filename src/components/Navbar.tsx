import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS & TOOLS", href: "#skills" },
  { label: "VIDEO", href: "#video" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("ABOUT");

  const handleClick = (label: string) => {
    setActiveItem(label);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <span className="font-display text-xl tracking-wide text-foreground">EVAN TEONG</span>
            <span className="text-muted-foreground text-sm font-light tracking-widest">| PORTFOLIO</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleClick(item.label)}
                className={`text-xs font-medium tracking-widest transition-all duration-300 relative ${
                  activeItem === item.label
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeItem === item.label && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-foreground" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-5 border-t border-border pt-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleClick(item.label)}
                className={`block text-xs font-medium tracking-widest transition-colors ${
                  activeItem === item.label
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
