import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { Mail, Download, Eye, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block" />
            <span className="text-sm text-gray-300 font-medium">Available for opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
            Hi, I'm{' '}
            <span className="text-gradient block mt-1">Shivani Patel</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-400 mb-6 h-10 flex items-center gap-2">
            <span className="text-white font-medium">I'm a</span>
            <ReactTyped
              strings={[
                'Software Engineer',
                'MERN Stack Developer',
                'Java Developer',
                'AI Enthusiast',
                'Full Stack Developer',
                'Problem Solver',
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="text-gradient font-bold"
            />
          </div>

          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
            B.Tech CSE student at Technocrats Institute of Technology (CGPA: 8.16), passionate about building
            scalable MERN apps, AI solutions, and cloud-native systems. Looking for impactful software engineering roles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="premium-btn flex items-center gap-2 text-sm"
            >
              <Eye size={16} /> View Projects
            </a>
            <a
              href="#contact"
              className="premium-btn-outline flex items-center gap-2 text-sm"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href="/assets/resume.pdf"
              download
              className="flex items-center gap-2 text-sm border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-white/10 text-white rounded-full px-6 py-3 transition-all"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <span className="text-gray-600 text-sm">Find me on</span>
            <div className="flex gap-4">
              {[
                { href: 'https://github.com/shivanipatel013', icon: <FaGithub size={22} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/shivani-patel-b20330299', icon: <FaLinkedin size={22} />, label: 'LinkedIn' },
                { href: 'https://www.codechef.com/users/shivani_130', icon: <SiCodechef size={22} />, label: 'CodeChef' },
                { href: 'mailto:shibupatel013@gmail.com', icon: <Mail size={22} />, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noreferrer"
                  title={s.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 hover:scale-110 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden md:flex justify-center items-center"
        >
          {/* Outer ring glow */}
          <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 blur-md opacity-40 animate-pulse" />

          {/* Profile picture */}
          <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-primary to-secondary p-[3px] z-10">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
              <img
                src="/assets/media__1784383274632.jpg"
                alt="Shivani Patel"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Floating Tech Badges */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="absolute top-4 right-0 glass-card px-4 py-2 flex items-center gap-2 shadow-lg"
          >
            <span className="text-lg">⚛️</span>
            <span className="text-white text-sm font-semibold">React.js</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute bottom-8 left-0 glass-card px-4 py-2 flex items-center gap-2 shadow-lg"
          >
            <span className="text-lg">☕</span>
            <span className="text-white text-sm font-semibold">Java</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="absolute bottom-24 right-0 glass-card px-4 py-2 flex items-center gap-2 shadow-lg"
          >
            <span className="text-lg">🍃</span>
            <span className="text-white text-sm font-semibold">MongoDB</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="absolute top-16 left-0 glass-card px-4 py-2 flex items-center gap-2 shadow-lg"
          >
            <span className="text-lg">🟢</span>
            <span className="text-white text-sm font-semibold">Node.js</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
