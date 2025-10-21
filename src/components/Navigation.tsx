import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, FileText, Mail } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Resume", href: "#resume", icon: FileText },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="card-glass rounded-full px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            <a href="#home">SM</a>
          </div>

          {/* Desktop nav with icons (unchanged) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* mobile menu button removed */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
