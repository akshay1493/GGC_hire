import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { NAV_LINKS, LOGO_URLS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/">
              <img src={LOGO_URLS.white} alt="GGC Hire" className="h-12 w-auto mb-6" referrerPolicy="no-referrer" />
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Finance-specialized hiring platform for CAs, finance professionals, firms, and growth-stage companies. Your partner in specialized talent acquisition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-medium text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-teal-400 transition-colors">{link.label}</Link>
                </li>
              ))}
              <li><Link to="/login" className="hover:text-teal-400 transition-colors">Login</Link></li>
              <li><Link to="/hire-talent" className="hover:text-teal-400 transition-colors">Hire Talent</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-medium text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">End-to-End Hiring</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Bulk Campus Hiring</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Executive Search</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Screening Solutions</Link></li>
              <li><Link to="/employers" className="hover:text-teal-400 transition-colors">Employer Portal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-medium text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0 mt-1" />
                <span>info@hireggc.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-1" />
                <span>+91 91361 58245</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-1" />
                <span className="text-sm">
                  1002, 10th Floor, <br />
                  DLH Park, S.V. Road, <br />
                  Goregaon West, Mumbai - 400062
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} Green Growth Consulting (GGC Hire). All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
