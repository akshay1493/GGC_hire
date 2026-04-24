import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, LOGO_URLS } from '../constants';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={LOGO_URLS.colored} alt="GGC Hire" className="h-10 lg:h-12 w-auto" referrerPolicy="no-referrer" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  location.pathname === link.href ? 'text-teal-600' : 'text-slate-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-slate-200">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-slate-600">Login</Button>
              </Link>
              <Link to="/hire-talent">
                <Button size="sm" className="flex items-center gap-2">
                  Hire Talent <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-white border-b border-slate-200"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 text-base font-medium rounded-lg transition-colors ${
                location.pathname === link.href ? 'bg-teal-50 text-teal-600' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-4">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
            <Link to="/hire-talent" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Hire Talent</Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
