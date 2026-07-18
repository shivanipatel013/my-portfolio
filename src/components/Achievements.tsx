import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Award, Cpu, Cloud, BookOpen } from 'lucide-react';

// Custom CountUp hook - no external dependency
const useCountUp = (end: number, duration: number = 2000, decimals: number = 0, active: boolean = false) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutQuad easing
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = startValue + (end - startValue) * eased;
      setCount(parseFloat(current.toFixed(decimals)));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, decimals, active]);

  return count;
};

// Intersection observer hook
const useIntersection = (threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const achievements = [
  {
    icon: <Code2 size={32} />,
    count: 400,
    suffix: '+',
    label: 'DSA Problems Solved',
    color: 'text-blue-400',
    glow: 'shadow-blue-500/20',
    border: 'hover:border-blue-500/30',
  },
  {
    icon: <Trophy size={32} />,
    count: 30,
    suffix: '+',
    label: 'Coding Contests',
    color: 'text-yellow-400',
    glow: 'shadow-yellow-500/20',
    border: 'hover:border-yellow-500/30',
  },
  {
    icon: <Cpu size={32} />,
    count: 5,
    suffix: '+',
    label: 'MERN Projects Built',
    color: 'text-green-400',
    glow: 'shadow-green-500/20',
    border: 'hover:border-green-500/30',
  },
  {
    icon: <Award size={32} />,
    count: 5,
    suffix: '',
    label: 'Certifications Earned',
    color: 'text-purple-400',
    glow: 'shadow-purple-500/20',
    border: 'hover:border-purple-500/30',
  },
  {
    icon: <Cloud size={32} />,
    count: 2,
    suffix: '',
    label: 'NPTEL Elite Badges',
    color: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
    border: 'hover:border-cyan-500/30',
  },
  {
    icon: <BookOpen size={32} />,
    count: 8.16,
    suffix: '',
    label: 'CGPA (out of 10)',
    color: 'text-pink-400',
    glow: 'shadow-pink-500/20',
    border: 'hover:border-pink-500/30',
    decimals: 2,
  },
];

const AchievementCard = ({
  item,
  index,
}: {
  item: (typeof achievements)[0];
  index: number;
}) => {
  const { ref, isVisible } = useIntersection(0.2);
  const count = useCountUp(item.count, 2200, item.decimals ?? 0, isVisible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card p-8 text-center group transition-all duration-300 hover:scale-105 hover:shadow-xl ${item.glow} ${item.border} border border-white/8`}
    >
      <div
        className={`flex justify-center mb-4 ${item.color} transition-transform duration-300 group-hover:scale-110`}
      >
        {item.icon}
      </div>
      <div className={`text-4xl font-black mb-2 ${item.color} tabular-nums`}>
        {count}
        {item.suffix}
      </div>
      <p className="text-gray-400 font-medium text-sm leading-snug">{item.label}</p>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
            A snapshot of my journey — from coding contests and certifications to
            impactful projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <AchievementCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
