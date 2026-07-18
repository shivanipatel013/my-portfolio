import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/shivanipatel013', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/shivani-patel-b20330299', label: 'LinkedIn' },
    { icon: <SiCodechef size={20} />, href: 'https://www.codechef.com/users/shivani_130', label: 'CodeChef' },
    { icon: <Mail size={20} />, href: 'mailto:shibupatel013@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 bg-black border-t border-white/5">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="text-4xl font-black text-gradient block mb-4">SP.</a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Shivani Patel — Software Engineer & MERN Stack Developer, building impactful digital experiences.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noreferrer"
                  title={s.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary group-hover:w-2 transition-all duration-200" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Get In Touch</h4>
            <div className="space-y-3">
              <a href="mailto:shibupatel013@gmail.com" className="flex items-center gap-3 text-gray-500 hover:text-white text-sm transition-colors group">
                <Mail size={16} className="text-primary flex-shrink-0" />
                shibupatel013@gmail.com
              </a>
              <p className="text-gray-600 text-sm">📍 Bhopal, Madhya Pradesh, India</p>
              <p className="text-gray-600 text-sm">🎓 B.Tech CSE — 2023 to 2027</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Shivani Patel · Built with{' '}
            <FaHeart className="text-red-500 inline" size={12} />{' '}
            using React & Tailwind CSS
          </p>
          <p className="text-gray-700 text-xs">Designed for impact. Built for recruiters.</p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary hover:border-primary/40 transition-all group"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
