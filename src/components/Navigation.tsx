import React from "react";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="card-glass rounded-full px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            <a href="#home">SM</a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
