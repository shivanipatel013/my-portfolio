import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';

const profiles = [
  {
    name: 'GitHub',
    username: 'shivanipatel013',
    url: 'https://github.com/shivanipatel013',
    icon: <FaGithub size={36} />,
    color: 'hover:border-white/40',
    iconColor: 'text-white',
    bg: 'bg-gray-900/50',
    desc: 'Open source projects & code',
  },
  {
    name: 'LinkedIn',
    username: 'shivani-patel-b20330299',
    url: 'https://www.linkedin.com/in/shivani-patel-b20330299',
    icon: <FaLinkedin size={36} />,
    color: 'hover:border-blue-500/60',
    iconColor: 'text-blue-500',
    bg: 'bg-blue-950/30',
    desc: 'Professional network & updates',
  },
  {
    name: 'CodeChef',
    username: 'shivani_130',
    url: 'https://www.codechef.com/users/shivani_130',
    icon: <SiCodechef size={36} />,
    color: 'hover:border-amber-600/60',
    iconColor: 'text-amber-500',
    bg: 'bg-amber-950/20',
    desc: 'Competitive programming battles',
  },
  {
    name: 'Salesforce Trailhead',
    username: 'Trailblazer Profile',
    url: 'https://www.salesforce.com/trailblazer/xolsjnese9f6zkr7dp',
    icon: <FaLinkedin size={36} />,
    color: 'hover:border-sky-500/60',
    iconColor: 'text-sky-400',
    bg: 'bg-sky-950/20',
    desc: 'Salesforce skills & badges',
  },
  {
    name: 'LeetCode',
    username: 'Coming Soon',
    url: '#',
    icon: <SiLeetcode size={36} />,
    color: 'hover:border-orange-500/60',
    iconColor: 'text-orange-400',
    bg: 'bg-orange-950/20',
    desc: 'Problem solving & DSA',
    placeholder: true,
  },
  {
    name: 'GeeksforGeeks',
    username: 'Coming Soon',
    url: '#',
    icon: <SiGeeksforgeeks size={36} />,
    color: 'hover:border-green-500/60',
    iconColor: 'text-green-400',
    bg: 'bg-green-950/20',
    desc: 'Practice & CS concepts',
    placeholder: true,
  },
];

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Find me across the web. Here's where I code, learn, and connect.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target={profile.placeholder ? '_self' : '_blank'}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: profile.placeholder ? 1 : 1.04 }}
              className={`glass-card p-6 flex items-start gap-5 border border-white/10 transition-all duration-300 ${profile.color} ${profile.bg} ${profile.placeholder ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className={`mt-1 flex-shrink-0 ${profile.iconColor}`}>
                {profile.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg">{profile.name}</h3>
                  {!profile.placeholder && <ExternalLink size={16} className="text-gray-500 flex-shrink-0" />}
                </div>
                <p className="text-gray-400 text-sm truncate mb-2">@{profile.username}</p>
                <p className="text-gray-500 text-xs">{profile.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
