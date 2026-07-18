import { motion } from 'framer-motion';
import { GraduationCap, Code2, Briefcase, Sparkles, MapPin, Calendar } from 'lucide-react';

const highlights = [
  {
    icon: <GraduationCap className="w-7 h-7 text-blue-400" />,
    title: 'B.Tech CSE',
    desc: 'Technocrats Institute of Technology · CGPA 8.16 · 2023–2027',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: <Code2 className="w-7 h-7 text-purple-400" />,
    title: 'MERN Stack Developer',
    desc: 'React, Node.js, Express, MongoDB — building full-stack applications',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: <Sparkles className="w-7 h-7 text-pink-400" />,
    title: 'AI & Cloud Enthusiast',
    desc: 'Microsoft Azure Certified, OpenAI API developer, Salesforce Basics',
    bg: 'bg-pink-500/10 border-pink-500/20',
  },
  {
    icon: <Briefcase className="w-7 h-7 text-green-400" />,
    title: 'Actively Seeking Roles',
    desc: 'Looking for Software Engineer positions to grow and contribute',
    bg: 'bg-green-500/10 border-green-500/20',
  },
];

const About = () => {
  return (
    <section id="about" className="py-28 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left — Story */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Passionate Engineer. <span className="text-gradient">Problem Solver.</span>
            </h3>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                I'm <strong className="text-white">Shivani Patel</strong>, a Computer Science Engineering student
                (2023–2027) with a strong passion for creating impactful software. From full-stack web development
                to AI-powered applications, I love turning ideas into real, scalable products.
              </p>
              <p>
                My journey started with curiosity about how web applications work, which quickly grew into a deep
                expertise in the <strong className="text-white">MERN Stack</strong> — React, Node.js, Express, and MongoDB.
                I've built everything from AI chatbot platforms to full-featured blogging systems with Docker deployment.
              </p>
              <p>
                Beyond code, I am passionate about <strong className="text-white">Cloud Computing</strong> (Microsoft Azure Certified),
                Salesforce basics, and solving DSA problems competitively. I believe clean code and great user
                experience are equally important.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-primary" />
                Bhopal, Madhya Pradesh, India
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar size={16} className="text-primary" />
                Open to Work — 2025 / 2026
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="premium-btn text-sm py-2">
                View My Work
              </a>
              <a href="/assets/resume.pdf" download className="premium-btn-outline text-sm py-2">
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right — Highlight Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`flex items-start gap-4 p-5 rounded-2xl border ${item.bg} transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
